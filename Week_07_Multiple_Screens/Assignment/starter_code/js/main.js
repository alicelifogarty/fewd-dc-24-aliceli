jQuery(document).ready(function(){

	jQuery("#toggler").on("click", function(){
		if (jQuery(this).hasClass("on")) {
			jQuery(".mobileNav").slideUp("slow");
			jQuery(this).removeClass("on");
		} else {
			jQuery(".mobileNav").slideDown("slow");
			jQuery(this).addClass("on");
		}


	});


});