var questionsArray = [];
function question(question, a, b, c, d, answer, gif) {
    this.questionText = a;
    this.answerA = b;
    this.answerB = c;
    this.answerC = d;
    this.answerD = answer;
    this.gifAddress = gif;
};

function loadQuestionsIntoArray(){
	var question0 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question0);

	var question1 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question1);

	var question2 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question2);

	var question3 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question3);

	var question4 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question4);

	var question5 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question5);

	var question6 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question6);

	var question7 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question7);

	var question8 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question8);

	var question9 = new question("question", "a", "b", "c", "d", "answer", "gif");
	questionsArray.push(question9);
};
