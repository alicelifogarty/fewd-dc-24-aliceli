//Implement the red light using jQuery. Don't forget to add the script tags.

jQuery(".button").on("click", function() {
	jQuery(".bulb").css("background-color","black");
})

jQuery("#stopButton").on("click", function(){
		jQuery("#stopLight").css("background-color","red");
})

jQuery("#slowButton").on("click", function(){
		jQuery("#slowLight").css("background-color","yellow");
})

jQuery("#goButton").on("click", function(){
		jQuery("#goLight").css("background-color","green");
})