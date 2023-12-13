const start = document.querySelector('#start')
const countdown = document.querySelector('#time')

const beginGame = () =>{
    window.location.href = "game.HTML"
}

start.addEventListener('click', beginGame)