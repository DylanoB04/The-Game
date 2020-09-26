var audiofile2 = new Audio('audio/lobby.mp3'); //plays music in lobby
		audiofile2.volume = 0.2;
		audiofile2.play();
			if (typeof audiofile2.loop == 'boolean')
			{			
				audiofile2.loop = true;
			}
			
var confirm = window.confirm("Are you sure you wish to start a new game?");  //asks player if they are sure to start a new game
	if (confirm == true) {
	}
	else{
		window.history.back();
	}

//start of game	

function start() {
		console.log("Start game:");
			alert("Orbit of Vekta | Space station ISA | ...You wake up from a loud alarm weeping through the station, another soldier comes running in your room.");
			alert("Soldier: Wake up dude, They're beginning the operation!!");
			alert("As you run your way to the main hangar you run into the Colonel.");
			alert("Colonel: Get your head together soldier, what team are you in?!");
	var action1 = prompt("Choose a team: Ground team | Space team");
		if (action1 == "Ground team") {  //storyline 1
				console.log("action1: Ground team.");
					alert("You've chosen Ground team.");
					alert("Capt. Wolf: Alright listen up, because we are ground team we are tasked with taking on the IVE forces on Vekta. Our current objective is to infiltrate a IVE lab where there is said they're making some kind of worldkilling weapon, we must destroy this weapon before they use it against us. We regroup at a local hotel and make our way to the roof to glide our way into the lab. AM I UNDERSTOOD!?");
					alert("As your dropship flies towards the hotel, enemy anti-air cannons shoots you down, you crashland in the nearby town. As you regain consciousness you spot a squadron of IVE soldiers heading your way, what will you do?");
			var option1 = prompt("fight | escape");
		
			if (option1 == "fight") {
				console.log("option1: fight");
					alert("You've chosen to fight the soldiers, however the enemy quickly has the upperhand and kills you");
				console.log("YOU DIED");
					alert("YOU DIED");
				window.history.back();
			}
			else{
					console.log("option1: escape");
						alert("You've chosen to escape, you quickly run towards the village and begin your search for your squad members. while suddenly you spot a patrol searching for remaining soldiers, what will you do?");
				var option2 = prompt("hide | fight");
			}
				if (option2 == "fight") {
					console.log("option2: fight");
						alert("You've chosen to fight the patrol, you quickly realise this was a bad option after they called in a backup drone, You're killed");
					console.log("YOU DIED");
						alert("YOU DIED");
					window.history.back();
				}
				else{
						console.log("option2: hide");
							alert("You chose to hide from the patrol, after a while the patrol is out of sight and you can continue your search");
							alert("While searching you receive a radiotransmit from Capt. Wolf:");
							alert("Capt. Wolf: Glad you made it out alive soldier, regroup with me at the hospital across the hotel, we have to finish the mission.");
							alert("When you arrive at the hospital you regroup with Wolf, he says he has a plan to infiltrate the hotel.");
							alert("Capt. Wolf: Alright soldier, you see that building across the street? that's our target. We can move in loud or we can sneak in quietly, your choice.");
					var	option3 = prompt ("loud | quietly");
				}
				if (option3 == "loud") {
					console.log("option3: loud");
						alert("You've chosen to go in loud, accompanied by Wolf you rush to the entrance of the hotel while shooting as many soldiers as you can. After a long gunfight you both run out of ammunition and the enemy overpowers you both.");
					console.log("YOU DIED");
						alert("YOU DIED");
					window.history.back();
				}
				else{
						console.log("option3: quietly");
							alert("You've chosen to go in quietly, once you and Wolf quietly moved your way to the roof of the hotel you quickly realise how massive the lab is.");
							alert("Capt. Wolf: We've made it this far we cannot back down now, our best way is to glide in through the window.");
							alert("Player: But sir, the whole place is filled with IVE soldiers, even if gliding through the window works how are we going to survive the guns instantly pointing at us??");
							alert("Capt. Wolf: I got that covered, put your weapon in supressed mode and enable the nightvision in your helmet.");
							alert("Once you and Wolf were gliding towards the window, you hear Wolf mumbling something in his helmet. Suddenly everything in a 10 mile radius went dark, you burst into the window killing two enemy soldiers, Wolf gets into the room:");
							alert("Capt. Wolf: We are at an advantage here, IVE soldiers don't have the ability to see in the dark, this is our only chance to rush to the weaponsroom and destroy the weapon, move out.");
							alert("Some time goes by, you and Wolf are rushing from room to room taking out enemies, when eventually you reach the weaponsroom. once entered you wonder how you're going to destroy this thing.");
							alert("Capt. Wolf: This is it soldier, this is what we came for. as he sticks a bomb to the weapon, suddenly the lights turn back on and an enemy soldier jumps onto Wolf taking the fight on with him.");
							alert("Capt. Wolf: evacuate this planet now! I will detonate the bomb myself.");
					var	option4 = prompt("escape | help Wolf");	
				}
				if (option4 == "help Wolf") {
					console.log("option4: help Wolf");
						alert("You've chosen to help Wolf fight the incoming enemy forces.");
						alert("Capt. Wolf: You're a stuborn soldier i'll admit, the ISA will remember our great sacrifice.");
					console.log("YOU DIED");
						alert("YOU DIED");
					window.history.back();
				}
				else{
						console.log("option4: escape");
							alert("You've chosen to escape planet Vekta");
							alert("You find an abandoned ISA fightership and begin your way to the orbit of Vekta were a massive battle is ongoing. While you're flying away a massive blast comes from below, Wolf blew up the weapon with success but died in the explosion.");			
							alert("As you're flying in orbit you spot a friendly squadron of pilots and you decide to join them for support.");
								alert("After speaking to the leader of the squadron you learn that the mission is to infiltrate an IVE dreadnought and capture a high value target.");
								alert("On the way to the enemy dreadnoughts you're immediately under heavy fire from heavy weapons that the dreadnoughts are packing, what will you do?");
					var option_a = prompt("stay on course | seek cover");
				}

		}else{  //storyline 2
				console.log("action1: Space team.");
					alert("You've chosen Space team.");
					alert("Ghost: G'day pilots, our mission is to infiltrate an IVE dreadnought and capture a high value target. Any questions? No? That's what i thought.");
					alert("As you and your squadron have entered your fighterships and took off, you head your way to the other side of the planet where the enemy forces lay waiting on your arrival.");
					alert("On the way to the enemy dreadnoughts you're immediately under heavy fire from heavy weapons that the dreadnoughts are packing, what will you do?");
			var option_a = prompt("stay on course | seek cover");
		}
			if (option_a == "stay on course") {
				console.log("option_a: stay on course");
					alert("You've chosen to stay on course and head directly into enemy fire, not smart. The enemy cannons quickly take you and your squadron out.")
				console.log("YOU DIED");
					alert("YOU DIED");
				window.history.back();				
			}
			else{
					console.log("option_a: seek cover");
						alert("You've chosen to seek cover behind a meteorite, it seems the cannons have a firing pattern. You continue your course to the target dreadnought.");
						alert("Suddenly you see an enemy fightership on your tail, what will you do?");
				var option_b = prompt("enter dogfight | evade");				
			}
				if (option_b == "evade") {
					console.log("option_b: evade");
						alert("You've chosen to evade the incoming missles, unfortunately the missles are heatseeking and you are shot down.");
					console.log("YOU DIED");
						alert("YOU DIED");
					window.history.back();				
				}
				else{
						console.log("option_b: enter dogfight");
							alert("You've chosen to enter dogfight with the enemy fightership, a battle only the best pilot would survive. You won the dogfight but notice you've taken quite some damage to the engine, you can either continue or revert the weapon energy towards the engine. However this will disable all weapons and you will be defensless.");
					var option_c = prompt("do nothing | revert energy");							
				}
				if (option_c == "do nothing") {
					console.log("option_c: do nothing");
						alert("Even though the damage will slow you down you choose to keep going and do nothing.");
						alert("During all this time the dreadnoughts have recharged their cannons and begin opening fire again. You aren't making enough speed, this ends up in you being shot.");
					console.log("YOU DIED");
						alert("YOU DIED");
					window.history.back();
				}
				else{
						console.log("option_c: revert energy");
							alert("You decide to revert the energy to your engine, this makes you the fastest fightership in the battle.");
							alert("Speeding your way through enemy lines you rush with great speed towards the target dreadnought, you land in the main hangar and begin firing on every moving thing to make sure your squadron can land savely.");
							alert("Once the remaining pilots have landed you begin to make your way towards the target.");
							alert("Eventually you encounter the hiding place of the target, you and Ghost decide to breach. This goes very wrong when the target strikes you to the floor and begins to hold Ghost hostage, you quickly grab your sidearm but you're too late to be able to fire.");
							alert("Ghost: oi mate, shoot me and the bullet will hit the bastard aswell.");
					var option_d = prompt("shoot | hold fire");
				}
				if (option_d == "hold fire") {
					console.log("option_d: hold fire");
						alert("You decide to hold your fire, in result the target points the gun towards you and shoots you.");
					console.log("YOU DIED");
						alert("YOU DIED");
					window.history.back();
				}
				else{
						console.log("option_d: shoot");
							alert("You decide to shoot into Ghost's shoulder causing the bullet to hit the target aswell");
							alert("While the target is bleeding on the floor you slowly walk towards him pointing the gun at him.");
							alert("Ghost: NO PILOT WE NEED THE TARGET ALIVE!");
					var option_e = prompt("execute | capture");							
				}
				if (option_e == "execute") {
					console.log("option_e: execute");
						alert("You executed the target in cold blood.");
					console.log("MISSION FAILED");
						alert("MISSION FAILED");
					window.history.back();
				}
				else{
						console.log("option_e: capture");
							alert("You capture the target and bring him in for interogation.");
							alert("Ghost: Good job mate, mission is a success. Lets bring this warcriminal back to HQ.");
							alert("THE END");
						window.location.href = 'ending.html';	
				}
	}
	