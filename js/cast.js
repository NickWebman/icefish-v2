


function Cast(options) {
	this.bite = options.bite;
}

function CastFactory() {}

CastFactory.prototype.createCast = function createACast() {

	var castMath = Math.floor((Math.random() * 100) + 1);
	
	function getCastBite() {
		if (castMath > 10) {
			biteCount++;
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
		if (setHookMath > 10) {
			fishOnCount++;		
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




function FishLanded(options) {
	this.fishLanded = options.fishLanded;
}

function FishLandedFactory() {}

FishLandedFactory.prototype.createFishLanded = function createAFishLanded() {

	var fishLandedMath = Math.floor((Math.random() * 100) + 1);
	
	function getFishLanded() {
		if (fishLandedMath > 10) {
			fishLandedCount++;
			return true;
		} else {
			fishLostCount++;
			return false;
		}
	}
	
	var options = {
		fishLanded: getFishLanded()
	};
	
	return new FishLanded(options);
}
