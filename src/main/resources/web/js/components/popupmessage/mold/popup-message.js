function(out){
		out.push('<div class="popupmessage roundedcorner" ', this.domAttrs_(), '>');
		
		out.push('<div class="title roundedcorner">', this.getTitle(), '</div>');
		out.push('<div class="content roundedcorner">', this.getContent(), '</div>');
		
		out.push('</div>');
}