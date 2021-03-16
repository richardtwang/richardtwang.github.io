//Page Setup:
window.onload = function(){
	document.getElementById("home").hidden = true;

	//Load all of the Event Listeners:
	document.getElementById("clsImage").addEventListener("click", toHome);
	document.getElementById("backButton").addEventListener("click", toPrelude);
}


function toHome() {
	document.getElementById("home").hidden = false;
	document.getElementById("prelude").hidden = true;
}

function toPrelude() {
	document.getElementById("home").hidden = true;
	document.getElementById("prelude").hidden = false;
}

