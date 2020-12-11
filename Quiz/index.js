const quizData = [
  {
    question: "What is the national animal of India",
    a: "Lion",
    b: "Tiger",
    c: "Peacock",
    d: "Cheetah",
    correct: "b",
  },
  {
    question: "Who is the Prime Minister of India",
    a: "Surath Kumar Jhakal",
    b: "Aditya Shetty",
    c: "Narendra Modi",
    d: "Rutwik Nerker",
    correct: "c",
  },
  {
    question: "What is the most used programming language",
    a: "Java",
    b: "Python",
    c: "C",
    d: "Java Script",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "HyperText markup language",
    b: "HypeTell machine language",
    c: "HyperTell markup language",
    d: "HyperText machine language",
    correct: "a",
  },
  {
    question: "What year was Javascript launched?",
    a: "1994",
    b: "1996",
    c: "1998",
    d: "none of the above",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
