// Store questions in an array of objects, on startBtn click, this questionList will display
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

// Get references to the #start button
var startBtn = document.querySelector("#start");

// Get reference to the timer
var countdownEl = document.getElementById("countdown-timer");

// Get reference to the container the questions will be displayed in
var gameContainer = document.getElementById("gameContainer")

var questionIndex = 0;

// Variable to track high score/how many questions the user answered correctly
var score = 0;

// Create a 1-minute countdown timer by the second
var startingMinute = 1;
var time = startingMinute * 60;

// Create function that will countdown the timer
function updateCountdownTimer() {
    // Calculate time in minutes and seconds
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    // Add a 0 to the timer when there is less than 10 seconds left
    if (seconds < 10) seconds = "0" + seconds;

    // Display value of minutes and seconds
    countdownEl.innerHTML = `${minutes}:${seconds}`;

    // Stop timer when seconds = 0
    if (seconds <= 0 && minutes <= 0) {
        return;
    }

    // Decrease time by decrementing by 1
    time--;     
}

// Perform quiz
function runQuiz() {
    // Call updateCountdownTimer every second
    setInterval(updateCountdownTimer, 1000);

    // Remove instructions & start button and display first question
    document.getElementById("instructions").classList.add("hide")
    gameContainer.classList.remove("hide")

    // Call function to show quiz questions
    showQuestion();
}

// Create elements to display the question and choice options
function showQuestion() {
    // Create h3 element to display question
    var questionEl = document.createElement("h3");
    // Give question element a class
    questionEl.className = "question";
    // Upload the questionList question content
    questionEl.innerHTML = questionList[questionIndex].question;
    // Add question to the gameContainer
    gameContainer.appendChild(questionEl);

    // Create buttons to display answer choices
    for (var i = 0; i < questionList[questionIndex].choices.length; i++) {
        var choicesEl = document.createElement("button");
        choicesEl.className = "choices";
        choicesEl.innerHTML = questionList[questionIndex].choices[i];
        gameContainer.appendChild(choicesEl);
    }
}

// Function that runs based off clicking one of choice options
function choiceSelected(event) {
    // logging to track the target element of the click
    console.log(event);
    console.log(event.target);

    // If correct answer is selected alert user and award 10 points to high score
    if (choiceSelected.textContent === questionList[questionIndex].answer.textContent) {
        alert("Correct!");
        score = score + 10;
    }
    // If incorrect answer is selected alert user and deduct 10 seconds from countdown timer
    else {
        alert("Wrong :(");
        time = time - 10;
    }

    // remove previous question???

    // Display next question in questionList
    showQuestion(questionList[questionIndex++]);
}

/* Create a function to save the data
function savedResponses() {

}*/

/* Create high score page
    if all questions have been answered, */

// Add event listener to start button
startBtn.addEventListener("click", runQuiz);

// Add event listener to when a choice is clicked
gameContainer.addEventListener("click", choiceSelected);




        //after the start button is clicked on...
        // then the first question of multiple will display on the screen (create a form/div to the DOM) - done
        // the questions are stored in an array of objects - done
        // we will need to iterate over this array of objects - done
        // a countdown timer will begin (add element to the DOM) - done
        // the instructions will be removed (remove from DOM) - done

// when a choice is selected for the first question...
        // then an alert will tell the user whether they are right or wrong - done
        // if they are wrong, time will be deducted from the clock - done
// localStorage will save their answer/input - NOT DONE!
// then the question will disappear (remove from DOM) - NOT DONE!
        // and the next question in the array of objects will appear - done

        // when the second question displays on the DOM, then the code for the first question will be repeated, and so on with every question - done

// the quiz is over when either all questions have been answered or the time runs out - NOT DONE!
// if time runs out, then an alert will say "time's up!" - NOT DONE!

// when the quiz is over...
// create an input text area on the DOM so the user can enter their initials
// create a submit button that the user can click to save their initials
// on the click of that button localStorage will save the input value to the high scores

// when the high score page appears...
// two buttons, Go Back and Clear High Scores, will be available
// Go Back will restart the quiz (mock up?)
// Clear High Scores will delete all the high scores

