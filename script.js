const questions = [
  {
    question: "Which menu is used to select a predefined chart style?",
    answers: [
      {
        text: " Animation",
        correct: false,
      },
      {
        text: " Design",
        correct: true,
      },
      {
        text: "Slide show",
        correct: false,
      },
      {
        text: "Transitions",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which template makes specify common design elements in all slides in the presentation?",
    answers: [
      {
        text: "Fax template",
        correct: false,
      },
      {
        text: "User template",
        correct: false,
      },
      {
        text: "Data template",
        correct: false,
      },
      {
        text: "Master template",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which dialog box in Power Point allows to change slides automatically in a period of time?",
    answers: [
      {
        text: "Action setting",
        correct: false,
      },
      {
        text: "Slide transition",
        correct: true,
      },
      {
        text: "Slide animation",
        correct: false,
      },
      {
        text: "Custom animation",
        correct: false,
      },
    ],
  },
  {
    question: "Which function key is used to run a powerpoint presentation?",
    answers: [
      {
        text: " F3",
        correct: false,
      },
      {
        text: "F5",
        correct: true,
      },
      {
        text: "F7",
        correct: false,
      },
      {
        text: "F9",
        correct: false,
      },
    ],
  },
  {
    question:
      " Which shortcut key is used to invoke thesaurus dialog box in Power Point?",
    answers: [
      {
        text: "Shift+F7",
        correct: false,
      },
      {
        text: "Ctrl+F7",
        correct: true,
      },
      {
        text: "Alt+F7",
        correct: false,
      },
      {
        text: "Ctrl+Alt+F7",
        correct: false,
      },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  // const isCorrect = ;
  // console.log(selectedBtn.dataset.correct);
  if (selectedBtn.dataset.correct === "true") {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score}out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
