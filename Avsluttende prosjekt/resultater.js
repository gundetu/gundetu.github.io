let quizEl = document.getElementById('Quiz')
let karttegnEl = document.getElementById('karttegn')
let memoryEl = document.getElementById('memory')

quizEl.innerHTML = localStorage.highscore + " poeng"
karttegnEl.innerHTML = localStorage.best + " i streak "

if(localStorage.trekk = 50){
    memoryEl.innerHTML = "ikke prøvd"
}
else{
    memoryEl.innerHTML = localStorage.trekk + " trekk "
}




