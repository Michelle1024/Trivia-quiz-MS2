// Create a Quiz Class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a Question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// Display Question
function displayQuestion() {
    if (Quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement =document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// Guess Function
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

// Show Quiz Progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getQuestionIndex("progress");
    progressElement.innerHTML =
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// Show Score
function showScores() {
    let quizEndHTML =
        `
            <h1>Quiz Completed</h1>
            <h2 id="score">Your Score : ${quiz.score} of ${quiz.questions.length}</h2>
            <div class="quiz-repeat">
                <a href="index.html">Take Trivia Quiz Again</a>    
            </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
}

// Create Trivia Questions
let questions = [
    new Question(
        "Which country consumes the most chocolate per capita?", ["Ireland", "Switzerland", "Austria", "Sweden"], "Switzerland"
    ),
    new Question(
        "Which of Shakespeare’s plays is the longest?", ["Macbeth", "King Lear", "Hamlet", "Twelfth Night"], "Hamlet"
    ),
    new Question(
        "What color eyes do most humans have?", ["Brown", "Blue", "Green", "Gray"], "Brown"
    ),
    new Question(
        "Which planet is the hottest in the solar system?", ["Mercury", "Venus", "Mars", "Jupiter"], "Venus"
    ),
    new Question(
        "How many eyes does a bee have?", ["Two", "Three", "Four", "Five"], "Five"
    )
];

let quiz = new Quiz(questions);

// Display question
displayQuestion;

//Add a timer
let time = 2;
let quizTimeInMinutes = time * 60 *60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <=0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}

startCountdown();