zk.$package("components.popupmessage");

components.popupmessage.PopupMessage = zk.$extends(zk.Widget,{
    $define : {
        effectName : null,
        effectOptions: null,
        title : [null, function(){this._update("title", this.getTitle());}],
        content : [null, function(){this._update("content", this.getContent());}],
        customCss : null,
        autoHide : null
    },
    bind_ : function(){
        this.$supers('bind_', arguments);
        this.domListen_(jq('.popupmessage .close'), "onClick", '_hideMessage');

        /*We can't apply css as an after function (on $define) because
         * on that moment the component is not bound to the DOM*/
        this._applyCustomCss();
    },
    unbind_ : function(){
        this.domUnlisten_(jq('.popupmessage .close'), "onClick", '_hideMessage');
        this.$supers('unbind_', arguments);
    },
    _showMessage : function() {
        jq( "div .popupmessage" ).show(this.getEffectName(),
                                        this.getEffectOptions(), //Effect Options
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
    },
    _applyCustomCss : function(){
        jq(this.$n()).css(this.getCustomCss());
    }
})