
 $(document).ready(function() {

 	// Variables
 	var crystalBank = []; // Used to store the 4 random crystal values generated by the crystalValue variable.
 	var crystalBankValue = "";  // Calculates the value of each crystal between 1 and 12.
 	var crystalValue = "";
 	var targetNumber = Math.floor(Math.random() * 120) + 19; // Need variable to generate the computer picked number to match between 19 and 120.
 	var counter = 0; // Set a counter variable to zero.  This will increase with each crystal click.
 	var wins = 0;
 	var losses = 0;


 //**************************************************************************************************************************
 //**************************************************************************************************************************
 	
 	// Test / Debugging
 	console.log("Crystal Value: " + crystalValue); // Returns a number 1-12.
 	console.log("Computer Picked: " + targetNumber); // Returns a number between 19-120.
 	console.log("Counter: " + counter); // Returns a value of 0 on refresh.  Check increments later.

 //**************************************************************************************************************************
 //**************************************************************************************************************************

	// Functions
 	
	// Reset Game.  Use this to reset the game except for the wins and losses.
	function gameSetUp() {
		targetNumber = Math.floor(Math.random() * 120) + 19;
		crystalBank = [];
		counter = 0;
		crystalValue = "";
		$("#user-score").text(counter);
		$("#random-number").text(targetNumber);
		for (var i = 0; i < 4; i++) {
			var random = Math.floor(Math.random() * 12) + 1;
			crystalBank.push(random);
			console.log("Crystal Bank: " + crystalBank);
			
			var crystal1 = $("#crystal-1");
			crystal1.attr("data-crystalvalue", crystalBank[0]);
	    	
	    	var crystal2 = $("#crystal-2");
	    	crystal2.attr("data-crystalvalue", crystalBank[1]);

	    	var crystal3 = $("#crystal-3");
	    	crystal3.attr("data-crystalvalue", crystalBank[2]);

	    	var crystal4 = $("#crystal-4");
	    	crystal4.attr("data-crystalvalue", crystalBank[3]);
	 	}
	}

  	// Replace the placeholder number on the gameboard with the random number generated by the var targetNumber.
	$("#random-number").text(targetNumber);

	// Generate 4 random numbers: Got that part.  Trying to make them unique.
	// Create a loop to generate 4 index values for the crystalBank array.
	for (var i = 0; i < 4; i++) {
		var random = Math.floor(Math.random() * 12) + 1;
		crystalBank.push(random);
		console.log("Crystal Bank: " + crystalBank); // FINALLY GOT THIS TO GENERATE 4 NUMBERS AND STORE THEM!!!!!  This section is working


		// Assign a value to each crystal. 
		// I need to pull the number out of the crystalBank using the index value.
		// Went with the below for now. Works, but may be tedious.
			
		// From the crystal in-class demo.  Don't fully understand the .attr and "data" functions.
			// Each Crystal will be given a data attribute called data-crystalValue.
	    	// This data attribute will be set equal to the array value using the array index.	
		var crystal1 = $("#crystal-1");
		crystal1.attr("data-crystalvalue", crystalBank[0]);
    	
    	var crystal2 = $("#crystal-2");
    	crystal2.attr("data-crystalvalue", crystalBank[1]);

    	var crystal3 = $("#crystal-3");
    	crystal3.attr("data-crystalvalue", crystalBank[2]);

    	var crystal4 = $("#crystal-4");
    	crystal4.attr("data-crystalvalue", crystalBank[3]);
 	}


	$(".thumbnail").on("click", function() {
			
		// FROM THE CRYSTAL IN-CLASS DEMO.  DON'T FULLY UNDERSTAND WHAT IS GOING ON.
			// Determining the crystal's value requires us to extract the value from the data attribute.
    		// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
   			// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    		// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

		crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue); 
		console.log("Crystal Value: " + crystalValue);
		   
		// Add the crystalValue to the user's "counter" which is a global variable.
		// Every click, from every crystal adds to the global counter.			
		counter += crystalValue;
		$("#user-score").text(counter);

		// Here we created some logic to "check" if the click counter matches the targetNumber.
    	// Remember, this click event will be triggered with each click.
    	if (counter === targetNumber) {

      		// If the numbers match, alert a win.
      		alert("You win!");
      		wins ++;
      		$("#wins").text("Wins: " + wins);

      		// If the user score goes over the computer number, alert a loss.
      		} else if (counter > targetNumber) {
      			alert("You lose.");
      			losses ++;
      			$("#losses").text("Losses: " + losses);
      		}
	});

	// Reset the game except for the running wins and losses.
	$("#reset").on("click", function() {
		gameSetUp();
	});

});