jQuery("#grayButton").on("click", function(){
	jQuery("body").css("background-color","gray");
	jQuery("body").css("color","white");
})

jQuery("#whiteButton").on("click", function(){
	jQuery("body").css("background-color","white");
	jQuery("body").css("color","gray");
})