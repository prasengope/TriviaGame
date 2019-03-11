//setting the countdown timer
var timerSetting;
function startTimer() {
    var timeleft = 10;
    var endTime = "0";
    timerSetting = setInterval(function () {
        timeleft--;
        $("#timer").text(timeleft);
        if (timeleft === 0) {
            clearInterval(timerSetting);
            $('#start').text("Start again?");
        }
    }, 1000);
};

//variables
var questionCounter = 0;
var mcqHTML;
var score = 0;
// var

//array holding the questions
var questionArray = [
    "What is your name?",
    "Before Mt. Everest was discovered, which mountain was considered to be the highest mountain in the world?"
];

//array holding the answers
var answerArray = [
    ["Obama", "Trump", "Nixon", "Nobody"],
    ["Mt. Kilimanjaro", "Mt. Aconcagua", "Mt. Everest", "Mt. Nothing"]
];

//array holding the correct answers
var correctAnswers = ["D. Nobody", "B. Mt. Aconcagua"];

//starting the game by clicking the Start button
$("#start").on("click", function () {
    generateQuestion();
    startTimer();
});

//clicking on the answers (inside class .answer)
$("body").on("click", ".answer", function (event) {
    var choice = $(this).text();
    //if clicked choice matches the answer
    if (choice === correctAnswers[questionCounter]) {
        clearInterval(timerSetting);
        //alert("Correct!");
        generateScore();
    }
    else { //if they dont match
        alert("Wrong!");
        clearInterval(timerSetting);
        generateLoss();   
    }
});

//setting up the question and its corresponding answers and displaying it
function generateQuestion() {
    for (var i = 0; i < questionArray.length; i++) {
        mcqHTML =
            "<p class = 'text-center'>" + questionArray[questionCounter] + "</p> <p class ='first-answer answer'>A. "
            + answerArray[questionCounter][0] + "</p><p class ='answer'>B. "
            + answerArray[questionCounter][1] + "</p><p class ='answer'>C. "
            + answerArray[questionCounter][2] + "</p><p class ='answer'>D. "
            + answerArray[questionCounter][3] + "</p>";

        $("#questions").html(mcqHTML);
    }
}

function generateScore(){
    score++;
    mcqHTML =
            "<p class = 'text-center'>Correct answer! Your score is: " + score + " </p><p class = 'text-center text-light bg-dark'>The correct answer is: " + this.correctAnswers[questionCounter] + " </p>";

    $("#questions").html(mcqHTML);
    setTimeout(wait, 3000);
    
}

function generateLoss(){
    mcqHTML =
            "<p class = 'text-center'>Wrong answer!</p><p class = 'text-center text-light bg-dark'>The correct answer is: " + this.correctAnswers[questionCounter] + " </p>";

    $("#questions").html(mcqHTML);
    setTimeout(wait, 3000);

}