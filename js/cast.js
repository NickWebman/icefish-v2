


function Cast(options) {
	this.bite = options.bite;
}

function CastFactory() {}

CastFactory.prototype.createCast = function createACast() {

	var castMath = Math.floor((Math.random() * 100) + 1);
	
	function getCastBite() {
		if (castMath > 20) {
			return true;
		} else {	
			return false;
		}
	}

	var options = {
		bite: getCastBite()
	};
	
	return new Cast(options);
}



function SetHook(options) {
	this.hookSet = options.hookSet;
}

function SetHookFactory() {}

SetHookFactory.prototype.createSetHook = function createASetHook() {

	var setHookMath = Math.floor((Math.random() * 100) + 1);
	
	function getSetHook() {
		if (setHookMath > 20) {
			return true;
		} else {	
			return false;
		}
	}

	var options = {
		hookSet: getSetHook()
	};
	
	return new SetHook(options);
}




function FishOn(options) {
	this.fishOn = options.fishOn;
}

function FishOnFactory() {}

FishOnFactory.prototype.createFishOn = function createAFishOn() {

	var fishOnMath = Math.floor((Math.random() * 100) + 1);
	
	function getFishOn() {
		if (fishOnMath > 20) {
			return true;
		} else {	
			return false;
		}
	}

	var options = {
		fishOn: getFishOn()
	};
	
	return new FishOn(options);
}
