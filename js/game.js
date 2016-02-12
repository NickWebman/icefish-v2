



// All the display and animation shit is in here

function displayComment(aComment){
	$(".fishing-hole .comment").remove();
	$(".fishing-hole").append('<div class="comment">' + aComment.comment + '</div>');
	$(".fishing-hole .comment").hide().show("slow").delay(1300).hide("slow");
}

function updateMoneyTotal(aFish, aFishLanded){
	if (aFishLanded.fishLanded){
		totalMoney += aFish.money;

		
		//$(".hole .value").hide().text(aFish.money).delay(300).fadeIn(1000).delay(1000).fadeOut(700);		

		$(".hole .value").removeAttr('style').html('<span class="plus">+</span><span class="dollar">$</span>' + aFish.money).delay(300).animate({
			opacity: 1,
			top: "80"
		}, 500, "easeOutBack").delay(400)
		.animate ({
			opacity: 0,
			top: "-100",
			left: "400"
		}, 700)
		//.effect( "transfer", { to: $( ".money .value" ) }, { duration: 1000, queue: false} )

		$(".money .value").text(totalMoney).delay(1600).animate({
			color: "#0084ff"
			}, 500)
			.animate({
				color: "#eee"        
			}, 2000);
		
	}
}


function displayCast(aFish, aCast){ 

	$(".casts .value").text(castCount);		
	$(".status .value").hide();
	$(".status .value").fadeIn();
	
	// remove the existing fish from play field
	$(".shit .fish-swim-here .fish").remove();
	
	// add a new one
	$(".shit .fish-swim-here").prepend('<div class="fish '+ aFish.sizeName +' '+ aFish.type +'" ></div>');
	
	// do event stuff if an event was triggered. if not, the regular fish catching process carries on.
	if (aFish.eventTrigger){

		var anEventFactory = new EventFactory();
		var anEvent = anEventFactory.createEvent();	
		console.log(anEvent);
		
		eventDisplay(anEvent);
		
		return;
		
	} else {
	
		if (aCast.bite){
			$("#CastButton").prop("disabled", true);
			$("#SetHookButton").prop("disabled", false);
			$("#ReelInButton").prop("disabled", true);
			$(".bites .value").text(biteCount);	
			
			$(".shit .fish-swim-here .fish").addClass("bite");

			$(".shit .line").animate({
				opacity: 1,		
				height: "+=45"
			}, 500);
			
			$(".shit .fish-swim-here .fish").animate({
				left: "+=50"
			}, 500);
			
			$(".status .value").text("You got a bite!");
			
		} else {
			$("#CastButton").prop("disabled", false);
			$("#SetHookButton").prop("disabled", true);
			$("#ReelInButton").prop("disabled", true);
			$(".status .value").text("No bites. Cast again.");	

			$(".shit .line").animate({
					height: "+=45",
					opacity: 1
				}, 500)
				.animate({
					height: "-=45",
				}, 500);		
					
			
			$('.shit .fish-swim-here .fish').animate({
					left: "+=50"
				}, 500)
				.animate({
					left: "+=50",
					opacity: 0
				}, 500);		
			
			//$(".shit .fish-swim-here .fish").remove();
			$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>You did not get a bite</div>')		
		}
	}
}

function displaySetHook(aFish, aSetHook){ 

	if (aSetHook.hookSet){
		$("#CastButton").prop("disabled", true);
		$("#SetHookButton").prop("disabled", true);
		$("#ReelInButton").prop("disabled", false);
		
		$(".shit .fish-swim-here .fish").addClass("rotate-hooked");
		
		$(".fish-on .value").text(fishOnCount);			
		$(".status .value").text("Fish on!");	
	} else {
		$("#CastButton").prop("disabled", false);
		$("#SetHookButton").prop("disabled", true);
		$("#ReelInButton").prop("disabled", true);
		
		$(".shit .line").animate({
			height: "-=45"
		}, 500);
		
		$(".shit .fish-swim-here .fish").animate({
			left: "+=50",
			opacity: 0
		}, 500);		
		
		$(".status .value").text(aFish.genderPronoun + " didn't take the bait");
		$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>You got a bite, but ' + aFish.genderPronoun + ' did not take the bait.</div>')				
		
	}
		
}

function displayFishLanded(aFish, aFishLanded){ 

	if (aFishLanded.fishLanded){
		$("#CastButton").prop("disabled", false);
		$("#SetHookButton").prop("disabled", true);
		$("#ReelInButton").prop("disabled", true);

		
		$(".shit .line").animate({
				height: "-=45",
				opacity: 0				
			}, 500);
		
		$('.shit .fish-swim-here .fish').removeClass("rotate-hooked").addClass("rotate-landed").animate({
				top: "-=45",
				opacity: 0
			}, 500);
		
		$(".fish-caught .value").text(fishLandedCount);		
		$('.status .value').text('You caught a '+ aFish.size +'" '+ aFish.gender +' '+ aFish.type +'!');	
		$('.livewell .the-fish').prepend('<div class="fish '+ aFish.sizeName +' '+ aFish.type +'" title= "'+ aFish.size +'in '+ aFish.gender +' '+ aFish.type +' "></div>');
		$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>You caught a '+ aFish.size +'" '+ aFish.gender +' '+ aFish.type +'! + $' + aFish.money +'</div>')					
		
	} else {
		$("#CastButton").prop("disabled", false);
		$("#SetHookButton").prop("disabled", true);
		$("#ReelInButton").prop("disabled", true);

		$(".shit .line").animate({
				height: "-=45"
			}, 500);
		
		$('.shit .fish-swim-here .fish').removeClass("rotate-hooked").animate({
				left: "+=70",
				opacity: 0
			}, 500);		
		
		$(".fish-lost .value").text(fishLostCount);	
		$(".status .value").text(aFish.genderPronoun + " got away.");	
		$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>You hooked a ' + aFish.size + '" ' + aFish.type + ', but ' + aFish.genderPronoun + ' got away.</div>')						
	
		
	}
		
}