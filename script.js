const quizData = [
  {
    question: 'What is the smallest country in the world?',
    a: 'Tuvalu',
    b: 'Marshall Islands',
    c: 'Liechtenstein',
    d: 'Vatican City',
    correct: 'd',
  },

  {
    question: 'Which country invented ice cream?',
    a: 'USA',
    b: 'China',
    c: 'England',
    d: 'Iceland',
    correct: 'b',
  },

  {
    question:
      'What countries made up the original Axis powers in World War II?',
    a: 'Germany, Italy and Japan',
    b: 'Belgium, Netherlands and Luxemburg',
    c: 'United Kingdom, France and Russia',
    d: 'Spain, Portugal and Andorra',
    correct: 'a',
  },

  {
    question: 'In which Ukrainian city did the nuclear disaster happened?',
    a: 'Harkov',
    b: 'Donetsk',
    c: 'Cernobîl',
    d: 'Prîpeat',
    correct: 'd',
  },

  {
    question: 'What is the capital of Iceland?',
    a: 'Helsinki',
    b: 'Reykjavík',
    c: 'Húsavík',
    d: 'Berna',
    correct: 'b',
  },

  {
    question: 'Which country won the first-ever football World Cup in 1930?',
    a: 'Germany',
    b: 'Brazil',
    c: 'Argentina',
    d: 'Uruguay',
    correct: 'd',
  },

  {
    question: "What's the city with the most diversity in terms of language?",
    a: 'New York City',
    b: 'Los Angeles',
    c: 'London',
    d: 'Paris',
    correct: 'a',
  },

  {
    question: 'What is the nearest planet to the sun?',
    a: 'Mars',
    b: 'Mercury',
    c: 'Earth',
    d: 'Pluto',
    correct: 'b',
  },

  {
    question: 'How many teeth does an adult human have?',
    a: '20',
    b: '30',
    c: '28',
    d: '32',
    correct: 'd',
  },

  {
    question:
      'For what movie did Steven Spielberg win his first Oscar for Best Director?',
    a: 'Always',
    b: 'Jaws',
    c: 'Indiana Jones and the Temple of Doom',
    d: "Schindler's List",
    correct: 'd',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

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

function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
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
        <h2>You answered at ${score}/${quizData.length} questions corectly</h2>
        
        <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
