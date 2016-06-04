function purpleFunction() {
	jQuery("p").css({
		"color":"purple",
		"background-color": "white"
	});
};

function blueFunction() {
	jQuery("p").css("color","black");
	jQuery("p.hipsterSpeak").css({
		"background-color":"blue",
		"color" : "white"
	});
};

function redFunction() {
	jQuery("p").css("color","black");
	jQuery("li").toggleClass("redForm");
};

function border() {
	jQuery(".boxes").css({
		"border-bottom": "solid 6px black"
	});
};

jQuery(document).ready(function(){


	jQuery("#purpleBox").on("click", purpleFunction);

	jQuery("#blueBox").on("click",blueFunction);

	jQuery("#redBox").on("click", redFunction);

	jQuery(".boxes").on("click", border);
    
    // When purple box is clicked, set all paragraphs to be purple


    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black


    // When the red box is clicked set the list items toggle red background and white text on and off


    // When any of the boxes are clicked, add a 6px solid black bottom border

    


});
