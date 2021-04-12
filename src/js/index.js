console.log("connected");

//Start Quiz//
const startButton = document.getElementById("start-btn");
const questionContainElement = document.getElementById("question");
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainElement.classList.remove("hide");
  setnextquestion;
}

//Insert Question//
const questions = [
  {
    question: "what is this pokemon",
    answer: [
      { Text: "pokemon1", correct: false },
      { Text: "pokemon2", correct: true },
    ],
  },
];
function setnextquestion
//Submit Answer//

//If Correct Answer is submitted, display correct modal
//Else display incorrect modal

//If question # < questions.length display next question

//else display results
