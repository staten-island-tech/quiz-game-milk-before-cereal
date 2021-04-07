console.log("connected");

//Start Quiz//
const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame) 
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
}

//Insert Question//

//Submit Answer//

//If Correct Answer is submitted, display correct modal
//Else display incorrect modal

//If question # < questions.length display next question
//else display results
