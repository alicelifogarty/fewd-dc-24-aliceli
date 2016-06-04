function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

document.getElementById('stopButton').onclick = illuminateRed;

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

document.getElementById('slowButton').onclick = illuminateYellow;

function illuminateYellow() {
	clearLights();
	document.getElementById('slowLight').style.backgroundColor = "yellow";
}

document.getElementById('goButton').onclick = illuminateGreen;

function illuminateGreen() {
	clearLights();
	document.getElementById('goLight').style.backgroundColor = "green";
}