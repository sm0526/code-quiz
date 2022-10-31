//need funtions to generate quiz, show the questions/answers, show the results
//need to set up a timer that starts when quiz starts. need to deduct time when question incorrect.
//variables for timer
var currentQuestionIndex = 0;
var timerLength = questions.length * 20;
var timerId;

//variables for DOM els
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start-button');
var submitBtn = document.getElementById('submit')
var questionsEl = document.getElementById('questions');
var answersEl = document.getElementById('answers');
var initialsEl = document.getElementById('initials');

//questions&answers
var questions = [
    {
        question: "What is the purpose of CSS?",
        answers: [
            "To give style to application",
            "It creates a navigation bar",
            "There is no purpose",
            "It makes Javascript possible"
        ],
        correctAnswer: 'To give style to application'
    },
    {
        question: "How do you style an individual element when there are multiple same elements?",
        answers: [
            "Just use the element tag in CSS or JS",
            "Must use CSS",
            "Give the element a class or id",
            "There is no way"
        ],
        correctAnswer: 'Give the element a class or id'
    },
    {
        question: "What is an example of a string in Javascript?",
        answers: [
            "true",
            "\'true\'",
            "4",
            "false",
        ],
        correctAnswer: '\'true\''
    },
    {
        question: "What part of an HTML file contains the metadata?",
        answers: [
            "The body",
            "The header",
            "The head",
            "The footer"
        ],
        correctAnswer: 'The head'
    },
    {
        question: "How would the id=\'smile\' be displayed in CSS?",
        answers: [
            "id=\'smile\'",
            "smile",
            ".smile",
            "#smile"
        ],
        correctAnswer: '#smile'
    },
    {
        question: "Which way is the correct way to do comments in HTML?",
        answers: [
            "//",
            "/* */",
            "<!-- -->",
            "comment:"
        ],
        correctAnswer: '<!-- -->'
    },
    {
        question: "Which are the three data types in Javascript?",
        answers: [
            "bolean, string, and number",
            "==, &&, and ||",
            "id, class, and element",
            "mode, mean, and median"
        ],
        correctAnswer: 'bolean, string, and number'
    },
]
//timer, need to figure out how to deduct time for wrong answers
var count = 15;
var timer = setInterval(function () {
    console.log(count);
    count--;
    if (count === 0) {
        stopInterval()
    }
}, 1000);

var stopInterval = function () {
    alert('time is up!');
    clearInterval(timer);
}

function clockTick() {
    timer--;
    timerEl.textContent = timer;
    if (timer <= 0) {
        quizEnd();
    }
}
//trying to figure out how to make the quiz using the questions used
function buildQuiz() {
    //hides the opening screen
    var startScreenEl = document.getElementById('startscreen');
    startScreenEl.setAttribute('class', 'hide');
    //reveal the questions container
    questionsEl.removeAttribute('class');
    //start timer and show the starting time
    timerId = setInterval(clockTick, 1050);
    timerEl.textContent = timer;
    //call function for questions
    displayQuestion();
}

function displayQuestion() {
    //get a question from the array
    var currentQuestion = questions[currentQuestionIndex];
    //update question to display new question
    var questionEl = document.getElementById('question');
    questionEl.textContent = currentQuestion.question;
    //remove previous answer choices
    answersEl.innerHTML = '';
    //loop for answers
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        var answer = currentQuestion.answers[i];
        var answerNode = document.createElement('button');
        answerNode.setAttribute('class', 'answers');
        answerNode.setAttribute('value', answer);
        answerNode.textContent = i + 1 + '. ' + answer;
        answersEl.appendChild(answerNode);
    }
}

//to show the answers
function showOptions(event) {
    var buttonEl = event.target;
    if (!buttonEl.matches('.answer')) {
        return;
    }
    if (buttonEl.value !== questions[currentQuestionIndex].correctAnswer) {
        timer -= 10;
        if (timer < 0) {
            timer = 0;
        }
        timerEl.textContent = timer;
        feedbackEl.textContent = 'Incorrect!';
    } else {
        feedbackEl.textContent = 'You are Correct!';
    }
    feedbackEl.setAttribute('class', 'feedback');
    timeOut(function () {
        feedbackEl.setAttribute('class', 'feedback hide');
    }, 1050);

    currentQuestionIndex++;

    if (time <= 0 || currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        displayQuestion();
    }
}

//function for ending the quiz
function quizEnd() {
    clearInterval(timerId);
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = timer;
    questionsEl.setAttribute('class', 'hide');
}

function saveHighscore() {
    var initials = initialsEl.value.trim();
    if (initials !== '') {
        var highscore =
            JSON.parse(window.localStorage.getItem('highscore')) || [];
        var currentScore = {
            score: timer,
            initials: initials,
        };
        highscore.push(currentScore);
        window.localStorage.setItem('highscore', JSON.stringify(highscore));
        window.location.href = 'scores.html';
    }
}

function checkForEnter(event) {
    if (event.key === 'Enter') {
        saveHighscore();
    }
}

startBtn.onclick = buildQuiz;
answersEl.onclick = showOptions;
submitBtn.onclick = saveHighscore;
initialsEl.onkeyup = checkForEnter;
