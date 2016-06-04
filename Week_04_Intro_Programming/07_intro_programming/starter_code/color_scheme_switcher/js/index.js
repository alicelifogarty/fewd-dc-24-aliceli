// Click on Gray Button
	// Call changetoGray

document.getElementById("grayButton").onclick = changeToGray;

function changeToGray() {
	// Change background color
	document.body.style.backgroundColor = "gray";
	// Change text color
	document.body.style.color = "white";
	console.log ("I'm gray");
}

// Click on White Button
	// Call changetoWhite
document.getElementById("whiteButton").onclick = changeToWhite;

function changeToWhite() {
	// Change background color
	document.body.style.backgroundColor = "white";
	// Change text color
	document.body.style.color = "gray";
	console.log ("I'm white");
}
