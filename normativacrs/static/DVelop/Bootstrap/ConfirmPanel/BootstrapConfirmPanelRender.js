function BootstrapConfirmPanel()
{
	this.Width;
	this.Height;
	this.Title;
	this.ConfirmText;
	this.YesButtonCaption;
	this.NoButtonCaption;
	this.CancelButtonCaption;
	this.YesButtonPosition;
	this.ConfirmType;
	this.Result;
	this.Class;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		
		if(this.my_Panel == undefined){
			this.my_Panel = new DVelopBootstrapConfirmPanel(this);
			this.my_Panel.render();
		}
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	this.Confirm = function() {
		if(this.my_Panel != undefined){
			this.my_Panel.openModal();
		}
	}
	
	this.CloseConfirmPanel = function() {
		if(this.my_Panel != undefined){
			this.my_Panel.closeModal();
		}
	}
	///UserCodeRegionEnd: (do not remove this comment.):
}
