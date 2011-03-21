zk.$package("components.popupmessage");

components.popupmessage.PopupMessage = zk.$extends(zk.Widget,{
	$define : {
		effectName : null,
		title : [null, function(){this._update("title", this.getTitle());}],
		content : [null, function(){this._update("content", this.getContent());}],
		autoHide : null
	},
	bind_ : function(){
		this.$supers('bind_', arguments);
		this.domListen_(jq('.popupmessage .close'), "onClick", '_hideMessage');
	},
	unbind_ : function(){
		this.domUnlisten_(jq('.popupmessage .close'), "onClick", '_hideMessage');
		this.$supers('unbind_', arguments);
	},
	_showMessage : function() {
		jq( "div .popupmessage" ).show(this.getEffectName(),
										{}, //Options
										1000, //Effect duration
										this.isAutoHide() ? this.proxy(this._autoHideCallback) : null);
	},
	_hideMessage : function() {
		jq( "div .popupmessage:visible" ).fadeOut(1000);
	},
	_autoHideCallback : function(){
		setTimeout(this._hideMessage, 3000);
	},
	_update : function (cssClass, value ){
		jq(".popupmessage " + "." + cssClass).empty().append(value);
	}
})