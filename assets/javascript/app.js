var triviaGameVars = {

	questionsArray: [],
	intervalId: null,
};

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


//Declare a question object type comprising everything specific to a question that will appear onscreen
function question(question, a, b, c, d, answer, gif) {
    this.questionText = a;
    this.answerA = b;
    this.answerB = c;
    this.answerC = d;
    this.answerD = answer;
    this.gifAddress = gif;
};

//function that creates a new question and loads it into the questions array
function loadQuestionsIntoArray(){
	var question0 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question0);

	var question1 = new question("question", "a", "b", "c", "d", "answer", "gif");
	triviaGameVars.questionsArray.push(question1);

	var question2 = new question("question", "a", "b", "c", "d", "answer", "gif");
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

