let userCount = 0
let compCount = 0
let choices = document.querySelectorAll(".choice")
let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#comp-score")
let msg = document.querySelector("#message")
function showWinner(userWin,userChoice,compChoice){
    if(userWin){
        msg.innerHTML = `You Win 🎉 your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        userCount++
        userScore.innerHTML = userCount
    }
    else{
        msg.innerHTML = `You Lose 😢 ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
        compCount++
        compScore.innerHTML = compCount
    }
}
function compChoice(){
    let options = ['rock','paper','scissor']
    let randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}
function drawGame(){
    msg.innerHTML = "Game Draw"
    msg.style.backgroundColor = "black"
}
function playGame(userChoice){
    let compchoice = compChoice()
    if(userChoice == compchoice){
        drawGame()
    }
    else{
        let userWin = true
        if(userChoice=='rock'){
           userWin = compchoice =='paper' ? false : true
        }
        else if(userChoice == 'paper'){
            userWin = compchoice == 'scissor' ? false : true
        }
        else{
            userWin = compchoice =='rock' ? false : true
        }
        showWinner(userWin,userChoice,compchoice)
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})
