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
var forestClick = document.getElementById("forestClick");
var forestDisplay = document.getElementById("forestSection");
var riverDisplay = document.getElementById("riverTravel");
var sectionButtons = document.getElementById("sectionButtons");

//fish spam
var fishButton1 = document.getElementById("fishButton1")
var fishButton2 = document.getElementById("fishButton2")
var fishButton3 = document.getElementById("fishButton3")
//we finna fish, and we finna love it
// Fish count
var fishCount = 0;
var fishCounter = document.getElementById("fishCounter");

// Function to catch the fish
function catchFish(button) {
  // Disable fish buttons after a fish is caught
  fishButton1.disabled = true;
  fishButton2.disabled = true;
  fishButton3.disabled = true;


  // Check if the clicked button contains the fish
  if (button.id === "fishButton" + (Math.floor(Math.random() * 3) + 1)) {
    fishCount++;
    fishCounter.textContent = "Fish Count: " + fishCount;
  }

  // Enable fish buttons again
  fishButton1.disabled = false;
  fishButton2.disabled = false;
  fishButton3.disabled = false;

}

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
    riverDisplay.style.display = "block";
    forestDisplay.style.display = "none";
}
 

function forestButton() {
    riverDisplay.style.display = "none";
    forestDisplay.style.display = "block";
}