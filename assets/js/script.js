// Get references to the #start element
var startBtn = document.querySelector("#start");

// Perform quiz
function runQuiz() {
    // display first of multiple questions within in array of objects
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