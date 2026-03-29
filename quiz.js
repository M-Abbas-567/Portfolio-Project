// quiz.js - corrected version (use with your existing HTML, no class/id names changed)

// questions array assumed to be defined above exactly as you provided.
const questions = [
  {
    que: "What does HTML stand for?",
    A: "Hyper Text Markup Language",
    B: "High Text Machine Language",
    C: "Hyper Tool Markup Language",
    D: "Hyperlink Text Machine Language",
    option: "a"
  },
  {
    que: "Which tag is used to create a hyperlink?",
    A: "<link>",
    B: "<a>",
    C: "<href>",
    D: "<url>",
    option: "b"
  },
  {
    que: "Which language is used to style web pages?",
    A: "HTML",
    B: "JavaScript",
    C: "CSS",
    D: "Python",
    option: "c"
  },
  {
    que: "Which language adds interactivity to websites?",
    A: "HTML",
    B: "CSS",
    C: "JavaScript",
    D: "SQL",
    option: "c"
  },
  {
    que: "Which tag is used to display an image?",
    A: "<image>",
    B: "<img>",
    C: "<pic>",
    D: "<src>",
    option: "b"
  }
];

let index = 0;
let finalScore = 0;

// keep the same DOM selectors as your HTML
let A = document.querySelector('.A');
let B = document.querySelector('.B');
let C = document.querySelector('.C');
let D = document.querySelector('.D');

let h = document.querySelector('h2');

// select the actual button element inside .btn
let nextBtn = document.querySelector('.btn button');
const form = document.querySelector('form');
const scoreDiv = document.getElementById('Fscore');

function loadQuestion() {
  // load question at current index (do NOT increment here)
  const current = questions[index];

  h.innerText = current.que;
  A.innerText = current.A;
  B.innerText = current.B;
  C.innerText = current.C;
  D.innerText = current.D;

  // Clear any previously selected radio simple ye jab new que load hota ha to option ko uncheck karda
  document.querySelectorAll('input[name="option"]').forEach(i => i.checked = false);

  // Update button text if this is last question
  if (index === questions.length - 1) {
    nextBtn.textContent = 'Submit';
  } else {
    nextBtn.textContent = 'Next';
  }
}

// initial load
loadQuestion();

// Next button click handler
nextBtn.addEventListener('click', () => {
  // find selected radio
  const selected = document.querySelector('input[name="option"]:checked');

  if (!selected) {
    alert('Please select an option before proceeding.');
    return;
  }

  // selected.value is "a" / "b" / "c" / "d"
  if (selected.value === questions[index].option) {
    finalScore++;
  }

  // move to next question index
  index++;

  // if more questions remain, load next one
  if (index < questions.length) {
    loadQuestion();
  } else {
    // quiz finished — show final score
    scoreDiv.textContent = `Your Score is ${finalScore} out of ${questions.length}`;

    // or disable the button instead:
    // nextBtn.disabled = true;
  }
});