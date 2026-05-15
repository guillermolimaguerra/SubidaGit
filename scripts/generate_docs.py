import os
from google import genai

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

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
Sos experto en Java y Tomcat.

Archivo: {path}

Código:
{content}

Generar documentación en Markdown:
- Qué hace
- Métodos principales
- Relaciones
"""

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )

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
