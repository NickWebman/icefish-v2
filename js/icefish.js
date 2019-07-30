


var aFish;
var castCount = 0; 
var biteCount = 0;
var fishOnCount = 0;
var fishLostCount = 0;
var fishLandedCount = 0;
var totalMoney = 0;
var totalMoneyAllTime = 0;


$(document).ready(function() {

	// set defaults
	$("#CastButton").prop("disabled", false);
	$("#SetHookButton").prop("disabled", true);
	$("#ReelInButton").prop("disabled", true);

	$("h2").click(function(){
		$("#Name").val("Nick");
		$("#Age").val(35);
		$("#Weight").val(215);		
	});	
	
	// start screen collects input player data
	if (!$("#StartScreenContainer").hasClass("done")){
		$("#StartScreenContainer").show("slow");
		$("#StartScreenStuff").click(function(){
			$("#StartScreenContainer").addClass("done").hide("slow");		
	
			var aPlayerFactory = new PlayerFactory();
				aPlayer = aPlayerFactory.createPlayer();
					console.log(aPlayer);
					displayPlayer(aPlayer);
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
		
		castCount++;		

		displayCast(aFish, aCast);
				
	});
	
	$("#SetHookButton").click(function (){
		var aSetHookFactory = new SetHookFactory();
		var aSetHook = aSetHookFactory.createSetHook();
		console.log(aSetHook);
		
		displaySetHook(aFish, aSetHook);
		
	});
	
	$("#ReelInButton").click(function (){
		var aFishLandedFactory = new FishLandedFactory();
		var aFishLanded = aFishLandedFactory.createFishLanded();
		console.log(aFishLanded);

		var aCommentFactory = new CommentFactory();
		var aComment = aCommentFactory.createComment(aFish, aFishLanded);		
			
		displayComment(aComment);
		displayFishLanded(aFish, aFishLanded);
		updateMoneyTotal(aFish, aFishLanded);
		updatePlayerLevel(aPlayer);
		
	});
		
		
});



