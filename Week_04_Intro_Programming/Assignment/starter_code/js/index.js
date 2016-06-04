function readmoreFunction () {
	jQuery("#show-this-on-click").slideDown();
	jQuery(".readmore").hide();
	jQuery(".readless").show();
};

function readlessFunction () {
	jQuery("#show-this-on-click").slideUp();
	jQuery(".readless").hide();
	jQuery(".readmore").slideToggle("slow");
};

function learnmoreFunction () {
	jQuery("#learnmoretext").slideDown();
	jQuery(".learnmore").hide();
};

jQuery(document).ready(function(){

	jQuery(".readmore").on("click", readmoreFunction);
	jQuery(".readmore").on("click", function(event) {
		event.preventDefault();
	});

	jQuery(".readless").on("click", readlessFunction);
	jQuery(".readless").on("click", function(event) {
		event.preventDefault();
	});

	jQuery(".learnmore").on("click", learnmoreFunction);
	jQuery(".learnmore").on("click", function(event) {
		event.preventDefault();
	});

});