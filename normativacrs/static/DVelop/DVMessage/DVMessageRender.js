function DVelop_DVMessage($)
{
	this.Width;
	this.MinHeight;
	this.StylingType;
	this.DefaultMessageType;
	this.TitleEscape;
	this.TextEscape;
	this.ChangeNewLinesToBRs;
	this.Hide;
	this.DelayUntilHide;
	this.MouseHideReset;
	this.MessageAdditionalClasses;
	this.StackVerticalSpacing;
	this.StackHorizontalSpacing;
	this.StackVerticalFirstPos;
	this.StackHorizontalFirstPos;
	this.MessageCornerClass;
	this.Shadow;
	this.Opacity;
	this.EffectIn;
	this.EffectOut;
	this.AnimationSpeed;
	this.StartPosition;
	this.NextMessagePosition;
	this.Closer;
	this.CloserHover;
	this.Sticker;
	this.StickerHover;
	this.LabelCloseButton;
	this.LabelStickButton;
	this.showEvenOnNonblock;
	this.NonBlock;
	this.NonBlockOpacity;
	this.EnableHistory;
	this.Menu;
	this.FixedMenu;
	this.MaxOnScreen;
	this.LabelRedisplay;
	this.LabelAll;
	this.LabelLast;
	
	this.show = function() {
		///UserCodeRegionStart:[show] (do not remove this comment.)
		 
	    gx.fx.obs.addObserver('gx.onmessages', this, this.showMessages);  
		gx.fx.obs.addObserver('gx.onunload', this, this.onLeave);  
		
		
	    if (!this.IsPostBack) {
			
	        var divErrors = jQuery('#gxErrorViewer').children();
	        var msgsArr = [];
	        jQuery.each(divErrors, function(index, value) {
	            msgsArr.push({ att: '', type: 0, text: jQuery(value).html() });
	        });
	        var msgs = {};
	        msgs['MAIN'] = msgsArr;
	        this.showMessages(msgs);
	    } else {
	    	try {
	    		jQuery("[id*=gxErrorViewer]").remove(); 
	    	} catch (ERROR) { 
	    		
	    	}
	    }
	    gx.evt.on_ready(this, this.removeErrorViewers);
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	this.onLeave = function(){
		var key = 'dvmessage';
		var msg = readCookie(key);
		if( msg != '' && msg != null) {  
			msg = unescape(msg.replace(/\+/g," ")); 
			
			var messages = [];
			messages.push( eval('(' + msg + ')') ); 
			
			this.dvRenderPNotify(messages); 
			deleteCookie(key);
		}
	}
	
	this.removeErrorViewers = function() {
		//from sca.message
		jQuery("[id*=gxErrorViewer]").remove();
	}
	
	this.showMessages = function(messages) {
		
		//convert UC properties to PNotify options
		this._options = this.dvGetPinesNotifyDefaultsFromGXUC();
		
		//process messages
		for (var key in messages) {
			if (key != undefined){						
				this.dvRenderPNotify(messages[key]);
			}
		}
	   
	}
	
	this.dvRenderPNotify = function(messages) {
		//https://github.com/sciactive/pnotify
		//http://sciactive.com/pnotify
		
		//save this object
		var _this = this;
		
		//get message(s) container
		var container = messages;
		if (messages.msgs) container = messages.msgs;
				
		// PNotify + UC options.
		var _gralOpts = jQuery.extend( {}, PNotify.prototype.options, _this._options );
		
		//resolve stack (from general options)
		_gralOpts.stack.dir1 = _this.NextMessagePosition;
		
		var _class = ""; 
		switch(this.StartPosition)
		{
			case "TopCenter":
  				_class = "stack-topcenter";
  				break;
			case "TopLeft":
  				_class = "stack-topleft";
				_gralOpts.stack.dir2 = "right";
				_gralOpts.stack.push = "top";
  				break;
  			case "TopRight":
  				_class = "stack-topright";
				_gralOpts.stack.dir2 = "left";
				_gralOpts.stack.push = "top";
  				break;	
  			case "BottomRight":
  				_class = "stack-bottomright";
				_gralOpts.stack.dir2 = "left";
				_gralOpts.stack.push = "bottom";
  				break;
  			case "BottomCenter":
  				_class = "stack-bottomcenter";
  				break;
  			case "BottomLeft":
  				_class = "stack-bottomleft";
				_gralOpts.stack.dir2 = "right";
				_gralOpts.stack.push = "bottom";
  				break;
		}
	
		_gralOpts.stack.firstpos1 = _this.StackVerticalFirstPos;
		_gralOpts.stack.firstpos2 = _this.StackHorizontalFirstPos;
		_gralOpts.stack.spacing1 = _this.StackVerticalSpacing;
		_gralOpts.stack.spacing2 = _this.StackHorizontalSpacing;
		_gralOpts.addclass = _class + !" " + _this.MessageAdditionalClasses;
		//end stack 
		
		//History
		_gralOpts.history.history = _this.EnableHistory;
		_gralOpts.history.menu = _this.Menu;
		_gralOpts.history.fixed = _this.FixedMenu;
		_gralOpts.history.maxonscreen = _this.MaxOnScreen;
		_gralOpts.history.labels.redisplay = _this.LabelRedisplay;
		_gralOpts.history.labels.all = _this.LabelAll;
		_gralOpts.history.labels.last = _this.LabelLast;
		//end history
		
		//process each message
	    jQuery.each(container, function(index, msg) { 
 
			if(!msg || !msg.text) 
				return; 
			
			var _isJson = (msg.text.substr(0,1) == "{")? true:false ;  
			var _att = null; 
			//att?
			if( msg.att && msg.att != "" ) { 		
			
				jQuery("#" + msg.att + "_Balloon").remove();
				_att = jQuery("#" + msg.att).get(0); // from gx msg att
				
			} else {
				
				//parse json
				var _msgParms = _this.dvGetMessageParms(msg.text);
				
				//check if it has att selector
				if(_msgParms && _msgParms.att != "") 
					_att = jQuery(_msgParms.att).get(0); //from json
			}
			
			//msg.text = decodeURIComponent(msg.text);
			
			/* OUTPUT:
			   1) no json received 
				a) att received
					msg gx 					
				b) no att received
					pnotify
				    
			   2) json received	
			      a) att received thru json 
					 msg gx
				  b) no att received 
					 pnotify
			*/
			
			//no attribute received or is empty => output = pnotify
			if(!_att || msg.text == ""){ 	
				 _this.dvSendMessageToPNotify(msg.text);				
			} else {
				//has att => use gx alert
				_this.dvSendMessageToGX(_isJson, _att, msg);
			}
			
			var errViewers = gx.dom.byClass('gx_ev', 'span')
			$(errViewers).remove();
			
	    });
	}
	
	this.dvSendMessageToGX = function( fromJson, att, msg){
		// att can be readonly or editable
		var _this = this;
		var _msgParms = null;
		var _attSpan = jQuery("#span_" + att.id).get(0);
		var _text = msg.text;		
		var _jAtt = jQuery(att);
		
		if (fromJson){
			_msgParms = _this.dvGetMessageParms(msg.text);
			_text = _msgParms.text
			//_attSpan = jQuery("#span_" + _msgParms.att).get(0);
		} else {
			//_attSpan = jQuery("#span_" + msg.att).get(0);
		}
		
		//visible and editable control
		if( _jAtt.is(":visible") )	{		
			gx.fn.alert(att,_text); 
			att.focus();
		} else {	
			if(_attSpan)
				gx.fn.alert(_attSpan,_text); 
			else
				_this.dvSendMessageToPNotify(_text);	
		} 
		 
	}
	
	this.dvSendMessageToPNotify = function(msgText){
		//receives a json string with the message
		
		var _this = this;
		//get parms from message text		
		var _msgParms = _this.dvGetMessageParms(msgText);
		 
			
		//if not parameters were specified
		if(!_msgParms)
			_msgParms = {"text": msgText};
		
		var _gralOpts = jQuery.extend( {}, PNotify.prototype.options, _this._options );
		
		//merge message options
		var _msgOpts = jQuery.extend( {}, _gralOpts, _msgParms );
			
		//execute PNotify
		var notif = null;
		if(_msgOpts.desktop && _msgOpts.desktop.desktop){
			PNotify.desktop.permission();
			(new PNotify({
				title: _msgOpts.title,
				text: _msgOpts.text,
				styling: _msgOpts.styling,							
				desktop: {
					desktop: true,
					fallback: _msgOpts.fallback,
				}
			})).get().click(function(e) {
				if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)) return;
				//clicked the desktop notification 
			});
			
		} else {	
			if(window.parent && window.parent.PNotify){
				window.parent.$(function(){
					//workaround! 
					if(_msgOpts.stack.context)
						delete _msgOpts.stack.context;
					new window.parent.PNotify(_msgOpts);
				});
			} else { 
				notif = new PNotify(_msgOpts);
			}
		} 
	}
	
	this.dvGetPinesNotifyDefaultsFromGXUC = function(){
		
		var _v = this.Width.replace("px","");
		this.Width =  ( isNaN(_v) )? "300px" : _v + "px";
		
		_v = this.MinHeight.replace("px","");
		this.MinHeight =  ( isNaN(_v) )? "16px" : _v + "px";
		

		return {
			"title_escape":  this.TitleEscape,
			"text_escape":  this.TextEscape,
			"insert_brs":  this.ChangeNewLinesToBRs,
			"styling":  this.StylingType,
			"type":  this.DefaultMessageType,
			"width":  this.Width,
			"min_height":  this.MinHeight,
			"hide":  this.Hide,
			"delay":  this.DelayUntilHide,
			"mouse_reset":  this.MouseHideReset,
			"cornerclass":  this.MessageCornerClass,
			"shadow":  this.Shadow,
			"opacity":  this.Opacity,
			
			"animation":  { "effect_in": this.EffectIn,
							"effect_out": this.EffectOut},
			"animate_speed":  this.AnimationSpeed,
			"buttons":  { "closer": this.Closer,
						"closer_hover": this.CloserHover,
						"sticker": this.Sticker,
						"sticker_hover": this.StickerHover,
						"show_on_nonblock": this.showEvenOnNonblock,
						"labels": { "close":this.LabelCloseButton,
									"stick":this.LabelStickButton}
						},
			"nonblock":  { "nonblock": this.NonBlock,
							"nonblock_opacity": this.NonBlockOpacity},
			"history":  { "history": this.EnableHistory,
						"menu": this.Menu,
						"fixed": this.FixedMenu,
						"maxonscreen": this.MaxOnScreen,
						"labels": { "redisplay":this.LabelRedisplay,
									"all":this.LabelAll,
									"last":this.LabelLast}
						}	
		}
	}
	
	this.dvGetMessageParms = function(text){
		//text could be a simple text message or a json string. 
		//Example: "simple message"
		//Example attached to control: '{"title":"text message","att":"control selector" }' 
		//Example using pnotify: '{"title":"text message",... }' each option is a 
		//valid  key/value option for Pnotify plugin
		
		var _parms = null;
		var _aux = {}; 
		var _text = "";
		
		try{			
			if(text.substring(0,1) == "{") { 
				_text = text.replace("\r\n","<br>");
				_text = _text.replace("\n","<br>");
				_aux = eval('(' + _text +  ')');
				_parms = jQuery.extend( {}, this._options, _aux );		
			}
		} catch(e) {
			if(window.console) console.log(e.message);
		}
		
		return _parms;
	}
 
	function readCookie(key)
	{
		var result;
		return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
	}
	
	function deleteCookie(key){
		document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	///UserCodeRegionEnd: (do not remove this comment.):
}