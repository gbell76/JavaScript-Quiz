const list = document.querySelector('#list')
const home = document.querySelector('#home')
const clear = document.querySelector('#clear')
const highScores = localStorage.getItem("scores")

const displayList = () => {
    let scoreboard = []
    if(highScores){
        scoreboard = localStorage.getItem("scores").split(',')
        scoreboard.sort().reverse()
        for(i in scoreboard){
            let score = document.createElement('p')
            score.textContent = scoreboard[i]
            list.appendChild(score)
        }
    }
}

setTimeout(displayList, 0)

const goHome = () => {
    window.location.href = 'index.html'
}

home.addEventListener('click', goHome)

const clearList = () => {
    localStorage.removeItem("scores")
    window.location.href = 'highscores.html'
}

clear.addEventListener('click', clearList)