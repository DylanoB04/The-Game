var audiofile2 = new Audio('audio/lobby.mp3');
		audiofile2.volume = 0.2;
		audiofile2.play();
			if (typeof audiofile2.loop == 'boolean')
			{			
				audiofile2.loop = true;
			}
			
var confirm = window.confirm("Are you sure you wish to start a new game?");
	if (confirm == true) {
	}
	else{
		window.history.back();
	}
	
function quest1(){
	alert("While sneaking your way through countless battles and forces from both parties, you stumble across a small IVE squadron stuck under heavy fire from enemy ISA forces.");
	var q1 = prompt("HELP or KILL");
		if (q1 == "HELP") {
			//STORYLINE 1
			console.log("q1: you helped the soldiers");
			alert("You've helped the soldiers and saved their life");
			alert("Capt. John: Thanks for the help out there, the ISA must've identified you by now. They'll be hunting for you now, it's best to come with us.")
			s1_q1 = prompt("JOIN or REFUSE");
		}	
		else{
			//STORYLINE 2
			console.log("q1: you killed the soldiers");
			alert("You've killed the soldiers and helped the ISA");
			alert("Capt. Wolf: So...which side are you on stranger?");
			s2_q1 = prompt("ISA or IVE");
			if (s2_q1 == "IVE") {
				console.log("S2Q1: Chose IVE");
				alert("Capt. Wolf: We don't deal with traitors around here.");
				alert("YOU DIED");
				window.history.back();
				console.log("YOU DIED");
			}
			else{
				//storyline for ISA
				console.log("S2Q1: Chose ISA");
				alert("You choose sides with ISA");
				alert("Capt. Wolf: Good. Welcome to the ISA! Our main objective is to retrieve the fusionbomb from Sector 4, once we retrieved the bomb it's gonna be a race against the clock to evacuate this wasted planet. Are you going with the groundforces or airforces?");
				s2_q2 = prompt("GRFORCE or AIRFORCE");	

			}
			if (s2_q2 == "GRFORCE") {
				console.log("S2Q2: Chose GRFORCE");
				alert("You chose groundforces");
				alert("You acompany the groundforces to the border of sector 4, you see a massive tower guarded by IVE forces.");
				alert("Capt. Wolf: Welcome stranger, as of now that tower is being guarded by multiple squadrons of IVE forces, we can either fight them head on or rotate to the other side and take them by suprise.");
				s2_q3 = prompt("ATTACK or SUPRISE");
			}
			else{
				console.log("S2Q2: Chose AIRFORCE");
				alert("You acompany the airforces to the border of sector 4. However, anti-airship weaponary takes all the airforces out.");
				alert("YOU DIED");
				window.history.back();
				console.log("YOU DIED");
			}
			if (s2_q3 == "ATTACK") {

			}
		}
	}


	
	