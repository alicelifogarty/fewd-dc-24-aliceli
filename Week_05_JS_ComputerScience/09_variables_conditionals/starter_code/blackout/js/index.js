var lights = "on";

function switchLights() {
	if(lights == "on") {
		jQuery("body").addClass("dark");
		lights = "off";
	} else {
		jQuery("body").removeClass("dark");
		lights = "on";
	}
};

jQuery(document).ready(function(){
	jQuery("#light_switch").on("click",switchLights)
});





