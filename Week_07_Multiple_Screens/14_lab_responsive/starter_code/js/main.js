jQuery(document).ready(function(){

	jQuery("#toggler").on("click",function(){

			if (jQuery(this).hasClass("red")) {
				jQuery(".mobileNav").slideUp("slow");
				jQuery(this).removeClass("red");
			} else {
				jQuery(".mobileNav").slideDown("slow");
				jQuery(this).addClass("red");
			}
						
	});


	// if (jQuery("#toggler").css("color") == "rgb(255, 255, 0)") {
	// 	alert("hi");
	// }

});