if(!localStorage.highscore){
    localStorage.highscore = 0
}

const quizData = [
    {
        question: "Hvilket av veivalgene har færrest høydemetre? ",
        a: "1",
        b: "2",
        c: "3",
        correct: "a",
    },
    {
        question: "Hvilket av veivalgene ville du anbefalt en nybegynner?",
        a: "1",
        b: "2",
        c: "3",
        correct: "c",
    },
    {
        question: "Hva bør du gjøre dersom du skal legge ut på et langt strekk? ",
        a: "Du bør gå",
        b: "Du bør legge veien innom noen sikre holdepunkter",
        c: "Sjekke at kompasset peker mot nord hele tiden",
        correct: "b",
    },
    {
        question: "Hva bør du gjøre når du skal legge ut på et veivalgstrekk?",
        a: "Du bør vurdere flere mulige veivalg",
        b: "Måle avstanden på strekket",
        c: "Stille kompasset mot nærmeste tre",
        correct: "a",
    },
    {
        question: "Er det korteste veivalget alltid det beste? ",
        a: "Nei, for det kan være dårlig løpbarhet og mange høydemetre",
        b: "Ja! Kortest er alltid raskest ",
        c: "Det lengste er alltid det beste fordi da tilbringer du mest tid i skogen",
        correct: "a",
    },
    {
        question: "Hvilket av veivalgene gir mest oppoverbakke? ",
        a: "1",
        b: "2",
        c: "3",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
            if (score >= localStorage.highscore){
                localStorage.highscore = score
            }
           quiz.innerHTML = `
           <h2>Du svarte ${score}/${quizData.length} spørsmål riktig</h2>
           <h3>Din høyeste score er ${localStorage.highscore}</h3>
           <button onclick="location.reload()">Prøv på nytt</button>
        `
       }
    }
})


