// ==UserScript==
// @name         Blognone hide show comment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Rachasak Ragkamnerd
// @match        https://www.blognone.com/node/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    jQuery(document).ready(function() {
    	if(jQuery(".comment").length){
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
		}
	});
})();