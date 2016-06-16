var images = ["images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg", "images/animal4.jpg", "images/animal5.jpg", "images/animal6.jpg", "images/animal7.jpg"];
var i = 0;
var imageSetLength = images.length-1;

function changeImage(index){
	// Sets a particular image
	jQuery("#image-to-vote-on").attr("src",images[index]);
}

function previousImage(){
	if(i == 0) {
		i = imageSetLength;
	} else {
		i--;
	}

	changeImage(i);
}

function nextImage(){
	// Next image in set
	if(i < imageSetLength){
		i++;
	} else{
		i=0;
	}

	changeImage(i);
}

// Bind functions to buttons

jQuery("#nextBtn").on("click",nextImage);
jQuery("#prevBtn").on("click",previousImage);