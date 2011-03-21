package com.igalia.java.zk.components;

import java.io.IOException;

import org.zkoss.zk.au.out.AuInvoke;
import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.HtmlBasedComponent;
import org.zkoss.zk.ui.sys.ContentRenderer;

public class PopupMessage extends HtmlBasedComponent {

    private static String _ID = "popupmessage";
    private String _effectName;
    private String _title;
    private String _content;
    private boolean _autoHide = true;

    public PopupMessage(){
        setId(_ID);
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

    public String getEffectName(){
        return _effectName;
    }

    public void setEffectName(String effectName){
        _effectName = effectName;
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

    public void show(){
        response("popup", new AuInvoke(this, "_showMessage"));
    }

    public void renderProperties(ContentRenderer renderer) throws IOException{
        renderer.render("_effectName", _effectName);
        renderer.render("_title", _title);
        renderer.render("_content", _content);
        renderer.render("_autoHide", _autoHide);

        super.renderProperties(renderer);
    }
}