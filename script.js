//  QUIZ GAME!

//         RULES:
//         / The player must guess correctly a certain amount of questions
//         / Each correct answer gives him one point
//         / Answers could be multiple or true/false
//         / At the end of the game, the user must know his/her total score

//         QUESTIONS:
//         / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
//         / Could be multiple of boolean (true / false)
//         / [EXTRA] Show if the answer provided was the wrong one or correct it after clicking
//         / [EXTRA] Present the questions one a time instead of having all displayed together

//         HINTS:
//         / Keep a global variable score for the user score
//         / Keep a variable questionNumber for the question the user is answering
//         / When questionNumber is bigger then the available questions, present the score
//         / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know it!)
//         / Start with the easier version and THEN implement the EXTRAs
//         / Please debug everything / try it on the console to be sure of what to expect from your code

//         EXTRA:
//         / Show if the answer provided was the wrong one or correct it after clicking
//         / Present the questions one a time instead of having all displayed together
//         / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)

let questionBook = [
	{
		category: 'Science: Computers',
		type: 'multiple',
		difficulty: 'easy',
		question: 'What does CPU stand for?',
		answer: 'Central Processing Unit',
		option: [
			'Central Process Unit',
			'Computer Personal Unit',
			'Central Processor Unit',
			'Central Processing Unit',
		],
	},
	{
		category: 'Science: Computers',
		type: 'multiple',
		difficulty: 'easy',
		question:
			'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
		answer: 'Final',

		answer: 'Central Processing Unit',
		option: ['Static', 'Private', 'Public', 'Final'],
	},
	{
		category: 'Science: Computers',
		type: 'boolean',
		difficulty: 'easy',
		question: 'The logo for Snapchat is a Bell.',
		answer: 'False',
		option: ['True', 'False'],
	},
	{
		category: 'Science: Computers',
		type: 'boolean',
		difficulty: 'easy',
		question:
			'Pointers were not used in the original C programming language; they were added later on in C++.',
		answer: 'False',
		option: ['True', 'False'],
	},
	{
		category: 'Science: Computers',
		type: 'multiple',
		difficulty: 'easy',
		question:
			'What is the most preferred image format used for logos in the Wikimedia database?',
		answer: '.svg',
		option: ['.png', '.jpeg', '.gif', '.svg'],
	},
	{
		category: 'Science: Computers',
		type: 'multiple',
		difficulty: 'easy',
		question: 'In web design, what does CSS stand for?',
		answer: 'Cascading Style Sheet',
		option: [
			'Counter Strike: Source',
			'Corrective Style Sheet',
			'Cascading Style Sheet',
			'Computer Style Sheet',
		],
	},
	{
		category: 'Science: Computers',
		type: 'multiple',
		difficulty: 'easy',
		question:
			'What is the code name for the mobile operating system Android 7.0?',
		answer: 'Nougat',
		option: ['Ice Cream Sandwich', 'Nougat', 'Jelly Bean', 'Marshmallow'],
	},
	{
		category: 'Science: Computers',
		type: 'multiple',
		difficulty: 'easy',
		question: 'On Twitter, what is the character limit for a Tweet?',
		answer: '140',
		option: ['120', '140', '160', '100'],
	},
	{
		category: 'Science: Computers',
		type: 'boolean',
		difficulty: 'easy',
		question: 'Linux was first created as an alternative to Windows XP.',
		answer: 'False',
		option: ['False', 'True'],
	},
	{
		category: 'Science: Computers',
		type: 'multiple',
		difficulty: 'easy',
		question:
			'Which programming language shares its name with an island in Indonesia?',
		answer: 'Java',
		option: ['Python', 'C', 'Java', 'Jakarta'],
	},
];

let question = document.getElementById('question');
let quizContainer = document.getElementById('quiz-container');
let scorecard = document.getElementById('scorecard');
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let next = document.querySelector('.next');
let points = document.getElementById('score');
let span = document.querySelectorAll('span');
let i = 0;
let score = 0;

///

//function to display questions
function displayQuestion() {
	for (var a = 0; a < span.length; a++) {
		span[a].style.background = 'none';
	}
	question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBook[i].question;
	option0.innerHTML = questionBook[i].option[0];
	option1.innerHTML = questionBook[i].option[1];
	option2.innerHTML = questionBook[i].option[2];
	option3.innerHTML = questionBook[i].option[3];
	stat.innerHTML =
		'Question' + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBook.length;
}

//function to calculate scores
function calcScore(e) {
	if (e.innerHTML === questionBook[i].answer && score < questionBook.length) {
		score = score + 1;
		document.getElementById(e.id).style.background = 'green';
	} else {
		document.getElementById(e.id).style.background = 'red';
	}
	setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
	if (i < questionBook.length - 1) {
		i = i + 1;
		displayQuestion();
	} else {
		points.innerHTML = score + '/' + questionBook.length;
		quizContainer.style.display = 'none';
		scoreboard.style.display = 'block';
	}
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
	location.reload();
}

//function to check Answers
function checkAnswer() {
	var answerBank = document.getElementById('answerBank');
	var answers = document.getElementById('answers');
	answerBank.style.display = 'block';
	scoreboard.style.display = 'none';
	for (var a = 0; a < questionBook.length; a++) {
		var list = document.createElement('li');
		list.innerHTML = questionBook[a].answer;
		answers.appendChild(list);
	}
}

displayQuestion();
