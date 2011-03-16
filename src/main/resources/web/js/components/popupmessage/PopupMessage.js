zk.$package("components.popupmessage");

components.popupmessage.PopupMessage = zk.$extends(zk.Widget,{
	$define : {
		effectName : null
	},
	bind_ : function(){
		this.$supers('bind_', arguments);
		this._showMessage();
	},
	_showMessage : function() {
		jq( "div .popupmessage" ).show(this.getEffectName(), {}, 1000);
	},
	callback : function() {
		setTimeout(function() {
			jq( "div .popupmessage:visible" ).removeAttr( "style" ).fadeOut();
		}, 1000 );
	}
})