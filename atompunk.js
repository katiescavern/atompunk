var woodCountVar = 0;
var logCountVar = 0;
var logCuttingRate = 1;
var woodCollectingRate = 1;
var riverGate = 0;
var woodInFireplace = 0;
var fishInFireplace = 0;
var cookedFish = 0;
var bedGate = 0;
var randomFish = 3;
var stoneCount = 0;
var woodAxeCount = 0;
var axeDur = 0;
var spearCount;
//elements
var logButton = document.getElementById("logButton");
var riverClick = document.getElementById("riverClick");
var forestClick = document.getElementById("forestClick");
var forestDisplay = document.getElementById("forestSection");
var riverDisplay = document.getElementById("riverTravel");
var houseDisplay = document.getElementById("houseMenu");
var sectionButtons = document.getElementById("sectionButtons");
var houseClick = document.getElementById("houseClick");
var homeClick = document.getElementById("homeClick");
var forestLocationText = document.getElementById("forestLocationText");
var backyardDisplay = document.getElementById("backyard");
var bedroomButton = document.getElementById("bedroomClick");
var fireDisplay = document.getElementById("fireClick");
var fireCountDisplayElement = document.getElementById("fireWoodButton");
var fishCountFireElement = document.getElementById("fishCookButton");
var warningElement = document.getElementById('warningText');
var bedroomDisplay = document.getElementById("Bedroom");
var craftingClick = document.getElementById("craftingClick");
var craftingDisplay = document.getElementById("craftingRoom");
var openCraftDisplay = document.getElementById("craftClick");
var toolElement = document.getElementById("craftTools");
var fishButtonDisplay = document.getElementById("FishingButtons");
var itemInfoDisplay = document.getElementsByClassName("itemInfo");
var stoneAxeInfoDisplay = document.getElementById("stoneAxeInfoDiv");
var woodenSpearInfoDisplay = document.getElementById("craftWoodenSpear");
var stoneCollectDisplay = document.getElementById("stoneCollection");
//displays
fireDisplay.style.display = "none";
backyardDisplay.style.display = "none";
houseDisplay.style.display = "none";
logButton.style.display = "none";
bedroomDisplay.style.display = "none";
craftingClick.style.display = "none";
craftingDisplay.style.display = "none";
craftClick.style.display = "none";
toolElement.style.display = "none";
fishButtonDisplay.style.display = "none";
stoneCollectDisplay.style.display = "none";


//inventory
var invLogElement = document.getElementById("invLogs");
var invWoodElement = document.getElementById("invWood");
var invFishElement = document.getElementById('invFish');
var invCookedFishElement = document.getElementById("invCookedFish");
var invStoneElement = document.getElementById("invStone");


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
function catchFish(x) {
	if (x == 0) {
		randomFish = Math.floor(Math.random() * 3);
		fishButtonDisplay.style.display = "block";
		if (randomFish == 0) {
			fishButton1.textContent = "fish!";
			fishButton2.textContent = "water";
			fishButton3.textContent = "water";
		} else if (randomFish == 1){
			fishButton1.textContent = "water";
			fishButton2.textContent = "fish!";
			fishButton3.textContent = "water";
		} else if (randomFish == 2){
			fishButton1.textContent = "water";
			fishButton2.textContent = "water";
			fishButton3.textContent = "fish!";
		}
	}
		if (x == 1){
			if (randomFish == 0){
				fishCount++;
				fishButton1.textContent = "water";
				randomFish = 4;
				invFishElement.textContent = ("fish: " + fishCount);
				catchFish(0);
			}
		}
		if(x == 2){
			if (randomFish == 1){
				fishCount++;
				fishButton2.textContent = "water";
				randomFish = 4;
				invFishElement.textContent = ("fish: " + fishCount);
				catchFish(0);
			}
		}
		if (x == 3){
			if(randomFish == 2){
				fishCount++;
				fishButton3.textContent = "water";
				randomFish = 4;
				invFishElement.textContent = ("fish: " + fishCount);
				catchFish(0);
			}
		}
		
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

//foresst

function treeCut() {
	var logElement = document.getElementById("logCount");
	logCountVar = logCountVar + logCuttingRate;
	logElement.textContent = "number of logs: " + logCountVar;
	logButton.style.display = "initial";
	logButton.textContent = ("cut logs");
	invLogElement.textContent = ("Logs: " + logCountVar);
	if (axeDur > 0){
		axeDur= axeDur-1;
	} else if (axeDur == 0){
		woodCollectingRate = 1;
	}
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
		if (axeDur > 0){
			axeDur= axeDur-1;
	} else if (axeDur == 0){
			woodCollectingRate = 1;
	}

	} else {
		warningElement.textContent = "you don't have enough logs";
	}	
}

//travel
  function riverButton() {
    riverDisplay.style.display = "block";
    forestDisplay.style.display = "none";
}
function forestButton() {
    riverDisplay.style.display = "none";
    forestDisplay.style.display = "block";
}
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

function houseToBedroom(){
	houseDisplay.style.display = "none";
	bedroomDisplay.style.display = "block";
}

function bedroomToHouse(){
	bedroomDisplay.style.display = "none";
	houseDisplay.style.display = "block";
}

function houseToCraftingRoom(){
	houseDisplay.style.display = "none";
	craftingDisplay.style.display = "block";
	if (houseGate == 2){
		houseGate = 3;
		stoneCollectDisplay.style.display = "block";
	}
}
function craftingRoomToHouse(){
	craftingDisplay.style.display = "none";
	houseDisplay.style.display = "block";
}
//backyard
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
		fishCount = fishCount - fishInFireplace;
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
	if (cookedFish >= 5) {
		houseGate = 2;
		bedroomButton.style.display = ("block");
	}
}

function sleep() {
 //put time stuff here katie
	bedGate = 1;
	craftingClick.style.display = "block";
}
function openCraftingMenu(){
	if (craftClick.style.display == "none"){
		craftClick.style.display = "block";
	} else {
		craftClick.style.display = "none";
	}
}
function toolCraft(){
	if (toolElement.style.display == "none"){
		toolElement.style.display = "block";
	for (var i = 0; i < itemInfoDisplay.length; i++) {
  itemInfoDisplay[i].style.display = "none";
	}
	} else {
		toolElement.style.display = "none";
	}
}
function stoneAxeInfo(){
	for (var i = 0; i < itemInfoDisplay.length; i++) {
  itemInfoDisplay[i].style.display = "none";
	}
	if (stoneAxeInfoDisplay.style.display == "none"){
		stoneAxeInfoDisplay.style.display = "block";}
	else if (stoneAxeInfoDisplay.style.display == "block"){
			stoneAxeInfoDisplay.style.display = "none";
		}
		}
	
function woodenSpearInfo(){
	for (var i = 0; i < itemInfoDisplay.length; i++) {
  itemInfoDisplay[i].style.display = "none";
	}
	if (woodenSpearInfoDisplay.style.display == "none"){
		woodenSpearInfoDisplay.style.display = "block";
	} else if (woodenSpearInfoDisplay.style.display == "block"){
		woodenSpearInfoDisplay.style.display = "none";
	}
}
function collectStone(){
	stoneCount++;
	invStoneElement.textContent = ("stones: " + stoneCount);
}

function craftStoneAxe(){
	if (woodCountVar > 0 && stoneCount > 4){
		woodAxeCount++;
		woodCountVar = woodCountVar-1;
		stoneCount = stoneCount-5;
		axeDur = axeDur + 25;
		invWoodElement.textContent = "wood: " + woodCountVar;
		invStoneElement.textContent = "stone: " +stoneCount;
		if (woodCollectingRate < 2){
			woodCollectingRate = 2;
		}
		if (logCuttingRate < 2){
			logCuttingRate = 2;
		}
	} else if (woodCountVar == 0 && stoneCount < 5){
		warningElement.textContent = "not enough wood or stone";
	} else if (woodCountVar == 0){
		warningElement.textContent = "not enough wood";
	} else if (stoneCount < 5){
		warningElement.textContent = "not enough stone";
	}
}
function craftWoodenSpear(){
	if (woodCountVar > 4 && stoneCount > 0){
		woodCountVar = woodCountVar-5;
		stoneCount=stoneCount-1;
		stoneCount = stoneCount+1;
	}
}