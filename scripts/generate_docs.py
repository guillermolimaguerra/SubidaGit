import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash-latest")

def read_files():
    files = []
    for root, _, filenames in os.walk("."):
        if ".git" in root or "docs" in root:
            continue

        for f in filenames:
            if f.endswith((".java", ".xml", ".jsp")):
                path = os.path.join(root, f)

                try:
                    with open(path, "r", encoding="utf-8", errors="ignore") as file:
                        content = file.read()

                        if len(content) > 12000:
                            content = content[:12000]

                        files.append((path, content))
                except:
                    pass
    return files

def analyze(path, content):
    prompt = f"""
Sos un experto en Java y Tomcat.

Analizá este archivo:

Archivo: {path}

Código:
{content}

Generá documentación en Markdown con:
- Qué hace
- Métodos principales
- Cómo se conecta con el sistema
"""

    response = model.generate_content(prompt)
    return response.text

def main():
    os.makedirs("docs", exist_ok=True)

    files = read_files()

    for path, content in files:
        md = analyze(path, content)

        name = path.replace("/", "_").replace(".", "_")

        with open(f"docs/{name}.md", "w", encoding="utf-8") as f:
            f.write(md)

if __name__ == "__main__":
    main()
