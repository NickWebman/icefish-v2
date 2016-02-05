var Player = (function () {
	var name, 
		weight,
		age,
		gender;
		
	var getName = function() {
		return this.name;
	}
		
	var stats = function () {
		return this.name + " " + this.weight;
	}
		
	var init = function(name, weight, age, gender) {
		this.name = name;
		this.weight = weight;
		this.age = age;
		this.gender = gender;
		$(".character-bar .name .value").text(this.name);
		$(".character-bar .weight .value").text(this.weight);	
		$(".character-bar .age .value").text(this.age);		
	}

	return {
		init: init,
		stats: stats,
		getName: getName,
		weight: weight,
		age: age,
		gender: gender
	};
});