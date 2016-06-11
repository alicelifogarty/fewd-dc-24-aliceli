var total = 0;

jQuery(document).ready(function() {

	jQuery("#zero").on("click", function(){
		total = 0;
		jQuery('#result').html(total);
	});

	jQuery("#add5").on("click", function(){
		total += 5;
		jQuery('#result').html(total);
	});

	jQuery("#add10").on("click", function(){
		total += 10;
		jQuery('#result').html(total);
	});

	jQuery("#sub1").on("click", function(){
		total -= 1;
		jQuery('#result').html(total);
	});
});