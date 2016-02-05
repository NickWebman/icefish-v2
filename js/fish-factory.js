
function FishFactory() {}

FishFactory.prototype.createFish = function createAFish() {

	var fishTypeMath = Math.floor((Math.random() * 100) + 1);
	var fishSizeMath = Math.floor((Math.random() * 100) + 1);	

	function getFishType (){
		if (fishTypeMath >= 95) {
			return "mega shark";
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
		} else if (fishSizeMath >= 85 && fishSizeMath < 95) {
			return "xxl";
		} else if (fishSizeMath >= 75 && fishSizeMath < 85) {
			return "xl";
		} else if (fishSizeMath >= 60 && fishSizeMath < 75) {
			return "l";
		} else if (fishSizeMath >= 45 && fishSizeMath < 60) {
			return "m";
		} else if (fishSizeMath >= 30 && fishSizeMath < 45) {
			return "s";
		} else if (fishSizeMath >= 15 && fishSizeMath < 30) {
			return "xs";
		} else if (fishSizeMath >= 0 && fishSizeMath < 15) {
			return "xxs";
		}
	}
	
	var options = {
		size: fishSizeMath,
		sizeName: getFishSizeName(),
		type: getFishType(),
		gender: getFishGender().gender,
		genderPronoun: getFishGender().genderPronoun
	};
	
	return new Fish(options);
}

