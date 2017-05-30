//Object declared with variables and functions to keep track of time/rounds in the trivia game
var gameClock = {

	//set how much time the player gets
	timeLeft:  30,
	roundNumber: 0,

	countdown: function() {

    	if (gameClock.timeLeft > 0){
    		
    		gameClock.timeLeft--;
    		$("#time-left").html(gameClock.timeLeft);
    	
    	}

  	},

  	timer: function(){
  		
  		intervalId = setInterval(gameClock.countdown, 1000);

  	},

};

var triviaGameVars = {

	questionsArray: [],
	intervalId: null,
	questionNumber: 0,
};

//function that creates a new question and loads it into the questions array
function loadQuestionsIntoArray(){
	var question0 = new question("question0", "a0", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question0);

	var question1 = new question("question1", "a1", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question1);

	var question2 = new question("question2", "a2", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question2);

	var question3 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question3);

	var question4 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question4);

	var question5 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question5);

	var question6 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question6);

	var question7 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question7);

	var question8 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question8);

	var question9 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question9);

};

function printQuestion(questionNum){
	
	//Print question to page
	var newDiv = $("<div></div>").text(triviaGameVars.questionsArray[questionNum].questionText);
	$("#question-div").append(newDiv);

	//Print answer choices to page
	var newDivAnswerA = $("<div class='answer-choice' id='answer-A'></div>").text("A: " + triviaGameVars.questionsArray[questionNum].answerA);
	$("#answer-choices-div").append(newDivAnswerA);
	var newDivAnswerB = $("<div class='answer-choice' id='answer-B'></div>").text("B: " + triviaGameVars.questionsArray[questionNum].answerB);
	$("#answer-choices-div").append(newDivAnswerB);
	var newDivAnswerC = $("<div class='answer-choice' id='answer-C'></div>").text("C: " + triviaGameVars.questionsArray[questionNum].answerC);
	$("#answer-choices-div").append(newDivAnswerC);
	var newDivAnswerD = $("<div class='answer-choice' id='answer-D'></div>").text("D: " + triviaGameVars.questionsArray[questionNum].answerD);
	$("#answer-choices-div").append(newDivAnswerD);

};

//Declare a question object type comprising everything specific to a question that will appear onscreen
function question(question, a, b, c, d, answer, gif) {
    this.questionText = question;
    this.answerA = a;
    this.answerB = b;
    this.answerC = c;
    this.answerD = d;
    this.correctAnswer = answer;
    this.gifAddress = gif;
};
