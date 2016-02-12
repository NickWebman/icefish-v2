function Fish(options) {
	this.size = options.size;
	this.sizeName = options.sizeName;		
	this.type = options.type;
	this.gender = options.gender;
	this.genderPronoun = options.genderPronoun;
	this.money = options.money;
	this.eventTrigger = options.eventTrigger;
} 

/*

var Fish = (function () {
	var type,
		size,
		sizeName,
		gender;
	
	var getType = function() {
		var fishTypeMath = Math.floor((Math.random() * 100) + 1);
		alert("gettype");
		
	}
		
	var getSize = function() {
		var fishSizeMath = Math.floor((Math.random() * 100) + 1);
		return fishSizeMath;
	}
	
	var getSizeName = function() {
		return "xl";
	}

	var getGender = function() {
		return "female";
	}

	var init = function(type, size, sizeName, gender) {
		this.type = type;
		this.size = size;
		this.sizeName = sizeName;
		this.gender = gender;

	}	

	return {
		init: init,
		getType: getType,
		getSize: getSize,
		getSizeName: getSizeName,		
		getGender: getGender
	};
	
	
});

*/