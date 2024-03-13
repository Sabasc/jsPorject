let uerScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
const userScorepara = document.querySelector('#user-score')
const comScorepara = document.querySelector('#comp-score')

const genComChoice = () =>{
    const options = ['rock','paper','scissors']
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]
}

const drawGame = () =>{
    console.log('draw game')
    msg.innerHTML= 'Game Draw play again'
    msg.style.background='purple'
}

const showWinner = (userWin,userChoic,comChoice) =>{
    if(userWin){
        uerScore++
        userScorepara.innerHTML = uerScore
        console.log('you win!')
        // msg.innerHTML=`you win ${userChoic}= beats ${comChoice}`
        msg.innerHTML='You Win!'
        msg.style.background='green'
    }else{
        compScore++
    comScorepara.innerHTML= compScore
        console.log('you lose')
        msg.innerHTML='you lose!'
        msg.style.background = 'red'
    }

}
const playGame = (userChoic)=>{
    console.log('user',userChoic)
    const comChoice = genComChoice()
    console.log('comp',comChoice)

    if(userChoic === comChoice){
      drawGame()
    }else{
        let userWin = true;
        if(userChoic === 'rock'){
            userWin = comChoice === 'paper'?false:true
        }else if(userChoic === 'paper'){
            userWin = comChoice === 'scissors'?false:true
        }else{
            userWin = comChoice === 'rock'?false : true
        }
        showWinner(userWin)
        
    }
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoiceId = choice.getAttribute('id')
        // console.log('choice was clicked',choiceId)
        playGame(userchoiceId)
    })
})