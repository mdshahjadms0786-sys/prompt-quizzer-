// Prompt Quizzer – Simple Console Quiz

var quizQuestions = [
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "Which language is used for styling web pages?", answer: "css" },
  { question: "Which language runs in the browser?", answer: "javascript" },
  { question: "What keyword is used to declare a variable in JavaScript?", answer: "var" },
  { question: "Which method is used to show a message box?", answer: "alert" }
];

function runQuiz() {
  var score = 0;

  for (var i = 0; i < quizQuestions.length; i++) {
    var userAnswer = prompt(quizQuestions[i].question);

    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      score++;
      alert("Correct answer!");
    } else {
      alert("Wrong answer! Correct answer is: " + quizQuestions[i].answer);
    }
  }

  alert("Your final score is " + score + " out of " + quizQuestions.length);
}

runQuiz();
