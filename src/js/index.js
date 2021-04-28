console.log("connected");

//Start Quiz//
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainElement = document.getElementById("questionsection");
const questionElement = document.getElementById("question");
const answerSelectionElement = document.getElementById("answers");

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame) 
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  
})

function startGame() {
    startButton.classList.add('hide') 
    shuffledQuestions = questions.sort(() => Math.random() - .0)
    currentQuestionIndex = 0   
    questionContainElement.classList.remove('hide') 
    setNextQuestion()   
}

//Insert Question//
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  image.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex > 9) {imageIndex = 0;}
}



function showQuestion(question) {
  questionElement.innerText = question.question //Display question text
  question.answers.forEach(answer => {
    const button = document.createElement('button') 
    button.innerText = answer.Text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerSelectionElement.appendChild(button);
  });
}

function resetState () {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerSelectionElement.firstChild) {
    answerSelectionElement.removeChild(answerSelectionElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerSelectionElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
    {
      question: 'Who is this Pokemon?',
      answers: [
        { Text: 'Manaphy', correct: false },
        { Text: 'Marill', correct: false },
        { Text: 'Phione', correct: true },
        { Text: 'Mantyke', correct: false }
      ],
    },
    {
      question: 'Who is this?',
      answers: [
        { Text: 'Florges', correct: true },
        { Text: 'Flower', correct: false },
        { Text: 'Roserade', correct: false },
        { Text: 'Floetta', correct: false }
      ],
    },
    {
      question: 'What is the name of this Pokemon?',
      answers: [
        { Text: 'Not a pokemon', correct: false },
        { Text: 'Sinistea', correct: false },
        { Text: 'Kettlen', correct: false },
        { Text: 'Polteageist', correct: true }
      ],
    },
    {
      question: 'Can you guess this Pokemon?',
      answers: [
        { Text: 'Morgrem', correct: true },
        { Text: 'Literally a Digimon', correct: false },
        { Text: 'Impilimp', correct: false },
        { Text: 'Coboli', correct: false }
      ],
    },
    {
      question: 'WHOS THAT POKEMON?',
      answers: [
        { Text: 'The Pikachu Meme', correct: true },
        { Text: 'Pikachu', correct: true },
        { Text: 'Suprised Pikachu', correct: true },
        { Text: 'Raichu.', correct: false }
      ],
    },
    {
      question: 'Qui est hic?',
      answers: [
        { Text: 'Flaeron', correct: false },
        { Text: 'Fireon', correct: false },
        { Text: 'Growlithe', correct: false },
        { Text: 'Flareon', correct: true }
      ],
    },
    {
      question: 'I bet you dont know this one',
      answers: [
        { Text: 'Muk', correct: false },
        { Text: 'Sludgin', correct: false },
        { Text: 'Grimer', correct: true },
        { Text: 'Gengar', correct: false }
      ],
    },
    {
      question: 'Кто это?',
      answers: [
        { Text: 'Digimon', correct: false },
        { Text: 'Yveltal', correct: false },
        { Text: 'Zygarde', correct: false },
        { Text: 'Eternatus', correct: true }
      ],
    },
    {
      question: 'Is this acceptable',
      answers: [
        { Text: 'Yes', correct: false },
        { Text: 'Absolutely Not', correct: true }
      ]
      
    },
    {
      question: 'Congragulation! You finished'
    }
  ];
  
  var image = document.getElementById('x');
  var imageArray = ['/front.jpg','https://images.app.goo.gl/N66qRtptcuzSJ5iv8','https://images.app.goo.gl/8cLD33sszkeh3mwQ9',
  'https://images.app.goo.gl/e6HwCdSKPjVCeytU9','https://images.app.goo.gl/3BPtWY48mjfYvZ617',
  'https://images.app.goo.gl/ffy6b8Vo4GXwXtST7', 'https://images.app.goo.gl/Pim3YBvMKJ4UjDNG8','https://images.app.goo.gl/3vV2QvABg3BfDwwc6',
  'https://images.app.goo.gl/QQUWDsQXoZ7MUu1u7','https://images.app.goo.gl/po43CWYdb7czz6Wf6', ];
  var imageIndex = 1; 

