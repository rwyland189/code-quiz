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
    // Log to track the target element of the click
    console.log(event);
    console.log(event.target);

    // If correct answer is selected alert user and award 10 points to high score
    if (event.target.textContent === questionList[questionIndex].answer) {
        alert("Correct!");
        score = score + 10;
        // Save to localStorage
        //saveScore();
    }
    // If incorrect answer is selected alert user and deduct 10 seconds from countdown timer
    else {
        alert("Wrong :(");
        time = time - 10;
    }

    // Remove previous question content
    gameContainer.innerHTML = null;

    // Display next question in questionList
    showQuestion(questionList[questionIndex++]);
}

// Create a function to save the data
function saveScore() {
   localStorage.setItem("score", score);
}

// Create a function to end the quiz
function endQuiz() {
    // If all questions have been displayed and answered, next question value is undefined
    if (questionList[questionIndex].question === undefined || time === 0) {
        // Hide the quiz
        gameContainer.classList.add("hide");
        // Generate the final score page
        document.getElementById("finalScorePage").classList.remove("hide");
    }
}

/* Create a function to get items from local storage and convert to high score
function loadHighScore() {
    // localStorage.getItem("");

    // parseInt this value

    // multiply that value by 10 to get total high score
    score = value * 10;
} */

/* Display final score page
function finalScore() {
    
} */

// Add event listener to start button
startBtn.addEventListener("click", runQuiz);

// Add event listener to when a choice is clicked
gameContainer.addEventListener("click", choiceSelected);

// End quiz function call
endQuiz();

