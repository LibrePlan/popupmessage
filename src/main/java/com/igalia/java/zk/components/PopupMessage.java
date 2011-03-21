package com.igalia.java.zk.components;

import java.io.IOException;

import org.zkoss.json.JSONObject;
import org.zkoss.zk.au.out.AuInvoke;
import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.HtmlBasedComponent;
import org.zkoss.zk.ui.sys.ContentRenderer;

public class PopupMessage extends HtmlBasedComponent {

    private static String _ID = "popupmessage";
    private String _effectName;
    private JSONObject _effectOptions;
    private String _title;
    private String _content;
    private boolean _autoHide;
    private JSONObject _customCss;

    public PopupMessage(){
        setId(_ID);
        placeLeft();
        _effectName = "slide";
        _autoHide = true;
    }

    public String getTitle() {
        return _title;
    }

    public void setTitle(String title) {
        _title = title;
        smartUpdate("title", title);
    }

    public String getContent() {
        return _content;
    }

    public void setContent(String content) {
        _content = content;
        smartUpdate("content", content);
    }

    public String getEffect(){
        return _effectName;
    }

    public void setEffect(String effectName){
        _effectName = effectName;
    }

    public void setEffect(String effectName, JSONObject effectOptions){
        _effectName = effectName;
        _effectOptions = effectOptions;
    }

    public boolean getAutoHide(){
        return _autoHide;
    }

    public void setAutoHide(boolean autoHide){
        _autoHide = autoHide;
    }

    public void insertIn(Component component){
        setParent(component);
    }

    public void placeRight(){
        getCustomCss().remove("left");
        getCustomCss().put("right", "0px");
    }

    public void placeLeft(){
        getCustomCss().remove("right");
        getCustomCss().put("left", "0px");
    }

    public void show(){
        response("popup", new AuInvoke(this, "_showMessage"));
    }

    private JSONObject getCustomCss(){
        if ( _customCss == null)
            _customCss = new JSONObject();

        return _customCss;
    }

    public void renderProperties(ContentRenderer renderer) throws IOException{
        renderer.render("_effectName", _effectName);
        renderer.render("_effectOptions", _effectOptions);
        renderer.render("_title", _title);
        renderer.render("_content", _content);
        renderer.render("_autoHide", _autoHide);
        renderer.render("_customCss", _customCss);

        super.renderProperties(renderer);
    }
}