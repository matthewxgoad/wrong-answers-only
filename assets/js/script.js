/*
Create a Javascript quiz that presents the user 
with one question at a time, randomly, from an array
of five questions.

Countdown timer starts at 30 seconds. User loses
time for each wrong answer. User gains points for
each correct answer.

User is prompted for their initals at the end of
the quiz and their score is added to a scoreboard.
*/

// User opens the page to a 'start quiz' button

// button click starts quiz
// pulls question from array

/* GLOBAL VARIABLES */
var startBtn = $('.startBtn')
var answerBtn = $('.answerBtn');
var title = $('#title');
var answers = $('.answers');
var currentQuestionIndex = 0;
var shuffledQuestions = "";
var timerIntervalId;
var currentTime = 0;
var timeRemaining = $('.upperRight');


// questions:
const questions = [
    {
        title: "What is the best kind of pie?",
        choices: ["javascript", "strawberry rhubarb", "cake"],
        solution: "strawberry rhubarb" 
    },
    {
        title: "Javascript was invented by which famous basketball player?",
        choices: ["Wayne Knight", "Bugs Bunny", "Michael Jordan"],
        solution: "Wayne Knight" 
    },
    {
        title: "The perfect weather for coding Javascript is",
        choices: ["cool and dry", "sunny and warm", "stormy and breezy"],
        solution: "sunny and warm" 
    },
    {
        title: "console.log is ",
        choices: ["a function that writes a message to log", "a confectionery treat", "a computer building material"],
        solution: "a function that writes a message to log" 
    },
    {
        title: "JSON is an acronym that stands for",
        choices: ["Judiciary Sanctioned Ordered Nuptials", "JavaScript Object Notation", "JavaScript, Obviously, Nerd"],
        solution: "JavaScript Object Notation" 
    },
];

/* FUNCTIONS */

function timerCountdown() {
    timeRemaining.text(currentTime-- + ' seconds');
}

function startGame() {
    startBtn.hide();
    title.show();
    answerBtn.show();
    showQuestion();
    currentTime = 80;
    timerCountdown();
    timerIntervalId = setInterval( timerCountdown , 1000);
    
}

function showQuestion() {
    title.text(questions[currentQuestionIndex].title)
    answerBtn.each(function(index, answer){
        answer.textContent = questions[currentQuestionIndex].choices[index]
    })
}

function checkAnswer(event) {
    if(event.target.textContent.localeCompare(questions[currentQuestionIndex].solution) != 0 ){
        currentTime = currentTime - 10;
    }
    currentQuestionIndex++;
    if( currentQuestionIndex < 5 ) {
        showQuestion();
    }else{
        endGame();
    }    
}

function endGame() {
    clearInterval(timerIntervalId);
    var userInitials = prompt("Enter initials:");
    let highScoreData = {
        userName: userInitials,
        userScore: currentTime
    }
    localStorage.setItem(localStorage.length.toString(), JSON.stringify(highScoreData));
    location.href = "scoreboard.html";
}

function showHighScores() {

}
// create function to get high scores from local storage
// function => add scorres to local storage
//clearn localStorage

/* EVENTS */
startBtn.click(startGame);
answerBtn.click(checkAnswer)

/* ENTRY POINT */