const countdown = document.querySelector('#time')
const result = document.querySelector('#result')
const question = document.querySelector('#question')
const buttonA = document.querySelector('#a')
const buttonB = document.querySelector('#b')
const buttonC = document.querySelector('#c')
const buttonD = document.querySelector('#d')

const questionList = ["Which of the following increments the variable i?", "Which of the following declares the variable i so that it cannot be changed?", "Which of the following is not a part of a conditional statment?", "How would you call the first element in the array options[]?"]
const answerList = ["i++", "const i", "if else", "options[0]"]
const aList = ["i++", "let i", "if", "options[1]"]
const bList = ["i--", "var i", "if else", "options.0"]
const cList = ["i**", "const i", "else if", "options.1"]
const dList = ["--i", " for i", "else", "options[0]"]
let time = 75
let questionNumber = 0
let answer = "Switch"

const decrementTime = () =>{
    time --
    countdown.textContent = "Time: " + time
    if(time < 1){
        time = 0
        clearInterval(timer)
        //go to game over screen
    }
}
let timer = window.setInterval(decrementTime, 1000)

const checkAnswer = (btn) =>{
    if(btn.textContent === answer){
        result.textContent = "Correct!"
    }else{
        result.textContent = "Incorrect!"
        time -= 15
        if(time < 1){
            time = 0
            clearInterval(timer)
            //go to game over screen
        }
        countdown.textContent = "Time: " + time
    }
    question.textContent = questionList[questionNumber]
    buttonA.textContent = aList[questionNumber]
    buttonB.textContent = bList[questionNumber]
    buttonC.textContent = cList[questionNumber]
    buttonD.textContent = dList[questionNumber]
    answer = answerList[questionNumber]
    questionNumber++
    if (questionNumber === questionList.length){
        clearInterval(timer)
        //go to game over screen
    }
}

const checkAnswerA = () =>{
    checkAnswer(buttonA)
}

const checkAnswerB = () =>{
    checkAnswer(buttonB)
}

const checkAnswerC = () =>{
    checkAnswer(buttonC)
}

const checkAnswerD = () =>{
    checkAnswer(buttonD)
}

buttonA.addEventListener('click', checkAnswerA)
buttonB.addEventListener('click', checkAnswerB)
buttonC.addEventListener('click', checkAnswerC)
buttonD.addEventListener('click', checkAnswerD)