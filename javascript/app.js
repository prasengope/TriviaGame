//set the timer

// $("#start").on("click", start);
// var timeleft = 10;
// var endTime ="0";

// function start(){
//    var timerSetting = setInterval(function(){
//        timeleft--;
//        $("#timer").text(timeleft);
//        if(timeleft === 0){
//         clearInterval(timerSetting);
//         $('#start').text("Start again?");
//        }
//    }, 1000);
// };
////need help to fix the timer showing negative value after clicking START after one lap
var questionCounter = 0;
var mcqHTML;
var questionArray = [
    "What is your name?",
    "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?"
];

var answerArray = [
    ["Obama", "Trump", "Nixon", "Nobody"], 
    ["Mt. Kilimanjaro", "Mt. Aconcagua", "Mt. Everest", "Mt. Nothing"]
];
    
var correctAnswers = ["A. Nobody", "B. Mt. Aconcagua"];

$("#start").on("click", function(){
    generateQuestion();
});

function generateQuestion(){
    mcqHTML = "<p class = 'text-center'>" + questionArray[questionCounter] + "</p> <p class ='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class ='answer'>B. " + answerArray[questionCounter][1] + "</p><p class ='answer'>C. " + answerArray[questionCounter][2] + "</p><p class ='answer'>D. " + answerArray[questionCounter][3] + "</p>";
    $("#questions").html(mcqHTML);
}

// function generateHTML() {
// 	gameHTML = 
//     "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	
// 	$("#questions").html(gameHTML);
// }