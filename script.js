// Grabbing all elements from html file
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var quizDone = document.getElementById("quizDone");

//JS Questions
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "C",
  },

  {
    question: "Arrays in JavaScript can be used to store ____.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all the above",
    correct: "D",
  },

  {
    question: "The condition in an if/ else statement is enclosed within ____",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correct: "B",
  },

  {
    question:
      "String values must be enclosed within ____ when being assigned variables",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parentheses",
    correct: "C",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "Javascript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correct: "C",
  },
];

//Variables
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 75;
var quizTime = 75; //15 seconds
var gaugeWidth = 750;
var gaugeUnit = quizTime / gaugeWidth;
var scorePoints = 0;

//Starts Quiz Button
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000);
}

//Indicates the end of the Quiz
function quizOver() {
  quiz.style.display = "none";
  quizDone.style.display = "block";
}

//Turns Start Quiz into a clickable button to begin the quiz and start the timer
start.addEventListener("click", startQuiz);

//Allows progression through the quiz after answering a question
function renderQuestion() {
  var q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

//Changes timer throughout quiz based on Answers
function renderProgress() {
  for (qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class= 'prog' id=" + qIndex + "></div>";
  }
}

//Counter for timer
function renderCounter() {
  if (count <= quizTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count - gaugeUnit - "1px";
    count--;
  }

  if (count <= -1) {
    clearInterval(TIMER);
    quizOver();
    renderScore();
  }
}

//Checks the answer within each question
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    answerIsCorrect();
  } else {
    answerIsWrong();
    //Subtracts 15 seconds
    count = count - 15;
  }
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // End of Quiz
    quizOver();
    renderScore();
  }
}

//Continuing onto the next question for correct and incorrect answers
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "green";
}

function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "red";
}
