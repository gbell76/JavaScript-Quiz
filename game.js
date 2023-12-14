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

const scoreboard = localStorage.getItem("scores").split(',')

let time = 75
let questionNumber = 0
let answer = "Switch"

const gameOver = () => {
    buttonA.style.display = 'none'
    buttonB.style.display = 'none'
    buttonC.style.display = 'none'
    buttonD.style.display = 'none'
    question.textContent = "Your final score is " + time + "!"
    const prompt = document.createElement('p')
    prompt.textContent = "Please enter your initials:"
    const initials = document.createElement('textarea')
    const submit = document.createElement('button')
    submit.textContent = 'Enter'
    question.appendChild(prompt)
    question.appendChild(initials)
    question.appendChild(submit)

    const storeScore = () => {
        scoreboard.push(time + " - " + initials.value.replaceAll(',', ''))
        localStorage.setItem("scores", scoreboard.join(','))
        window.location.href = "index.HTML" //needs to change to high scores page
    }

    submit.addEventListener('click', storeScore)
}

const decrementTime = () =>{
    time--
    countdown.textContent = "Time: " + time
    if(time < 1){
        time = 0
        clearInterval(timer)
        gameOver()
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
            gameOver()
        }
        countdown.textContent = "Time: " + time
    }
    if (questionNumber === questionList.length){
        clearInterval(timer)
        gameOver()
    }else{
        question.textContent = questionList[questionNumber]
        buttonA.textContent = aList[questionNumber]
        buttonB.textContent = bList[questionNumber]
        buttonC.textContent = cList[questionNumber]
        buttonD.textContent = dList[questionNumber]
        answer = answerList[questionNumber]
        questionNumber++
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