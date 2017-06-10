//Object declared with variables and functions to keep track of time/rounds in the trivia game
var gameClock = {

	//set how much time the player gets
	timeLeft:  30,
	//keep track of which numer question the player is on
	roundNumber: 0,

	intervalId: null,

	//decrease the time remaining by one, and print it to the screen
	countdown: function() {

    	if (gameClock.timeLeft > 0){
    		
    		gameClock.timeLeft--;
    		$("#time-left").html("Time Left: " + gameClock.timeLeft);
    	
    	}

    	if (gameClock.timeLeft === 0){

    		if (triviaGameVars.questionNumber === triviaGameVars.questionsArray.length-1){

				displayEndGameScreen();
				clearInterval(gameClock.intervalId);

			}

			else {
    			displayCorrectAnswer();
    			$("#time-left").html("TIME'S UP!");
    			delayDisplayNextQuestion();
    		}

    	}

  	},

  	//run the countdown function once every second to make our timer
  	timer: function(){
  		
  		gameClock.intervalId = setInterval(gameClock.countdown, 1000);

  	},

  	resetClock: function(){

  		clearInterval(gameClock.intervalId);
  		gameClock.timeLeft = 30;
  		$("#time-left").html("");

  	}

};

var triviaGameVars = {

	questionsArray: [],
	questionNumber: 0,
	correctAnswersNum: 0,
	incorrectAnswersNum: 0,

};	

function answerSelection(userSelection){

			if ( userSelection  === triviaGameVars.questionsArray[triviaGameVars.questionNumber].correctAnswer ){
				
				$("#question-div").html("CORRECT!");
				$("#answer-choices-div").html("");
				gameClock.resetClock();
				displayAnswerGif();
				triviaGameVars.correctAnswersNum++;

			}

			else {

				$("#question-div").html("WRONG!");
				$("#answer-choices-div").html();
				displayCorrectAnswer();
				triviaGameVars.incorrectAnswersNum++;

			}						

};

function assignSelectedAnswer(answerId) {

	if ( answerId === "answer-a" ) {
		return triviaGameVars.questionsArray[triviaGameVars.questionNumber].answerA;
	}

	else if ( answerId === "answer-b" ) {
		return triviaGameVars.questionsArray[triviaGameVars.questionNumber].answerB;
	}

	else if ( answerId === "answer-c" ) {
		return triviaGameVars.questionsArray[triviaGameVars.questionNumber].answerC;
	}

	else if ( answerId === "answer-d" ) {
		return triviaGameVars.questionsArray[triviaGameVars.questionNumber].answerD;
	}

};

function clearAnswerGif(){

	$("#answer-gif-img").attr("src", "")

}

function delayDisplayNextQuestion(){

	setTimeout(function(){ 
						
		if (triviaGameVars.questionNumber === triviaGameVars.questionsArray.length-1){

			displayEndGameScreen();

		}

		else {
			prepareForNextQuestion();
			printQuestion(triviaGameVars.questionNumber);
			gameClock.timer();
		}

	}, 3000);


}

function displayAnswerGif(){

	$("#answer-gif-img").attr("src", triviaGameVars.questionsArray[triviaGameVars.questionNumber].gifAddress);

};

function displayCorrectAnswer(){

	$(".answer-choice").remove();
	$("#answer-choices-div").html("The correct answer is: " + triviaGameVars.questionsArray[triviaGameVars.questionNumber].correctAnswer);
	gameClock.resetClock();
	clearAnswerGif();
	displayAnswerGif();

};

function displayEndGameScreen(){

	gameClock.resetClock;
	$("#question-div").html("GAME OVER");
	$("#answer-choices-div").html("You got " + triviaGameVars.correctAnswersNum + " questions correct, and " + triviaGameVars.incorrectAnswersNum + " questions wrong!");
	$("#next-question-button").remove();
	

	var restartButton = $("<button id='restart-button' class='center-block'>Restart Game</div>");
	$("#buttons-div").append(restartButton);

};

function initializeGame(){

	triviaGameVars.questionNumber = 0;
	triviaGameVars.correctAnswersNum = 0;
	triviaGameVars.incorrectAnswersNum = 0;
	gameClock.roundNumber = 0;
	gameClock.timer();
	$("#start-button").remove();
	clearAnswerGif();
	$("#time-left").html("Time Left" + gameClock.timeLeft);
	$("#question-div").empty();
	$("#question-container").removeClass("bg-cheese");
	$("#question-container").addClass("bg-white");

};

//function that creates a new question and loads it into the questions array
function loadQuestionsIntoArray(){

	var question0 = new question(

		"Kraft product Easy Cheese - a spray-can cheese - is described as what on its packaging?", 
		"Process cheese-flavored snack",
		"Pasteurized process cheese food",
		"Prepared cheese product",
		"Pasteurized cheese snack",
		"Pasteurized cheese snack",
		"https://media.giphy.com/media/uDgAIENTgHFq8/giphy.gif"

	);
	triviaGameVars.questionsArray.push(question0);

	var question1 = new question(

		"According to the USDA, a 1oz serving of gruyere typically has how many calories?", 
		"98",
		"164",
		"117",
		"22",
		"117",
		"https://media.giphy.com/media/NJRs1VNx2JpGo/giphy.gif"

	);
	triviaGameVars.questionsArray.push(question1);

	var question2 = new question(

		"The World's Heaviest Cheese was created in 1995. How much did it weigh?", 
		"10, 001 lbs",
		"80,583 lbs",
		"25,211 lbs",
		"57,518 lbs",
		"57,518 lbs",
		"https://media.giphy.com/media/26vUuei4tCrdRmlkk/giphy.gif"

	);
	triviaGameVars.questionsArray.push(question2);

	var question3 = new question(
		"Which figure in Greek mythology is credited with teaching humans how to make cheese?", 
		"Asclepius",
		"Aristaeus",
		"Peleus",
		"Zarex",
		"Aristaeus",
		"https://media.giphy.com/media/3o2eajQrCCMF2/giphy.gif"
	);
	triviaGameVars.questionsArray.push(question3);

	var question4 = new question(
		"What is the minimum number of days a raw milk cheese must be aged if it is to be sold in the US?", 
		"40",
		"50",
		"60",
		"70",
		"60",
		"https://media.giphy.com/media/Xup9iir9E4qHK/giphy.gif"
	);
	triviaGameVars.questionsArray.push(question4);

	var question5 = new question(
		"Wich of these cheeses typically has the highest fat content?", 
		"Cottage Cheese",
		"Blue Stilton",
		"Halloumi",
		"Paneer",
		"Blue Stilton",
		"https://media.giphy.com/media/l1L2UkgpuiE4U/giphy.gif"
	);
	triviaGameVars.questionsArray.push(question5);

	var question6 = new question(
		"Which of these 'cheesy' snack foods is actually vegan?", 
		"Cheese Nips Chips",
		"Cheez-It Reduced Fat White Cheddar Crackers",
		"Flamin' Hot Cheetos",
		"Spicy Sweet Chili Doritos",
		"Spicy Sweet Chili Doritos",
		"https://media.giphy.com/media/34Gfxe9lTU22I/giphy.gif"
	);
	triviaGameVars.questionsArray.push(question6);

	var question7 = new question(
		"Pule cheese, one of the most expensive in the world, is made from the milk of what animal?", 
		"Camel",
		"Horse",
		"Donkey",
		"Goat",
		"Donkey",
		"https://media.giphy.com/media/11hrE6lugPM9Ww/giphy.gif"
	);
	triviaGameVars.questionsArray.push(question7);

	var question8 = new question(
		"What is pule's country of origin?", 
		"Serbia",
		"Turkmenistan",
		"Portugal",
		"Cyprus",
		"Serbia",
		"https://media.giphy.com/media/3oEjHKh8Nnmr9KDCJW/giphy.gif"
	);
	triviaGameVars.questionsArray.push(question8);

	var question9 = new question(
		"According to a 2014 report by the International Dairy Federation, which country consumes the most cheese per capita?", 
		"France",
		"Italy",
		"Greece",
		"Switzerland",
		"France",
		"https://media.giphy.com/media/z7WDgVoPhLo7S/giphy.gif"
	);
	triviaGameVars.questionsArray.push(question9);

};

function prepareForNextQuestion(){

	$("#question-div").html("");
	$("#next-question-button").remove();
	$("#answer-choices-div").html("");
	triviaGameVars.questionNumber++;
	$("#time-left").html("Time Left: " + gameClock.timeLeft);

}

function printQuestion(questionNum) {
	
	$("#answer-choices-div").html("");
	$("#answer-gif-img").attr("src", "");

	//Print question to page
	var newDiv = $("<div></div>").text(triviaGameVars.questionsArray[questionNum].questionText);
	$("#question-div").append(newDiv);

	//Print answer choices to page
	var newDivAnswerA = $("<div class='answer-choice' id='answer-a'></div>").text("A: " + triviaGameVars.questionsArray[questionNum].answerA);
	$("#answer-choices-div").append(newDivAnswerA);
	var newDivAnswerB = $("<div class='answer-choice' id='answer-b'></div>").text("B: " + triviaGameVars.questionsArray[questionNum].answerB);
	$("#answer-choices-div").append(newDivAnswerB);
	var newDivAnswerC = $("<div class='answer-choice' id='answer-c'></div>").text("C: " + triviaGameVars.questionsArray[questionNum].answerC);
	$("#answer-choices-div").append(newDivAnswerC);
	var newDivAnswerD = $("<div class='answer-choice' id='answer-d'></div>").text("D: " + triviaGameVars.questionsArray[questionNum].answerD);
	$("#answer-choices-div").append(newDivAnswerD);

};

//Declare a question object type comprising everything specific to a question that will appear onscreen
function question(question, a, b, c, d, answer, gif) {
    
    //question text, string
    this.questionText = question;
    
    //answer choices, string
    this.answerA = a;
    this.answerB = b;
    this.answerC = c;
    this.answerD = d;

    //correct answer, string
    this.correctAnswer = answer;

    //path to gif associated with correct answer
    this.gifAddress = gif;
};
