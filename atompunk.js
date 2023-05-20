var woodCountVar = 0;
var logCountVar = 0;
var logCuttingRate = 1;
var woodCollectingRate = 1;
var warningElement = document.getElementById('warningText');
var riverGate = 0;

//elements
var logButton = document.getElementById("logButton");
logButton.style.display = "none";
var riverClick = document.getElementById("riverClick");

if (riverGate == 0) {
	riverClick.style.display = "none";
} else {
	riverClick.style.display = "block";
}
//functions

function treeCut() {
	var logElement = document.getElementById("logCount");
	logCountVar = logCountVar + logCuttingRate;
	logElement.textContent = "number of logs: " + logCountVar;
	logButton.style.display = "initial";
	logButton.textContent = ("cut logs");
	
}

function logCut() {
	var woodElement = document.getElementById("woodCount");
	var logElement = document.getElementById("logCount");
	if (logCountVar >= woodCollectingRate) {
		woodCountVar = woodCountVar + woodCollectingRate;
		logCountVar = logCountVar - woodCollectingRate;
		woodElement.textContent = (`number of wood: ${woodCountVar}`);
		logElement.textContent = (`number of logs: ${logCountVar}`);
	} else {
		warningElement.textContent = "you don't have enough logs";
	}
	if (woodCountVar >= 5) {
		riverGate = 1;
		riverClick.style.display = "block";
	}

	
}


  function riverButton() {
    var riverDisplay = document.getElementById("riverTravel");
    riverDisplay.style.display = "block";
    var forestDisplay = document.getElementById("forestSection");
    forestDisplay.style.display = "none";
  }
