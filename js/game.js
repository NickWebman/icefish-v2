



function displayCast(aCast){ 

	if (aCast.bite){
		$("#CastButton").prop("disabled", true);
		$("#SetHookButton").prop("disabled", false);
		$("#ReelInButton").prop("disabled", true);
		$(".status .value").text("You got a bite!");
	} else {
		$("#CastButton").prop("disabled", false);
		$("#SetHookButton").prop("disabled", true);
		$("#ReelInButton").prop("disabled", true);
		$(".status .value").text("No bites. Cast again.");	
		
		// populate the cast list with cast data
		$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>You did not get a bite</div>')		
	}
		
}

function displaySetHook(aFish, aSetHook){ 

	if (aSetHook){
		$("#CastButton").prop("disabled", true);
		$("#SetHookButton").prop("disabled", true);
		$("#ReelInButton").prop("disabled", false);
		$(".status .value").text("Fish on!");	
	} else {
		$("#CastButton").prop("disabled", false);
		$("#SetHookButton").prop("disabled", true);
		$("#ReelInButton").prop("disabled", true);
		$(".status .value").text(aFish.genderPronoun + " didn't take the bait");		
		

	}
		
}