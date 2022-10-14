//need funtions to generate quiz, show the questions/answers, show the results

//need to set up a timer that starts when quiz starts. need to deduct time when question incorrect.
//variables for timer
var currentQuestionIndex = 0;
var timerLength = questions.length * 20;
var timerId;

//variables for DOM els
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start-button');
var questionsEl = document.getElementById('questions');
var answersEl = document.getElementById('answers');

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
//trying to figure out how to make the quiz using the questions used
function buildQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = []
    })
}
//to show the correct answers
function showResults() {

}