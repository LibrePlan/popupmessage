zk.$package("components.popupmessage");

components.popupmessage.PopupMessage = zk.$extends(zk.Widget,{
	$define : {
		effectName : null,
		title : null,
		content : null,
		autoHide : null
	},
	bind_ : function(){
		this.$supers('bind_', arguments);
		this.domListen_(jq('.popupmessage .close'), "onClick", '_hideMessage');
		this._showMessage();
	},
	unbind_ : function(){
		this.domUnlisten_(jq('.popupmessage .close'), "onClick", '_hideMessage');
		this.$supers('unbind_', arguments);
	},
	_showMessage : function() {
		jq( "div .popupmessage" ).show(this.getEffectName(),
										{}, //Options
										1000, //Effect duration
										this.isAutoHide() ? this._hideMessage : null);
	},
	_hideMessage : function() {
		setTimeout(function() {
			jq( "div .popupmessage:visible" ).fadeOut(1000);
		}, 3000 );
	}
})