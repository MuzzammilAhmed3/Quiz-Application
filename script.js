// console.log("Hello Wolrd!");

const quizQuestions = [
  {
    id: 1,
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Programming Language",
      "Hyper Text Styling Language",
      "Hyper Text Scripting Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["link", "a", "href", "hyper"],
    answer: "a",
  },
  {
    id: 3,
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color",
  },
  {
    id: 4,
    question: "Which CSS property controls the size of text?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
  },
  {
    id: 5,
    question: "Which HTML tag is used to display an image?",
    options: ["img", "image", "src", "pic"],
    answer: "img",
  },
  {
    id: 6,
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["var", "int", "string", "float"],
    answer: "var",
  },
  {
    id: 7,
    question: "Which method is used to select an element by ID in JavaScript?",
    options: [
      "getElementByClass()",
      "querySelectorAll()",
      "getElementById()",
      "getElementsByTagName()",
    ],
    answer: "getElementById()",
  },
  {
    id: 8,
    question: "Which CSS property is used for spacing inside an element?",
    options: ["margin", "padding", "border", "spacing"],
    answer: "padding",
  },
  {
    id: 9,
    question: "Which JavaScript function is used to print something in console?",
    options: ["console.print()", "print()", "log.console()", "console.log()"],
    answer: "console.log()",
  },
  {
    id: 10,
    question: "Which HTML tag is used for the largest heading?",
    options: ["h6", "heading", "h1", "head"],
    answer: "h1",
  },
  {
    id: 11,
    question: "Which HTML tag is used to create a line break?",
    options: ["lb", "break", "br", "hr"],
    answer: "br",
  },
  {
    id: 12,
    question: "Which CSS property is used to make text bold?",
    options: ["font-style", "font-weight", "text-bold", "font-bold"],
    answer: "font-weight",
  },
  {
    id: 13,
    question: "Which JavaScript operator is used for strict equality?",
    options: ["=", "==", "===", "!="],
    answer: "===",
  },
  {
    id: 14,
    question: "Which HTML tag is used to create an unordered list?",
    options: ["ol", "li", "ul", "list"],
    answer: "ul",
  },
  {
    id: 15,
    question: "Which CSS property is used to change the background color?",
    options: ["bgcolor", "background-color", "color", "background"],
    answer: "background-color",
  },
  {
    id: 16,
    question: "Which JavaScript method is used to display an alert box?",
    options: ["msg()", "alert()", "prompt()", "console.log()"],
    answer: "alert()",
  },
  {
    id: 17,
    question: "Which HTML tag is used to create a table row?",
    options: ["td", "tr", "th", "table"],
    answer: "tr",
  },
  {
    id: 18,
    question: "Which CSS property is used to align text to the center?",
    options: ["align", "text-align", "center", "font-align"],
    answer: "text-align",
  },
  {
    id: 19,
    question: "Which JavaScript method is used to convert JSON into an object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    answer: "JSON.parse()",
  },
  {
    id: 20,
    question: "Which HTML tag is used to create a form?",
    options: ["input", "form", "label", "button"],
    answer: "form",
  },
  {
    id: 21,
    question: "Which CSS property is used to round element corners?",
    options: ["corner-radius", "border-style", "border-radius", "radius"],
    answer: "border-radius",
  },
  {
    id: 22,
    question: "Which JavaScript loop is guaranteed to run at least once?",
    options: ["for", "while", "do while", "foreach"],
    answer: "do while",
  },
  {
    id: 23,
    question: "Which HTML tag is used to create a numbered list?",
    options: ["ul", "ol", "li", "list"],
    answer: "ol",
  },
  {
    id: 24,
    question: "Which CSS property is used to hide an element?",
    options: ["opacity", "visibility", "display", "hide"],
    answer: "display",
  },
  {
    id: 25,
    question: "Which JavaScript method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    id: 26,
    question: "Which HTML attribute is used to provide an image path?",
    options: ["href", "src", "alt", "link"],
    answer: "src",
  },
  {
    id: 27,
    question: "Which CSS property is used to change the font family?",
    options: ["font-type", "font-family", "font-style", "text-family"],
    answer: "font-family",
  },
  {
    id: 28,
    question: "Which JavaScript method removes the last element of an array?",
    options: ["shift()", "pop()", "push()", "slice()"],
    answer: "pop()",
  },
  {
    id: 29,
    question: "Which HTML tag is used to create a button?",
    options: ["btn", "button", "input", "click"],
    answer: "button",
  },
  {
    id: 30,
    question: "Which CSS property is used to add space outside an element?",
    options: ["padding", "margin", "spacing", "border"],
    answer: "margin",
  },
];

const questionElement = document.getElementById("questionElement");
const optionElement = document.getElementById("optionElement");
const nextQuesBtn = document.getElementById("nextQuesBtn");
const quizProgress = document.getElementById("quizProgress");
const quizContainer = document.querySelector(".quizContainer");
const reportCardContainer = document.querySelector(".reportCardContainer");

let counter = 0;
let score = 0;

// LOCALE STORAGE

// const savedCounter = localStorage.getItem("quizCounter");
// const savedScore = localStorage.getItem("quizScore");

// if (savedCounter !== null) {
//   counter = Number(savedCounter);
// }

// if (savedScore !== null) {
//   score = Number(savedScore);
// }

if (counter < quizQuestions.length) {
  quizProgress.innerHTML = `${counter + 1} / ${quizQuestions.length}`;
}

quizQuestions.sort(() => Math.random() - 0.5);

const startQuiz = () => {
  const question = quizQuestions[counter].question;

  const options = [...quizQuestions[counter].options].sort(() => Math.random() - 0.5);

  questionElement.innerHTML = question;

  optionElement.innerHTML = "";

  for (const option of options) {
    const li = `<li class="optionItem" onclick="checkAns(this)">${option}</li>`;
    optionElement.innerHTML += li;
  }

  nextQuesBtn.setAttribute("disabled", true);

  startTimer();
};

const nextQuestion = () => {
  counter++;

  // localStorage.setItem("quizCounter", counter);

  if (counter < quizQuestions.length) {
    quizProgress.innerHTML = `${counter + 1} / ${quizQuestions.length}`;
  }

  if (counter < quizQuestions.length) {
    startQuiz();
  } else {
    const wrong = quizQuestions.length - score;
    const percentageResult = (score / quizQuestions.length) * 100;

    const totalQuestions = document.getElementById("totalQuestions");
    const correctAnswers = document.getElementById("correctAnswers");
    const wrongAnswers = document.getElementById("wrongAnswers");
    const percentage = document.getElementById("percentage");
    const grade = document.getElementById("grade");

    totalQuestions.innerHTML = quizQuestions.length;
    correctAnswers.innerHTML = score;
    wrongAnswers.innerHTML = wrong;
    percentage.innerHTML = `${percentageResult.toFixed(0)}`;

    if (percentageResult >= 80) {
      grade.innerHTML = "Excellent 🎉";
    } else if (percentageResult >= 50 && percentageResult <= 80) {
      grade.innerHTML = "Pass 🙂";
    } else {
      grade.innerHTML = "Fail 😢";
    }

    console.log("Quiz End");
    console.log("Score: ", score);
    console.log("Wrong Answer: ", wrong);

    quizContainer.style.display = "none";
    reportCardContainer.style.display = "block";

    clearInterval(timerInterval);
  }
};

const checkAns = (li) => {
  clearInterval(timerInterval);

  const correctAns = quizQuestions[counter].answer;
  const userAns = li.innerHTML;
  const allList = optionElement.getElementsByTagName("li");

  if (userAns === correctAns) {
    console.log("Correct Answer");
    li.style.background = "rgb(5,203, 5)";
    score++;

    // localStorage.setItem("quizScore", score);
  } else {
    console.log("Wrong Answer");
    li.style.background = "rgb(207, 4, 4)";

    // highlight correct answer
    for (const list of allList) {
      if (list.innerHTML === correctAns) {
        list.style.background = "rgb(5,203, 5)";
        break;
      }
    }
  }

  // Disable all options
  for (const list of allList) {
    list.removeAttribute("onclick");
    list.style.cursor = "default";
  }
  nextQuesBtn.removeAttribute("disabled");
};

const restartQuiz = () => {
  counter = 0;
  score = 0;

  // localStorage.removeItem("quizCounter");
  // localStorage.removeItem("quizScore");

  quizContainer.style.display = "block";
  reportCardContainer.style.display = "none";

  if (counter < quizQuestions.length) {
    quizProgress.innerHTML = `${counter + 1} / ${quizQuestions.length}`;
  }

  startQuiz();
};

const timerElement = document.getElementById("timer");

let timeLeft = 30;
let timerInterval;

const startTimer = () => {
  clearInterval(timerInterval);

  timeLeft = 30;
  timerElement.innerHTML = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.innerHTML = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);

      const allList = optionElement.getElementsByTagName("li");

      // Disable all options when time ends
      for (const list of allList) {
        list.removeAttribute("onclick");
        list.style.cursor = "default";
      }

      const correctAns = quizQuestions[counter].answer;

      for (const list of allList) {
        if (list.innerHTML === correctAns) {
          list.style.background = "rgb(5, 203, 5)";
        }
      }

      setTimeout(() => {
        nextQuestion();
      }, 2000);

      nextQuesBtn.setAttribute("disabled", true);
    }
  }, 1000);
};

document.addEventListener("keydown", (e) => {
  const options = document.getElementsByClassName("optionItem");
  const nextBtn = document.getElementById("nextQuesBtn");

  if (e.key === "1" && options[0] && options[0].hasAttribute("onclick")) options[0].click();
  if (e.key === "2" && options[1] && options[1].hasAttribute("onclick")) options[1].click();
  if (e.key === "3" && options[2] && options[2].hasAttribute("onclick")) options[2].click();
  if (e.key === "4" && options[3] && options[3].hasAttribute("onclick")) options[3].click();

  if (e.key === "Enter" && !nextQuesBtn.disabled) {
    nextQuesBtn.click();
  }
});
