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
    		$("#time-left").html(gameClock.timeLeft);
    	
    	}

  	},

  	//run the countdown function once every second to make our timer
  	timer: function(){
  		
  		gameClock.intervalId = setInterval(gameClock.countdown, 1000);

  	},

  	resetClock: function(){

  		clearInterval(gameClock.intervalId);
  		gameClock.timeLeft = 30;

  	}

};

var triviaGameVars = {

	questionsArray: [],
	questionNumber: 0,


};	

function assignSelectedAnswer(answerId) {

	if ( answerId == "answer-a" ) {
		 return triviaGameVars.questionsArray[triviaGameVars.questionNumber].answerA;
	}

	else if ( answerId == "answer-b" ) {
		return triviaGameVars.questionsArray[triviaGameVars.questionNumber].answerB;
	}

	else if ( answerId == "answer-c" ) {
		return triviaGameVars.questionsArray[triviaGameVars.questionNumber].answerC;
	}

	else {
		return triviaGameVars.questionsArray[triviaGameVars.questionNumber].answerD;
	}

};

//function that creates a new question and loads it into the questions array
function loadQuestionsIntoArray(){

	var question0 = new question(

		"question0", 
		"a0",
		"b",
		"c",
		"d0",
		"d0",
		"gif"

	);
	triviaGameVars.questionsArray.push(question0);

	var question1 = new question(

		"question1", 
		"a0",
		"b",
		"c1",
		"d",
		"c1",
		"gif"

	);
	triviaGameVars.questionsArray.push(question1);

	var question2 = new question(

		"question2", 
		"a0",
		"b",
		"c",
		"d2",
		"d2",
		"gif"

	);
	triviaGameVars.questionsArray.push(question2);

	var question3 = new question(
		"question3", 
		"a0",
		"b3",
		"c",
		"d",
		"b3",
		"gif"
	);
	triviaGameVars.questionsArray.push(question3);

	var question4 = new question(
		"question4", 
		"a0",
		"b",
		"c",
		"d",
		"c4",
		"gif"
	);
	triviaGameVars.questionsArray.push(question4);

	var question5 = new question(
		"question5", 
		"a0",
		"b5",
		"c",
		"d",
		"b5",
		"gif"
	);
	triviaGameVars.questionsArray.push(question5);

	var question6 = new question(
		"question6", 
		"a0",
		"b",
		"c",
		"d6",
		"d6",
		"gif"
	);
	triviaGameVars.questionsArray.push(question6);

	var question7 = new question(
		"question7", 
		"a0",
		"b",
		"c7",
		"d",
		"c7",
		"gif"
	);
	triviaGameVars.questionsArray.push(question7);

	var question8 = new question(
		"question8", 
		"a8",
		"b",
		"c",
		"d",
		"a8",
		"gif"
	);
	triviaGameVars.questionsArray.push(question8);

	var question9 = new question(
		"question9", 
		"a9",
		"b",
		"c",
		"d",
		"a9",
		"gif"
	);
	triviaGameVars.questionsArray.push(question9);

};

function printNextQuestionButton(){

	$("#question-container").append("<button id='next-question-button'>Next Question</button>");

};

function printQuestion(questionNum) {
	
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
