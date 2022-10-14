//variables for timer
var currentQuestionIndex = 0;
var timerLength = questions.length * 20;
var timerId;

//variables for DOM els
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start-button');
var questionsEl = document.getElementById('questions');
var answersEl = document.getElementById('answers');


//functions