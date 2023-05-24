var woodCountVar = 0;
var logCountVar = 0;
var logCuttingRate = 1;
var woodCollectingRate = 1;
var warningElement = document.getElementById('warningText');
var riverGate = 0;
var woodInFireplace = 0;
var fishInFireplace = 0;
var cookedFish = 0;
//elements
var logButton = document.getElementById("logButton");
logButton.style.display = "none";
var riverClick = document.getElementById("riverClick");
var forestClick = document.getElementById("forestClick");
var forestDisplay = document.getElementById("forestSection");
var riverDisplay = document.getElementById("riverTravel");
var houseDisplay = document.getElementById("houseMenu");
var sectionButtons = document.getElementById("sectionButtons");
var houseClick = document.getElementById("houseClick");
var homeClick = document.getElementById("homeClick");
var forestLocationText = document.getElementById("forestLocationText");
houseDisplay.style.display = "none";
var backyardDisplay = document.getElementById("backyard");
var bedroomButton = document.getElementById("bedroomClick");
backyardDisplay.style.display = "none";
var fireDisplay = document.getElementById("fireClick");
fireDisplay.style.display = "none";
var fireCountDisplayElement = document.getElementById("fireWoodButton");
var fishCountFireElement = document.getElementById("fishCookButton");
//inventory
var invLogElement = document.getElementById("invLogs");
var invWoodElement = document.getElementById("invWood");
var invFishElement = document.getElementById('invFish');
var invCookedFishElement = document.getElementById("invCookedFish");


//fish spam
var fishButton1 = document.getElementById("fishButton1");
var fishButton2 = document.getElementById("fishButton2");
var fishButton3 = document.getElementById("fishButton3");
//we finna fish, and we finna love it
// Fish count
var fishCount = 0;
var fishCounter = document.getElementById("fishCounter");
var houseGate = 0;

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
    invFishElement.textContent = ("Fish: " + fishCount);
  }

  // Enable fish buttons again
  fishButton1.disabled = false;
  fishButton2.disabled = false;
  fishButton3.disabled = false;

  if (fishCount >= 5) {
  	houseGate = 1;
  	homeClick.style.display = "block";
  	houseClick.style.display = "block";
  }

}

if (riverGate == 0) {
	riverClick.style.display = "none";
} else {
	riverClick.style.display = "block";
}


if (houseGate == 0) {
	houseClick.style.display = "none";
	homeClick.style.display = "none";
} else {
	houseClick.style.display = "block";
	homeClick.style.display = "block";
}

//functions

function treeCut() {
	var logElement = document.getElementById("logCount");
	logCountVar = logCountVar + logCuttingRate;
	logElement.textContent = "number of logs: " + logCountVar;
	logButton.style.display = "initial";
	logButton.textContent = ("cut logs");
	invLogElement.textContent = ("Logs: " + logCountVar);
	
}

function logCut() {
		if (woodCountVar == 4) {
		riverGate = 1;
		riverClick.style.display = "block";
		forestLocationText.style.display = "block";
	}
	var woodElement = document.getElementById("woodCount");
	var logElement = document.getElementById("logCount");
	if (logCountVar >= woodCollectingRate) {
		woodCountVar = woodCountVar + woodCollectingRate;
		logCountVar = logCountVar - woodCollectingRate;
		woodElement.textContent = (`number of wood: ${woodCountVar}`);
		logElement.textContent = (`number of logs: ${logCountVar}`);
		invWoodElement.textContent = (`Wood: ${woodCountVar}`);
		invLogElement.textContent = ("Logs: " + logCountVar);

	} else {
		warningElement.textContent = "you don't have enough logs";
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


//all below this will be like house stuff-
function forestToHouse(){
	forestDisplay.style.display = "none";
	houseDisplay.style.display = "block";
	if (houseGate == 1) {
		bedroomButton.style.display = "none";
	}
}
function riverToHouse(){
	riverDisplay.style.display = "none";
	houseDisplay.style.display = "block";
	if (houseGate == 1) {
		bedroomButton.style.display = "none";
	}
}
function houseToRiver(){
	houseDisplay.style.display = "none";
	riverDisplay.style.display = "block";
}
function houseToForest(){
	houseDisplay.style.display = "none";
	forestDisplay.style.display = "block";
}

function houseToBackyard(){
	houseDisplay.style.display = "none";
	backyardDisplay.style.display = "block";
}

function backyardToHouse(){
	backyardDisplay.style.display = "none";
	houseDisplay.style.display = "block";
}
function fireMenu() {
	if (fireDisplay.style.display == "none") {
		fireDisplay.style.display = "block";
	fireCountDisplayElement.textContent = woodInFireplace;
	fishCountFireElement.textContent = fishInFireplace;
	} else {
		fireDisplay.style.display = "none";
	}

}
function fireIncrease(){
	if (woodInFireplace < woodCountVar) {
	woodInFireplace++;
	fireCountDisplayElement.textContent = woodInFireplace;
}

}
function fireDecrease(){
	if (woodInFireplace > 0) {
	woodInFireplace = woodInFireplace - 1;
	fireCountDisplayElement.textContent = woodInFireplace;
	}
}
function fishIncrease(){
	if (fishInFireplace < fishCount){
		fishInFireplace++;
		fishCountFireElement.textContent = (fishInFireplace);
	}
}

function fishDecrease(){
	if (fishInFireplace > 0){
		fishInFireplace = fishInFireplace - 1;
		fishCountFireElement.textContent = (fishInFireplace);
	}
}
function cook(){
	if (fishInFireplace < woodInFireplace) {
		cookedFish = cookedFish + fishInFireplace;
		fishCount = fishCount - fishInFireplace
		woodInFireplace = woodInFireplace - fishInFireplace;
		woodCountVar = woodCountVar - fishInFireplace;
		fishInFireplace = 0;
		woodInFireplace = 0;
		fishCountFireElement.textContent = (fishInFireplace);
		fireCountDisplayElement.textContent = woodInFireplace;
	} else if (fishInFireplace > woodInFireplace) {
		cookedFish = cookedFish + woodInFireplace;
		fishInFireplace = fishInFireplace - woodInFireplace;
		fishCount = fishCount - woodInFireplace;
		woodInFireplace = 0;
		fishInFireplace = 0;
		fishCountFireElement.textContent = (fishInFireplace);
		fireCountDisplayElement.textContent = woodInFireplace;
	} else if (fishInFireplace == woodInFireplace) {
		cookedFish = fishInFireplace + cookedFish;
		fishCount = fishCount - fishInFireplace;
		woodCountVar = woodCountVar - woodInFireplace;
		woodInFireplace = 0;
		fishInFireplace = 0;
		fishCountFireElement.textContent = (fishInFireplace);
		fireCountDisplayElement.textContent = woodInFireplace;

	}
	invCookedFishElement.textContent = ("Cooked fish: " + cookedFish);
	invFishElement.textContent = ("Fish: " + fishCount);
	invWoodElement.textContent = ("Wood: " + woodCountVar);
}
