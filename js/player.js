function Player(options) {
	this.name = options.name;
	this.weight = options.weight;
	this.age = options.age;
	this.gender = options.gender;
	this.level = options.level;
	this.xp = options.xp;
}

function PlayerFactory() {}

PlayerFactory.prototype.createPlayer = function createAPlayer() {
			var name = $("#Name").val();
			var weight = $("#Weight").val();
			var age = $("#Age").val();
			var gender = $("#Gender").val();
			var level = 0;		
		
	var getName = function() {
		this.name = $("#Name").val();
		return this.name;
	}
	var getWeight = function() {
		this.weight = $("#Weight").val();
		return this.weight;
	}
	var getAge = function() {
		this.age = $("#Age").val();
		return this.age;
	}
	var getGender = function() {
		this.gender = $("#Gender").val();
		return this.gender;
	}
	var getLevel = function() {
		this.level = 0;
		return this.level;
	}
	var getXP = function() {
		this.xp = 0;
		return this.xp;
	}							

		
	var stats = function () {
		return this.name + " " + this.weight;
	}
	
	var options = {
		name: getName(),
		weight: getWeight(),
		age: getAge(),
		gender: getGender(),
		level: getLevel(),
		xp: getXP()
	};
	/*	
	var init = function(name, weight, age, gender, level) {
		this.name = name;
		this.weight = weight;
		this.age = age;
		this.gender = gender;
		this.level = level;		
	} */

	return new Player(options); 

}



