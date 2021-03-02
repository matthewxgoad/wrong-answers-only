
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
var clearHighScores = $('.highScoreBtn');



/* QUESTIONS ARRAY */
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

// This function activated when user click START GAME button.
function startGame() {
    // Hides the START BUTTON and show's the previously hidden q&a elements
    startBtn.hide();
    title.show();
    answerBtn.show();
    showQuestion();
    // Sets timer to 80 seconds and starts timerCountdown function
    currentTime = 80;
    timerCountdown();
    timerIntervalId = setInterval( timerCountdown , 1000);
    
}

// Calls each question from the array and populates it on screen. 
function showQuestion() {
    title.text(questions[currentQuestionIndex].title)
    answerBtn.each(function(index, answer){
        answer.textContent = questions[currentQuestionIndex].choices[index]
    })
}

function checkAnswer(event) {
    // Comapres the user selection to the Solution from the object array. 
    if(event.target.textContent.localeCompare(questions[currentQuestionIndex].solution) != 0 ){
        currentTime = currentTime - 10;
    }
    // Advances to the next question. 
    currentQuestionIndex++;
    // if there are more questions…
    if( currentQuestionIndex < 5 ) {
        showQuestion();
    // Otherwise ends the game
    }else{
        endGame();
    }    
}

function endGame() {
    // Stop the countdown. 
    clearInterval(timerIntervalId);
    // Ask for user initials
    var userInitials = prompt("Enter initials:");
    // Creates object variable with user initials and final score.
    let highScoreData = {
        userName: userInitials,
        userScore: currentTime
    }
    // Stores new variable object to local storage.
    localStorage.setItem(localStorage.length.toString(), JSON.stringify(highScoreData));
    // Redirects to scoreboard page
    location.href = "scoreboard.html";
}

function showHighScores() {
    // Retreive user initials and scores from localStorage
    for( var i = 0; i < localStorage.length; i++) {
        const localData = localStorage.getItem(i.toString());
        const output = JSON.parse(localData);
        var highScoreEntry = (output.userName  + "    " + output.userScore );
        // Create div element
        const newDiv = document.createElement("div");
        // with designated class name for styling
        newDiv.className = 'highScoreStyle';
        // Create text node and populate with user score and initials
        const newContent = document.createTextNode(highScoreEntry);
        newDiv.appendChild(newContent);
        const currentDiv = document.getElementById("highscoresList");
        currentDiv.appendChild(newDiv);
    }
}

// Clear localStorage, resetting scoreboard
function clearLocalStorage() {
    localStorage.clear();
    location.reload();
}


/* EVENTS */
startBtn.click(startGame);
answerBtn.click(checkAnswer);
document.body.onload = showHighScores();
clearHighScores.click(clearLocalStorage);