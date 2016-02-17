


// stop. you need to fix all this shit. do it right.


// this function triggers when an event (special fish) dialogue is completed. It handles messages and resets the playfield, kind of.  
function keepFishing(){
	$("#KeepFishingButton").click(function(){
		$(".status .value").html("Let's keep fishing...");
		$(".level-message .value").hide("slow");
		$("#CastButton").prop("disabled", false);
		$("#SetHookButton").prop("disabled", true);
		$("#ReelInButton").prop("disabled", true);
	});
}


function Event(options) {
	this.eventName = options.eventName;
}

function EventFactory() {}

EventFactory.prototype.createEvent = function createAnEvent() {

	var eventMath = Math.floor((Math.random() * 100) + 1);
		
	function getEventName(){
		if (eventMath >= 95) {
			return "pregnant";
		} else if (eventMath >= 85 && eventMath < 95) {
			return "mermaid";
		} else if (eventMath >= 75 && eventMath < 85) {
			return "pregnant";
		} else if (eventMath >= 60 && eventMath < 75) {
			return "mermaid";
		} else if (eventMath >= 45 && eventMath < 60) {
			return "pregnant";
		} else if (eventMath >= 30 && eventMath < 45) {
			return "mermaid";
		} else if (eventMath >= 15 && eventMath < 30) {
			return "pregnant";
		} else if (eventMath >= 0 && eventMath < 15) {
			return "mermaid";
		}
	}
	
	switch (getEventName()) {
		case "pregnant":
			
			$(".level-message .value").html("<span class='special'>This fish seems different...</span><div class='inner'>As you unhook the fish and open the livewell, she turns to you and pleads: \"Sir, I happen to be very pregnant. Are you sure you want to murder a mother and her babies?\" </div><div class='answers'><label><input type='radio' name='pregnant' value='a'>Ok. I won't eat you.</label><label><input type='radio' name='pregnant' value='b'>Meh. I'm still going to eat you.</label><label><input type='radio' name='pregnant' value='c'>Stab her</div></label>");
			$(".level-message .value").show("slow");

			$(".answers input").click(function(){
				if ($(this).val() == "a"){
					$(".status .value").html('That was nice of you <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');
					$(".status .value").hide().show("slow");
					$(".status .value input").show(1000).css('display', 'block');
					$(".answers input").prop("disabled", true);
					$(".answers input").not(this).addClass("disabled");								
					//eventXp = 80;
					eventCastListMessage = "You caught a pregnant fish. You threw her back because you're cool.";
					$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>' + eventCastListMessage + '</div>');		
					
				} else if ($(this).val() == "b"){
					$(".status .value").html("You sit the fish down and explain the concept of the food chain. When the fish responds \"That's cool. Where am I on the food chain?\", you look her in the eye and promptly bite into her face. <input id='KeepFishingButton' type='submit' class='button' value='Continue fishing'>");							
					$(".status .value").hide().show("slow");	
					$(".status .value input").show(1000).css('display', 'block');
					$(".answers input").prop("disabled", true);									
					$(".answers input").not(this).addClass("disabled");								
					//eventXp = 80;							
					eventCastListMessage = "You caught a pregnant fish. You explained the food chain and then ate her and her babies."
					$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>' + eventCastListMessage + '</div>');		
					
				} else if ($(this).val() == "c"){
					$(".status .value").html("Why would you do that? Are you OK? <input id='KeepFishingButton' type='submit' class='button' value='Continue fishing'>");							
					$(".status .value").hide().show("slow");	
					$(".status .value input").show(1000).css('display', 'block');
					$(".answers input").prop("disabled", true);									
					$(".answers input").not(this).addClass("disabled");								
					//eventXp = -50;
					eventCastListMessage = "You caught a pregnant fish. You chose to stab her for no reason. This is why nobody likes you.";			
					$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>' + eventCastListMessage + '</div>');		
				}

			//addTraits();
			keepFishing();						
				
			});

			break;
		
		case "mermaid":
				
			$(".level-message .value").html("<span class='special'>This fish seems different...</span><div class='inner'>Much to your surprise, a beautiful mermaid emerges from the fishing hole. Disoriented, she pleads, \"If you let me go, I will grant you one wish\". Intrigued, you respond... </div><div class='answers'><label><input type='radio' name='mermaid' value='a'>I wish for whiskey.</label><label><input type='radio' name='mermaid' value='b'>I wish for world peace.</label><label><input type='radio' name='mermaid' value='c'>I wish we would bang.</div></label>");
			$(".level-message .value").show("slow");

			$(".answers input").click(function(){
				if ($(this).val() == "a"){
					$(".status .value").html('"Oh cool. I have a drinking problem, too.", she responds as she produces a bottle marked "xxx". You sit down, share drinks, and tell tales of two polarizing worlds. Now laughing, you meet eachother\'s gaze and sheepishly smile. As passion takes over, you resign to the tranquilizing effects of whiskey and engage in interspecies intercourse. <p>Although mermaid boobs are pretty great, their lower-half is more fish than human. In other words, you stuck your penis in fish vagina.</p> <p>You focus on her upper-half and finish anyway.</p> <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');
					$(".status .value").hide().show("slow");			
					$(".status .value input").show(1000).css('display', 'block');
					$(".answers input").prop("disabled", true);
					$(".answers input").not(this).addClass("disabled");								
					//eventXp = 80;
					eventCastListMessage = "You caught a mermaid, got drunk, and had weird mermaid sex.";
					$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>' + eventCastListMessage + '</div>');		

					
				} else if ($(this).val() == "b"){
					$(".status .value").html('In a pretentious tone, you proudly announce "I wish for world peace". <p>Smirking, she says "I\'m a mermaid, not a genie. Idiot.", and hurriedly swims away.</p>  <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');							
					$(".status .value").hide().show("slow");
					$(".status .value input").show(1000).css('display', 'block');
					$(".answers input").prop("disabled", true);									
					$(".answers input").not(this).addClass("disabled");								
					//eventXp = 80;							
					eventCastListMessage = "You caught a mermaid who convinced you she could grant wishes. She couldn't."
					$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>' + eventCastListMessage + '</div>');		
					$(".gullible .reasons").append('<span>  </span>');
					
				} else if ($(this).val() == "c"){
					$(".status .value").html('"Mmmm ok baby, but you must promise to keep your eyes shut, or else you\'ll turn into a merman", she responds flirtatiously. With a lack of knowledge on interspecies relations, you fear something\'s awry, yet don\'t know enough to dispute her claim. It\'s been a slow year, so you close your eyes and wish for the best. <p>It\'s cold and it\'s weird, but you finish anyway. You finally look down to find a catfish latched onto your dong. Shame sinks in as you quickly realize it was all a just sexy scheme to <span class="special">steal $100</span>.</p> <input id="KeepFishingButton" type="submit" class="button" value="Continue fishing">');							
					$(".status .value").hide().show("slow");
					$(".status .value input").show(1000).css('display', 'block');
					$(".answers input").prop("disabled", true);									
					$(".answers input").not(this).addClass("disabled");								
					//eventXp = -50;
					eventCastListMessage = "You accidentally had sex with a fish.";
					$('.casts-list').prepend('<div><span>cast #' + castCount + ': </span>' + eventCastListMessage + '</div>');		
				}
				
				//addTraits();
				keepFishing();
			
			});				
			
			break;


	}	
	
	var options = {
		eventName: getEventName()
	};

	return new Event(options);
	
}

function eventDisplay(anEvent){

	$("#CastButton").prop("disabled", true);
	$("#SetHookButton").prop("disabled", true);
	$("#ReelInButton").prop("disabled", true);	
	
	
	console.log("another" + anEvent.eventName)
}

