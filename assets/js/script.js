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
var answerBtn = $('.answerBtn');
var title = $('#title');
var answers = $('.answers');
var currentQuestionIndex = 0;


// questions:
var questions = [
    {
        title: "What is the best kind of pie?",
        choices: ["peach", "strawberry rhubarb", "cake"],
        solution: "strawberry rhubarb" 
    },
    {
        title: "Javascript was invented by which famous basketball player?",
        choices: ["Wayne Knight", "Bugs Bunny", "Michael Jordan"],
        solution: "Wayne Knight" 
    },
    {
        title: "The perfect weather for coding Javascript is:",
        choices: ["cool and dry", "sunny and warm", "stormy and breezy"],
        solution: "sunny and warm" 
    },
    {
        title: "What is the best kind of pie?",
        choices: ["peach", "strawberry rhubarb", "cake"],
        solution: "strawberry rhubarb" 
    },
    {
        title: "What is the best kind of pie?",
        choices: ["peach", "strawberry rhubarb", "cake"],
        solution: "strawberry rhubarb" 
    },
];

/* FUNCTIONS */
// check is answer is correct
// if yes, increase score
// if no, decrease time

function showQuestion() {
    title.text(questions[currentQuestionIndex].title)
    answerBtn.each(function(index, answer){
        answer.textContent = questions[currentQuestionIndex].choices[index]
    })
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}


/* EVENTS */
answers.click(nextQuestion);

/* ENTRY POINT */
showQuestion();