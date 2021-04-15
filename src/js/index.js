console.log("connected");

//Start Quiz//
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainElement = document.getElementById('questionsection')
const questionElement = document.getElementById('question')
const answerSelection = document.getElementById('answers')

//let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame) 
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainElement.classList.remove('hide') 
    setNextQuestion()
}

//Insert Question//
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question //Display question text
  question.answers.forEach(answer => {
    const button = document.createElement('button') 
    button.innerText = answer.Text
    button.classList.add('btna')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerSelection.appendChild(button)
  })
}

function resetState () {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerSelection.firstChild) {
    answerSelection.removeChild
    (answerSelection.firstChild)
  }

}



function selectAnswer (e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct ) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
      question: 'Who is this Pokemon?',
      answers: [
        { Text: 'pokemon1', correct: false },
        { Text: 'pokemon2', correct: false },
        { Text: 'pokemon3', correct: true },
        { Text: 'pokemon4', correct: false }
      ],
    },
    {
      question: 'What is this Pokemon?',
      answers: [
        { Text: 'choice1', correct: true },
        { Text: 'choice2', correct: false },
        { Text: 'choice2', correct: false },
        { Text: 'choice3', correct: false }
      ],
    },
  ];

