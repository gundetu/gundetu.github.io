let quizEl = document.getElementById('Quiz')
let karttegnEl = document.getElementById('karttegn')
let memoryEl = document.getElementById('memory')

if(localStorage.trekk = 200){
    memoryEl.innerHTML = "ikke prøvd"
}
else{
    memoryEl.innerHTML = localStorage.trekk + " trekk"
}

quizEl.innerHTML = localStorage.highscore + " poeng"
karttegnEl.innerHTML = localStorage.best + " i streak "


