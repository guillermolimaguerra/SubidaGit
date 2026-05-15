function BootstrapTooltip() {
	this.LabelsShowDelay;
	this.ButtonsShowDelay;
	this.InputsShowDelay;
	this.ImagesShowDelay;
	this.HideDelay;
	this.Width;
	this.Height;
	this.ClassSelector;
	this.DefaultPosition;
	this.Timer;

	this.show = function () {
		///UserCodeRegionStart:[show] (do not remove this comment.)

		this.renderTooltip();

		var thisC = this;

		this.Timer = window.setTimeout(function (thisC) {
			thisC.renderTooltip();
		}(this), 1000);

		gx.fx.obs.addObserver("gx.onafterevent", window, function (thisC) {
			return function (e) {
				thisC.renderTooltip();
			}
		}(this));
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	this.renderTooltip = function () {
		clearTimeout(this.Timer);
		if (this.ClassSelector.length < 1) {
			if (this.DefaultPosition.length > 0) {
				$("[title]").attr("data-placement", this.DefaultPosition);
			} else {
				$("[title]").attr("data-placement", "bottom");
			}
			$(".Top[title]").attr("data-placement", "top");
			$(".Left[title]").attr("data-placement", "left");
			$(".Right[title]").attr("data-placement", "right");
			$(".Bottom[title]").attr("data-placement", "bottom");

			//all dom elements with title
			$("[title]:not(span,input,img)").tooltip({ animation: 'true', html: 'true', delay: { hide: this.HideDelay } });
			//all inputs 
			$("input:not([type=button])[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.InputsShowDelay, hide: this.HideDelay } });
			//only inputs of type button 
			$("input[type=button][title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ButtonsShowDelay, hide: this.HideDelay } });
			//all spans 
			$("span[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.LabelsShowDelay, hide: this.HideDelay } });
			//all images 
			$("img[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ImagesShowDelay, hide: this.HideDelay } });
		}
		else {
			$("." + this.ClassSelector + "Left[title]").attr("data-placement", "left");
			$("." + this.ClassSelector + "Top[title]").attr("data-placement", "top");
			$("." + this.ClassSelector + "Bottom[title]").attr("data-placement", "bottom");
			$("." + this.ClassSelector + "Right[title]").attr("data-placement", "right");
			if (this.DefaultPosition.length > 0) {
				$("." + this.ClassSelector + "[title]").attr("data-placement", this.DefaultPosition);
			} else {
				$("." + this.ClassSelector + "[title]").attr("data-placement", "bottom");
			}

			//all dom elements with title
			$("." + this.ClassSelector + "[title]:not(span,input,img)").tooltip({ animation: 'true', html: 'true', delay: { hide: this.HideDelay } });
			//all inputs 
			$("input." + this.ClassSelector + ":not([type=button])[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.InputsShowDelay, hide: this.HideDelay } });
			//only inputs of type button 
			$("input[type=button]." + this.ClassSelector + "[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ButtonsShowDelay, hide: this.HideDelay } });
			//all spans 
			$("span." + this.ClassSelector + "[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.LabelsShowDelay, hide: this.HideDelay } });
			//all images 
			$("img." + this.ClassSelector + "[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ImagesShowDelay, hide: this.HideDelay } });

			/*LEFT*/

			//all dom elements with title
			$("." + this.ClassSelector + "Left[title]:not(span,input,img)").tooltip({ animation: 'true', html: 'true', delay: { hide: this.HideDelay } });
			//all inputs 
			$("input." + this.ClassSelector + "Left:not([type=button])[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.InputsShowDelay, hide: this.HideDelay } });
			//only inputs of type button 
			$("input[type=button]." + this.ClassSelector + "Left[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ButtonsShowDelay, hide: this.HideDelay } });
			//all spans 
			$("span." + this.ClassSelector + "Left[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.LabelsShowDelay, hide: this.HideDelay } });
			//all images 
			$("img." + this.ClassSelector + "Left[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ImagesShowDelay, hide: this.HideDelay } });

			/*TOP*/

			//all dom elements with title
			$("." + this.ClassSelector + "Top[title]:not(span,input,img)").tooltip({ animation: 'true', html: 'true', delay: { hide: this.HideDelay } });
			//all inputs 
			$("input." + this.ClassSelector + "Top:not([type=button])[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.InputsShowDelay, hide: this.HideDelay } });
			//only inputs of type button 
			$("input[type=button]." + this.ClassSelector + "Top[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ButtonsShowDelay, hide: this.HideDelay } });
			//all spans 
			$("span." + this.ClassSelector + "Top[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.LabelsShowDelay, hide: this.HideDelay } });
			//all images 
			$("img." + this.ClassSelector + "Top[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ImagesShowDelay, hide: this.HideDelay } });

			/*RIGHT*/

			//all dom elements with title
			$("." + this.ClassSelector + "Right[title]:not(span,input,img)").tooltip({ animation: 'true', html: 'true', delay: { hide: this.HideDelay } });
			//all inputs 
			$("input." + this.ClassSelector + "Right:not([type=button])[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.InputsShowDelay, hide: this.HideDelay } });
			//only inputs of type button 
			$("input[type=button]." + this.ClassSelector + "Right[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ButtonsShowDelay, hide: this.HideDelay } });
			//all spans 
			$("span." + this.ClassSelector + "Right[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.LabelsShowDelay, hide: this.HideDelay } });
			//all images 
			$("img." + this.ClassSelector + "Right[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ImagesShowDelay, hide: this.HideDelay } });

			/*BOTTOM*/

			//all dom elements with title
			$("." + this.ClassSelector + "Bottom[title]:not(span,input,img)").tooltip({ animation: 'true', html: 'true', delay: { hide: this.HideDelay } });
			//all inputs 
			$("input." + this.ClassSelector + "Bottom:not([type=button])[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.InputsShowDelay, hide: this.HideDelay } });
			//only inputs of type button 
			$("input[type=button]." + this.ClassSelector + "Bottom[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ButtonsShowDelay, hide: this.HideDelay } });
			//all spans
			$("span." + this.ClassSelector + "Bottom[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.LabelsShowDelay, hide: this.HideDelay } });
			//all images 
			$("img." + this.ClassSelector + "Bottom[title]").tooltip({ animation: 'true', html: 'true', delay: { show: this.ImagesShowDelay, hide: this.HideDelay } });
		}
	}


	///UserCodeRegionEnd: (do not remove this comment.):
}


