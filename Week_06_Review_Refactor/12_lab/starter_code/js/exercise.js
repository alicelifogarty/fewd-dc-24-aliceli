function selectPet(petType){

    // Get the specific pet data set
    var thisPetType = petData[petType];

    // Set the title
    jQuery(".petDisplayName").text(thisPetType["displayName"]);

    // Empty the specification data
    jQuery(".petsDataSpecs").empty();

    // Add the space required, size, weight
    jQuery(".petsDataSpecs").append('<dt>Size</dt><dd>'+thisPetType["size"]+'</dd><dt>Weight</dt><dd>'+thisPetType["weight"]+'</dd><dt>Space Required</dt><dd>'+thisPetType["spaceRequired"]+'</dd>');

    // Add logic to add the trainability and lap size images
    if (thisPetType.trainability == true) {
        jQuery(".petsDataSpecs").append('<dt>Trainability</dt><dd><img src="img/200px-Gnome-emblem-default.svg.png" alt="Yes" class="checkmark"></dd>');
    } else {
         jQuery(".petsDataSpecs").append('<dt>Trainability</dt><dd><img src="img/200px-Gnome-emblem-unreadable.svg.png" alt="No" class="checkmark"></dd>');
    }
    // Add the foods (may require loop)
    var food = "<ul>";

    for(q=0;q<thisPetType.foods.length;q++) {
        food = food + "<li>"+thisPetType.foods[q]+"</li>";
    }

     food = food + "</ul>";

    jQuery(".petsDataSpecs").append('<dt>Foods</dt><dd>'+food+
        '</dd>');


    // Update the images

        // Set the main image
        var theImages = thisPetType["images"]; 

        jQuery(".photoLarge").attr("src",thisPetType.images[0]["img"]);

        // Empty the thumbnails
        jQuery(".thumbHaus").empty();

        // Add the thumbnails

        var imageLength = thisPetType.images.length;
        var myThumbnails = '';

        for(i=0;i<imageLength;i++) {
            myThumbnails += '<a href="'+thisPetType.images[i]['img']+ '"><img src="'+thisPetType.images[i]['thumb']+'" alt="'+thisPetType.images[i]['alt']+'" class="photoThumb"></a>';
        }
        jQuery(".thumbHaus").append(myThumbnails);


        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
        jQuery(".photoThumb").on("click", thumbClick);

        function thumbClick (event) {
             event.preventDefault();
             var imageSrc = jQuery(this).parent("a").attr('href');
             var imageAlt = jQuery(this).attr('alt');
             jQuery('.photoLarge').empty();
             jQuery('.photoLarge').attr('src', imageSrc);
             jQuery('.photoLarge').attr('alt', imageAlt);
        }


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

    // Initial run

    jQuery("#petType").on("change",function(){
        var currentPet = jQuery(this).val();
        selectPet(currentPet);
    });

    //Update whenever a new value is picked
});