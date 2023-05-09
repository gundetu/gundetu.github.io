if(!localStorage.trekk){
  localStorage.trekk = 200
}

//JavaScript Sprint spill
//Henter fra html siden 
const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const resultatEl = document.querySelector(".stats-container")
const wrapperEl = document.querySelector(".wrapper")
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Lager et array med alle bildene 
const items = [
    {name:"furbudt-gjerde", image:"Bilder.prosjekt/forbudt.gjerde.png"},
    {name:"furbudt-omrade", image:"Bilder.prosjekt/forbudt-omrade.png"},
    {name:"sand", image:"Bilder.prosjekt/sand.png"},
    {name:"post", image:"Bilder.prosjekt/post.png"},
    {name:"privat-omrade", image:"Bilder.prosjekt/privat-omrade.png"},
    {name:"bro.ed.undergang", image:"Bilder.prosjekt/bro.med.undergang.png"},
    {name:"furbudt.hekk", image:"Bilder.prosjekt/forbudt.hekk.png"},
    {name:"steingjerde", image:"Bilder.prosjekt/steingjerde.png"},
    {name:"undergang", image:"Bilder.prosjekt/undergang.png"},
    {name:"traer", image:"Bilder.prosjekt/traer.png"},
];


//definerer en verdi: trekk
let movesCount = 0,
  winCount = 0;




//Lager en funksjon som kalkulerer antall trekk
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//En funksjon som henter tilfeldige verdier fra arrayet
const generateRandom = (size = 4) => {
  //Midlertidig array, med de bildene fra arrayet over
  let tempArray = [...items];
  //lager en ny array som vi skal putte kortene inn i 
  let cardValues = [];
  //Definerer antall kort, antall par
  size = (size * size) / 2;
  //for-løkke som henter verdier fra Arrayet utifra antall kort vi definerte ovenfor
  for (let i = 0; i < size; i++) {
    //lager en tilfeldig verdi og legger til i cardValues arrayet. 
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //Fjerner de bildene vi la til fra det midlertidige arrayet
    tempArray.splice(randomIndex, 1);
  }
  //returnerer det nye arraeyt vi lagde
  return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  //simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
  
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>
     `;
  }
  //Grid, antall kolonner utifra kort, så her blir det 4 siden size er lik 4. 
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  //Vi henter kortene
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      //Dersom det valgte kortet ikke har class "matched" skal kortet snus, dersom det har classen "matched" skal det ignoreres 
      if (!card.classList.contains("matched")) {
        //Snur det valgte kortet
        card.classList.add("flipped");
        //Her sjekker vi om første kort ikke finnes fra før, altså om det er det første kortet. 
        if (!firstCard) {
          //Det valgte kortet blir det første kortet
          firstCard = card;
           //det første kortet for verdier til det valgte kortet
          firstCardValue = card.getAttribute("data-card-value");
          //Dersom første kort er definert, så er dette det andre kortet og det skal sammenliknes
        } else {
          //øker antal trekk
          movesCounter();
          //Det andre kortets verdi
          secondCard = card;
          //det andre kortet for verdier til det valgte kortet
          let secondCardValue = card.getAttribute("data-card-value");
          //sjekker om kortene har lik verdi
          if (firstCardValue == secondCardValue) {
            //Dersom kortene matcher får de en klasse .matched som gjør at de ikke snus og derfro blir ignorert. 
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            //gjør at det "første kortet blir "false" slik at firstcard ikke finens mer og at neste som velges blir firstCard. 
            firstCard = false;
            //Antall riktige øker 
            winCount += 1;
            //Sjekker hvor mange riktige man har klart, dersom antall riktige er halvparten av antall kort stopper spillet. Her har vi også localStorage for å spare på movesCount verdien som er lavest på pc-en
            if (winCount == Math.floor(cardValues.length / 2)) {
              //Dersom wovesCount er lavere enn den lagret verdien, blir dette den nye verden. 
              if (movesCount <= localStorage.trekk){
                localStorage.trekk = movesCount;
            }

            result.innerHTML = `<h2>Du Vant! </h2><h4>Trekk: ${movesCount}</h4>`;
                stopGame();
           
             
            }
          } else {
            //dersom kortene ikke matcher snur de tilbake
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            //Firste og andre kortet blir fjernet
            firstCard = false;
            secondCard = false;
            //lager en forsinkelse, kortene snus tilbake 0.9sekunder
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
  });
};

//Starter spillet
//legger til en lytter til startknappen 
//Når startknappen blir trykket på legger vi til ulike klasser som gjør at .controls, startknappen fjernes, samt at spillet vises. initialiserer gjør at spillet lages. 
startButton.addEventListener("click", () => {
 
  
  controls.classList.add("hide");
 
  startButton.classList.add("hide");
 
  gameContainer.classList.remove("ikkeVis")
  wrapperEl.classList.add("gjennomsiktig")
  stopButton.classList.add("ikke");
  resultatEl.classList.remove("ikkeVis");
  movesCount = 0
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;

  //lager et nytt spill når startknappen trykkes. 
  initializer();

});

//Stopper spiller, vi fjernes klassene vi ga i stad og legger til de de i utganspunktet hadde 

stopButton.addEventListener("click", stopGame)

function stopGame(){
  controls.classList.remove("hide");
  startButton.classList.remove("hide");
  clearInterval(interval);
  gameContainer.classList.add("ikkeVis");
  stopButton.classList.remove("ikke")
  resultatEl.classList.add("ikkeVis");
  wrapperEl.classList.remove("gjennomsiktig")
 
  
}


//Lager et nytt spill, gir kortene nye verdier og winCounten blir 0. 
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
};

