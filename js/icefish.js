




	




$(document).ready(function() {

	var aFish;
	var castCount = 0; 


	$("h2").click(function(){
		$("#Name").val("Nick");
		$("#Age").val(32);
		$("#Weight").val(215);		
	});	

	// set defaults for buttons
	/*$("#CastButton").prop("disabled", false);
	$("#SetHookButton").prop("disabled", true);
	$("#ReelInButton").prop("disabled", true);	*/		
	
	// start screen collects input player data
	if (!$("#StartScreenContainer").hasClass("done")){
		$("#StartScreenContainer").show("slow");
		$("#StartScreenStuff").click(function(){
			$("#StartScreenContainer").addClass("done").hide("slow");		
			var name = $("#Name").val();
			var weight = $("#Weight").val();
			var age = $("#Age").val();
			var gender = $("#Gender").val();				
	
			var player1 = new Player();
			player1.init(name, weight, age, gender);
						
			console.log('Player1 name', player1.name);
			console.log(player1);

		});
	};		
	

	// cast
	$("#CastButton").click(function (){
		var aFishFactory = new FishFactory();
		aFish = aFishFactory.createFish();
		console.log(aFish);
		
		var aCastFactory = new CastFactory();
		var aCast = aCastFactory.createCast();
		console.log(aCast);
		displayCast(aCast);
		castCounter++;
		
	});
	
	$("#SetHookButton").click(function (){
		var aSetHookFactory = new SetHookFactory();
		var aSetHook = aSetHookFactory.createSetHook();
		console.log(aSetHook);
		
		displaySetHook(aFish, aSetHook);
		
	});
	
	$("#ReelInButton").click(function (){
		var aFishOnFactory = new FishOnFactory();
		var aFishOn = aFishOnFactory.createFishOn();
		console.log(aFishOn);			
	});
		
	

	
	


/*
	
	var player1 = new Player();
	player1.init("nick", 100, 15, "male");
	
	var player2 = new Player();
	player2.init("Luke", 100, 15, "male");

	console.log('Player1 name', player1.name);
	console.log('Player2 name', player2.name);
	console.log('Player1 name', player1.name);
	
	console.log("player1 stats", player1.stats());
	
	player1.name = "poop";

	console.log('Player1 name', player1.name);

*/



	
});



