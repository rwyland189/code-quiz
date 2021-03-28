// Get references to the #start button
var startBtn = document.querySelector("#start");

// Get reference to the timer
var countdownEl = document.getElementById("#countdown-timer");

// Create a 1-minute countdown timer by the second
var startingMinute = 1;
var time = startingMinute * 60;

// Call updateCountdownTimer every second
setInterval(updateCountdownTimer, 1000);

// Create function that will countdown the timer
function updateCountdownTimer() {
    // Calculate time in minutes and seconds
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    // Display value of minutes and seconds
    countdownEl.innerHTML = {minutes}:{seconds};

    // Decrease time by decrementing by 1
    time--;
}

// Perform quiz
function runQuiz() {
    // display first of multiple questions within in array of objects
    // on startBtn click, this questionList needs to display
    var questionList = [
        {
            question: "What two colors mixed together create purple?",
            choices: ["turquoise + burnt orange", "red + blue", "light purple + dark purple", "all of the above"],
            answer: "red + blue"
        },
        {
            question: "Halloween occurs in which season?",
            choices: ["Spring", "Summer", "Fall", "Winter"],
            answer: "Fall"
        },
        {
            question: "3 iguanas walk into a spa. One iguana decides to leave. How many iguanas are left?",
            choices: ["2", "3", "1", "4"],
            answer: "2"
        },
        {
            question: "Which of the below is NOT a gaming console?",
            choices: ["Xbox", "PlayStation", "Nintendo Switch", "Dishwasher"],
            answer: "Dishwasher"
        },
        {
            question: "Does pineapple go on pizza?",
            choices: ["100%", "This answer is wrong", "This answer is false", "This answer is incorrect"],
            answer: "100%"
        }
    ];

}

// Add event listener to start button (can you have multiple functions go when the click event happens?)
startBtn.addEventListener("click", runQuiz, updateCountdownTimer);



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
