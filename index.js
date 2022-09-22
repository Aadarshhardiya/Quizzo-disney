var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("what is your name? ");

console.log("Welcome to this game " + userName);
console.log("            ");

//play function 

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Great! You are right!");
    score = score + 1;

  } else {
    console.log("Oops! You are wrong");

  }

  console.log("current score: ", score);
  console.log("----------");
}

// array of objects
var questions = [{
  question: "What year did Disneyland open? ",
  answer: "1955"
}, {
  question: "What does Hakuna matata mean? ",
  answer: "no worries"
}, {
  question: "how many fingers does mickey mouse have(type in numbers)? ",
  answer: "4"
}, {
  question: "Who is mufasa's trusted advisor in The Lion King? ",
  answer: "zazu"
}, {
  question: "Which Disney character sings -How Far I Will Go? ",
  answer: "moana"
}];

//loop

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

if (score > 4) {
  console.log("Congrats!! you won!! 🥳")
}
else {
  console.log("you failed!! ☹️")
}
console.log("your final score is ", score)