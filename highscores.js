const list = document.querySelector('#list')
const home = document.querySelector('#home')
const clear = document.querySelector('#clear')
const highScores = localStorage.getItem("scores")

const displayList = () => {
    let scoreboard = []
    if(highScores){
        scoreboard = localStorage.getItem("scores").split(',')
        scoreboard.sort().reverse() //Sort high scores in descending order
        for(i in scoreboard){
            let score = document.createElement('p')
            score.textContent = scoreboard[i]
            list.appendChild(score)
        }
    }
}

setTimeout(displayList, 0) //display list of scores as soon as page is opened

const goHome = () => {
    window.location.href = 'index.html'
}

home.addEventListener('click', goHome)

const clearList = () => {
    localStorage.removeItem("scores")
    window.location.href = 'highscores.html' //refresh to get rid of currently displayed scores
}

clear.addEventListener('click', clearList)