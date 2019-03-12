$(document).ready(function() {
	//starting the game by clicking the Start button
	$('body').on('click', '#start', function(event) {
		event.preventDefault();
		generateQuestion();
		startTimer();
		$('#start').hide();
	});

	//clicking on the answers (inside class .answer)
	$('body').on('click', '.answer', function(event) {
		var choice = $(this).text();
		//if clicked choice matches the answer
		if (choice === correctAnswers[questionCounter]) {
			clearInterval(timer);
			generateScore();
		} else {
			//if they dont match
			clearInterval(timer);
			generateLoss();
		}
	});

	$('body').on('click', '.reset-button', function(event) {
		resetGame();
	});
});

//variables
var timer;
var timeRemaining = 10;
var questionCounter = 0;
var mcqHTML;
var rightAnswers = 0;
var wrongAnswers = 0;

//array holding the questions
var questionArray = [
	'How many states are there in the USA?',
	'How many original colonies were there?',
	'What is the capital of the state of Washington?',
	'What is the name of the national anthem?',
	'When did the US declare its independence from the Great Britain?',
	'Who lived in America before the Europeans arrived?',
	'What is one of the U.S. territories?',
	'In what month do we vote for President?',
	'What is the economic system in the United States?',
	'Who is in charge of the executive branch?'
];

//array holding the answers
var answerArray = [
	[ '48', '49', '50', '51' ],
	[ '11', '14', '12', '13' ],
	[ 'Seattle', 'New York', 'Washington DC', 'Raleigh' ],
	[ 'God Save the Queen', 'The Star Spangled Banner', 'La Marseillaise', 'Anthem Without a Title' ],
	[ '1756', '1768', '1776', '1786' ],
	[ 'American Indians', 'French', 'Russians', 'Danes' ],
	[ 'Alaska', 'Texas', 'Guam', 'North Carolina' ],
	[ 'January', 'March', 'December', 'November' ],
	[ 'Socialist', 'Capitalist', 'Mixed', 'No economic system' ],
	[ 'The President', 'The Army Chief', 'The Speaker of the House', 'Supreme Court Justice' ]
];

//array holding the correct answers
var correctAnswers = [
	'C. 50',
	'D. 13',
	'A. Seattle',
	'B. The Star Spangled Banner',
	'C. 1776',
	'A. American Indians',
	'C. Guam',
	'D. November',
	'B. Capitalist',
	'A. The President'
];

//setting up the question and its corresponding answers and displaying it
function generateQuestion() {
	mcqHTML =
		"<p class = 'text-center question'>" +
		questionArray[questionCounter] +
		"</p><p class ='first-answer answer'>A. " +
		answerArray[questionCounter][0] +
		"</p><p class ='answer'>B. " +
		answerArray[questionCounter][1] +
		"</p><p class ='answer'>C. " +
		answerArray[questionCounter][2] +
		"</p><p class ='answer'>D. " +
		answerArray[questionCounter][3] +
		'</p>';

	$('#questions').html(mcqHTML);
}

//setting the countdown timer
function startTimer() {
	// timeRemaining = 10;
	timer = setInterval(function() {
		if (timeRemaining > 0) {
			timeRemaining--;
			$('#timer').text(timeRemaining);
		}
		if (timeRemaining === 0) {
			clearInterval(timer);
			timesOut();
		}
	}, 1000);
}

//scoring for answering correctly
function generateScore() {
	rightAnswers++;
	mcqHTML =
		"<p class = 'text-center display-4 bg-success'>Correct answer! Your score is: " +
		rightAnswers +
		' / ' +
		questionArray.length +
		" </p><p class = 'text-center text-light display-4'>The correct answer is: " +
		this.correctAnswers[questionCounter] +
		"</p>";

	$('#questions').html(mcqHTML);
	setTimeout(moveQuestion, 2000);
}

//function for wrong answer
function generateLoss() {
	wrongAnswers++;
	mcqHTML =
		"<p class = 'text-center display-4 bg-danger'>Wrong answer! Your score is: " + rightAnswers + '/' + questionArray.length +
		" </p><p class = 'text-center text-light display-4'>The correct answer is: " +
		this.correctAnswers[questionCounter] + "</p>";

	$('#questions').html(mcqHTML);
	setTimeout(moveQuestion, 2000);
}

//function for when the time runs out
function timesOut() {
	wrongAnswers++;
	mcqHTML =
		"<p class = 'text-center display-4 bg-danger'>You ran out of time. Your score is: " +
		rightAnswers + '/' + questionArray.length +
		" </p><p class = 'text-center text-light display-4'>The correct answer is: " +
		this.correctAnswers[questionCounter] +
		"</p>";

	$('#questions').html(mcqHTML);
	setTimeout(moveQuestion, 2000);
}

//transitions from one question to the other
function moveQuestion() {
	if (questionCounter < questionArray.length - 1){
   		questionCounter++;
	    generateQuestion();
		timeRemaining = 10;
		startTimer();
	} else {
		//after the last question is displayed
		endOfQuiz();
	}
}

//display this when there are no more question to display
function endOfQuiz() {
	mcqHTML =
		"<p class = 'text-center text-light display-4'>The quiz is over. Your final score is: " +
		rightAnswers +
		'/' +
		questionArray.length +
		"</p><p class = 'text-center text-secondary display-4'>To play again, click the Reset button below.</p><p class = 'text-center reset-button-container'><a class = 'btn btn-primary btn-lg reset-button display-4' href='#', role='button'>Reset Quiz!</a></p>";

	$('#questions').html(mcqHTML);
}

//resetting the quiz
function resetGame() {
	questionCounter = 0;
	rightAnswers = 0;
	wrongAnswers = 0;
	timeRemaining = 10;
	generateQuestion();
	startTimer();
}
