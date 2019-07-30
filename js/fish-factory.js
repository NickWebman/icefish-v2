
function FishFactory() {}

FishFactory.prototype.createFish = function createAFish() {

	var fishTypeMath = Math.floor((Math.random() * 100) + 1);
	var eventTriggerMath = Math.floor((Math.random() * 100) + 1);	
	var fishSizeMath = 0;
	var fishTypeMoneyModifier = 1;
	var fishMoney = 0;

	function getEventTrigger (){
		if (eventTriggerMath >= 95){
			return true;
		}
	}

	function getFishType() {
		if (fishTypeMath >= 100) {
			return "mega shark";
		} else if (fishTypeMath >= 92 && fishTypeMath < 96) {
			return "dead prostitute";
		} else if (fishTypeMath >= 90 && fishTypeMath < 95) {
			return "pike";
		} else if (fishTypeMath >= 80 && fishTypeMath < 90) {			
			return "walleye";
		} else if (fishTypeMath >= 70 && fishTypeMath < 80) {			
			return "large mouth bass";
		} else if (fishTypeMath >= 60 && fishTypeMath < 70) {		
			return "small mouth bass";
		} else if (fishTypeMath >= 50 && fishTypeMath < 60) {			
			return "catfish";
		} else if (fishTypeMath >= 40 && fishTypeMath < 50) {		
			return "carp";
		} else if (fishTypeMath >= 30 && fishTypeMath < 40) {		
			return "crappie";
		} else if (fishTypeMath >= 20 && fishTypeMath < 30) {	
			return "perch";
		} else if (fishTypeMath >= 10 && fishTypeMath < 20) {		
			return "sun fish";
		} else if (fishTypeMath >= 0 && fishTypeMath < 10) {				
			return "bluegill";
		}
	}
	
	switch(getFishType()) {
		case "mega shark":
			fishSizeMath = (Math.random() * (120 - 72) + 72);
			fishTypeMoneyModifier = 0.9;
			break;
		case "dead prostitute":
			fishSizeMath = (Math.random() * (80 - 60) + 60);
			fishTypeMoneyModifier = 0.9;			
			break;
		case "pike":
			fishSizeMath = (Math.random() * (50 - 30) + 30);
			fishTypeMoneyModifier = 0.8;			
			break;			
		case "walleye":
			fishSizeMath = (Math.random() * (40 - 20) + 20);
			fishTypeMoneyModifier = 0.7;			
			break;
		case "large mouth bass":
			fishSizeMath = (Math.random() * (30 - 20) + 20);
			fishTypeMoneyModifier = 0.6;			
			break;
		case "small mouth bass":
			fishSizeMath = (Math.random() * (30 - 20) + 20);
			fishTypeMoneyModifier = 0.6;			
			break;
		case "catfish":
			fishSizeMath = (Math.random() * (50 - 30) + 30);
			fishTypeMoneyModifier = 0.6;			
			break;
		case "carp":
			fishSizeMath = (Math.random() * (50 - 30) + 30);
			fishTypeMoneyModifier = 0.6;			
			break;
		case "crappie":
			fishSizeMath = (Math.random() * (20 - 10) + 10);
			fishTypeMoneyModifier = 0.4;				
			break;
		case "perch":
			fishSizeMath = (Math.random() * (20 - 10) + 10);
			fishTypeMoneyModifier = 0.4;				
			break;
		case "sun fish":
			fishSizeMath = (Math.random() * (12 - 6) + 6);
			fishTypeMoneyModifier = 0.4;			
			break;
		case "bluegill":
			fishSizeMath = (Math.random() * (12 - 6) + 6);
			fishTypeMoneyModifier = 0.4;				
			break;				
	}

	// round the fish size up
	fishSizeMath = Math.ceil(fishSizeMath);
		
	function getFishMoney(){
		this.money = Math.round(fishSizeMath * fishTypeMoneyModifier);
		return { 
			money: money
		} 
	}
	
	function getFishGender() {
		var genderMath = Math.round(Math.random());
		if (genderMath == 0) {
			this.gender = "male";
			this.genderPronoun = "he";
		} else {
			this.gender = "female";
			this.genderPronoun = "she";
		}	
		return {
			gender: gender,
			genderPronoun: genderPronoun
		}
	}

	function getFishSizeName() {
		if (fishSizeMath >= 95) {
			return "xxl";
		} else if (fishSizeMath >= 75 && fishSizeMath < 95) {
			return "xxl";
		} else if (fishSizeMath >= 50 && fishSizeMath < 75) {
			return "xl";
		} else if (fishSizeMath >= 40 && fishSizeMath < 50) {
			return "l";
		} else if (fishSizeMath >= 30 && fishSizeMath < 40) {
			return "m";
		} else if (fishSizeMath >= 20 && fishSizeMath < 30) {
			return "s";
		} else if (fishSizeMath >= 13 && fishSizeMath < 20) {
			return "xs";
		} else if (fishSizeMath >= 0 && fishSizeMath < 13) {
			return "xxs";
		}
	}
		
	var options = {
		size: fishSizeMath,
		sizeName: getFishSizeName(),
		type: getFishType(),
		gender: getFishGender().gender,
		genderPronoun: getFishGender().genderPronoun,
		money: getFishMoney().money,
		eventTrigger: getEventTrigger()
	};
	
	return new Fish(options);
}

