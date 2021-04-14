console.log("connected");

//Start Quiz//
const startButton = document.getElementById('start-btn')
const questionContainElement = document.getElementById('questionsection')
const questionElement = document.getElementById('question')
const answerSelection = document.getElementById('answers')

let shuffledQuestionsm, currentQuestionIndex

startButton.addEventListener('click', startGame) 

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestionsm = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainElement.classList.remove('hide')
    setnextquestion()
}

//Insert Question//
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestionsm[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer () {}

const questions = [
    {
      question: 'Who is this Pokemon?',
      answer: [
        { Text: 'pokemon1', correct: false },
        { Text: 'pokemon2', correct: false },
        { Text: 'pokemon3', correct: true },
        { Text: 'pokemon4', correct: false }
      ],
    },
  ];

//Submit Answer//

//If Correct Answer is submitted, display correct modal
//Else display incorrect modal

//If question # < questions.length display next question
//else display results
