// Get references to the #start element
var startBtn = document.querySelector("#start");

// Perform quiz
function runQuiz() {
    // display first of multiple questions within in array of objects
    // on startBtn click, this questionList needs to display
    var questionList = [
        {
            question: "question1",
            choices: ["choice1.1", "choice1.2", "choice1.3", "choice1.4"],
            answer: "answer1"
        },
        {
            question: "question2",
            choices: ["choice2.1", "choice2.2", "choice2.3", "choice2.4"],
            answer: "answer2"
        },
        {
            question: "question3",
            choices: ["choice3.1", "choice3.2", "choice3.3", "choice3.4"],
            answer: "answer3"
        },
        {
            question: "question4",
            choices: ["choice4.1", "choice4.2", "choice4.3", "choice4.4"],
            answer: "answer4"
        },
        {
            question: "question5",
            choices: ["choice5.1", "choice5.2", "choice5.3", "choice5.4"],
            answer: "answer5"
        }
    ];

}

// Add event listener to start button
startBtn.addEventListener("click", runQuiz);



//after the start button is clicked on...
    // then the first question of multiple will display on the screen (create a form/div to the DOM)
        // the questions are stored in an array of objects
            // we will need to iterate over this array of objects
    // a countdown timer will begin (add element to the DOM)
    // the instructions will be removed (remove from DOM)
    
// when a choice is selected for the first question
    // then an alert will tell the user whether they are right or wrong
        // if they are wrong, time will be deducted from the clock
    // localStorage will save their answer/input
    // then the question will disappear (remove from DOM)
    // and the next question in the array of objects will appear (?)

// when the second question displays on the DOM, then the code for the first question will be repeated, and so on with every question

// the quiz is over when either all questions have been answered or the time runs out
    // if time runs out, then an alert will say "time's up!"

// when the quiz is over...
    // create an input text area on the DOM so the user can enter their initials
    // create a submit button that the user can click to save their initials
        // on the click of that button localStorage will save the input value to the high scores

// when the high score page appears...
    // two buttons, Go Back and Clear High Scores, will be available
        // Go Back will restart the quiz (mock up?)
        // Clear High Scores will delete all the high scores
