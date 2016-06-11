// Set up code to execute after document has been fully loaded
jQuery(document).ready(function(){

// Prevent clicking update btn from executing a link
	function enter (event) {
		event.preventDefault();

	// Create variable city for input using .val
		var city = jQuery("#city-type").val();

	// Make #city-type free for new input
		jQuery("#city-type").val("");

	// Transform variable to lowercase
		// var cityLowerCase = cityVal.toLowerCase();
		city = city.toLowerCase().trim();

	// If city input is "san francisco" or "sf" or "bay area", make body background sf.jpg with class .sf
		if (city == "san francsico" || city == "sf" || city =="bay area") {
			jQuery("body").attr("class", "sf"); 

	// Else if city is "new york" or "new york city" or "nyc", make body background nyc.jpg with class .nyc
		} else if (city == "new york" || city == "ny" || city =="nyc") {
			jQuery("body").attr("class", "nyc"); 


	// Else if city is "la" or "lax" or "los angeles", make the body background la.jpg with class .la
		} else if (city == "los angeles" || city == "la" || city =="lax") {
			jQuery("body").attr("class", "la"); 

	// Else if city is "austin" or "atx", make the body background austin.jpg with class .austin
		} else if (city == "austin" || city == "atx") {
			jQuery("body").attr("class", "austin"); 

	// Else if #city-type is "sydney" or "syd", make the body background sydney.jpg with .sydney
		} else if (city == "sydney" || city == "syd") {
			jQuery("body").attr("class", "sydney"); 

	// Else have an alert, asking for a different city input
		} else {
			alert("Type a different city.")
		}
	};

// Listen to user input
	jQuery("#submit-btn").on("click",enter);

});