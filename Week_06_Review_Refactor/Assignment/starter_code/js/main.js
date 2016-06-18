jQuery(document).ready(function(){

	// Create an array with the cities
	var cities = ["NYC", "SF", "LA", "ATX","SYD"];

	// Use the array to add values to the "<select>" using a "for" loop without updating the HTML

	for (q=0;q<cities.length;q++) {
		jQuery("#city-type").append('<option value="'+cities[q]+'">'+cities[q]+'</option>');
	};

// When the user changes the input of the drop-down, update the background image based on what they selected
	
	jQuery("#city-type").on("change",function(){
			var currentCity = jQuery(this).val();
			// jQuery("city-type").val("");

			if (currentCity == "SF") {
				jQuery("body").attr("class","sf");
			} else if (currentCity == "NYC") {
				jQuery("body").attr("class", "nyc");
			} else if (currentCity == "LA") {
				jQuery("body").attr("class", "la");
			} else if (currentCity == "ATX") {
				jQuery("body").attr("class", "austin");
			} else if (currentCity == "SYD") {
				jQuery("body").attr("class", "sydney");
			}
		});


});