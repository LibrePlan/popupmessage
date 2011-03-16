package com.igalia.java.zk.components;

import java.io.IOException;

import org.zkoss.zk.ui.HtmlBasedComponent;
import org.zkoss.zk.ui.sys.ContentRenderer;

public class PopupMessage extends HtmlBasedComponent {
    private String _effectName;

    public String getEffectName(){
        return _effectName;
    }

    public void setEffectName(String effectName){
        _effectName = effectName;
    }

    public void renderProperties(ContentRenderer renderer) throws IOException{
        renderer.render("_effectName", _effectName);

        super.renderProperties(renderer);
    }
}