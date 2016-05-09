jQuery(document).ready(function() {
	jQuery(".comment").each(function(){
		jQuery(this).find(".comment-info").append(' | <a class="show-hide-comment" href="javascript:void;" style="color: white;" data-commentid="'+jQuery(this).attr("id")+'">show</a>');		
	});
	jQuery(".show-hide-comment[data-commentid]").live("click", function(e){
		e.preventDefault();
		if(jQuery("#"+jQuery(this).attr("data-commentid")+" .comment-body").is(":visible")){
			jQuery("#"+jQuery(this).attr("data-commentid")+" .comment-body").hide();
			jQuery("#"+jQuery(this).attr("data-commentid")+" ~ .indented").hide();
			jQuery(this).html("hide");
		}else{
			jQuery("#"+jQuery(this).attr("data-commentid")+" .comment-body").show();
			jQuery("#"+jQuery(this).attr("data-commentid")+" ~ .indented").show();
			jQuery(this).html("show");
		}
	});
});