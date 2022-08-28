import addAncientCards from "./assets/components/ancients";
import renderDifficulties from "./assets/components/difficults";
import renderStartButton from "./assets/components/startButton";
import renderCurrentState from "./assets/components/deck-container/current state";
import renderLastCard from "./assets/components/deck-container/last-card";
import renderDeck from "./assets/components/deck-container/deck";
// import shuffleArray from "./assets/events/shuffleArray";
// import getRandomNum from "./assets/events/getRAndomNumber";
import bigFunction from "./assets/events/createDeck";
import showCard from "./assets/events/showCard";
import stateTracking from "./assets/events/stateTracking";
import "./styles.css";

let ancientsTemplateBase = document.createElement('div')
let difficultiesTemplateBase = document.createElement('div')
let currentState = document.createElement('div')
let deckContainer = document.createElement('div')
let lastCard = document.createElement('div')
let deckTemplate = document.createElement('div')


let createAncientTemplate = () => {
  document.body.appendChild(ancientsTemplateBase)
  addAncientCards(ancientsTemplateBase)
}
let createDifficultiesTemplate = () => {
  document.body.appendChild(difficultiesTemplateBase)
  renderDifficulties(difficultiesTemplateBase)

}

createAncientTemplate()

createDifficultiesTemplate()

renderStartButton()

renderCurrentState(deckContainer, currentState)
renderLastCard(lastCard, currentState)
renderDeck(deckTemplate, currentState)

let currentAncient = undefined
let currentDifficulty = undefined
let deckArrays = []

let cards = document.querySelectorAll('.ancient-card')
let cardsTemplateBase = document.querySelector('.ancient-cards__template')

let difficulties = document.querySelectorAll('.difficulty')
let difficultiesTemplate = document.querySelector('.difficulty__template')
let startButton = document.querySelector('.start-button')
let deckContainer1 = document.querySelector('.deck-container')



cardsTemplateBase.addEventListener('click', (event) => {
  deckContainer1.classList.add('hidden')
  cards.forEach(elem => elem.classList.remove('clicked_item'))
  event.target.classList.add('clicked_item')
  currentAncient = event.target.id
  deckArrays = bigFunction(currentAncient)
  console.log(deckArrays)
})

difficultiesTemplate.addEventListener('click', (event) => {
  deckContainer1.classList.add('hidden')
  difficulties.forEach(elem => elem.classList.remove('clicked_difficulty'))
  event.target.classList.add('clicked_difficulty')
  currentDifficulty = event.target.id
})

let deck = document.querySelector('.deck')
let last = document.querySelector('.last-card')

let firstStageGreen = document.querySelector('#first-stage-green')
let firstStageBrown = document.querySelector('#first-stage-brown')
let firstStageBlue = document.querySelector('#first-stage-blue')
let secondStageGreen = document.querySelector('#second-stage-green')
let secondStageBrown = document.querySelector('#second-stage-brown')
let secondStageBlue = document.querySelector('#second-stage-blue')
let thirdStageGreen = document.querySelector('#third-stage-green')
let thirdStageBrown = document.querySelector('#third-stage-brown')
let thirdStageBlue = document.querySelector('#third-stage-blue')

deck.addEventListener('click', ()=> {
  console.log(deckArrays);

  last.style.backgroundImage = `url(${showCard(deckArrays)})`
  firstStageGreen.innerText = `${stateTracking(deckArrays[0], 'green')}`
  firstStageBrown.innerText = `${stateTracking(deckArrays[0], 'brown')}`
  firstStageBlue.innerText = `${stateTracking(deckArrays[0], 'blue')}`
  secondStageGreen.innerText = `${stateTracking(deckArrays[1], 'green')}`
  secondStageBrown.innerText = `${stateTracking(deckArrays[1], 'brown')}`
  secondStageBlue.innerText = `${stateTracking(deckArrays[1], 'blue')}`
  thirdStageGreen.innerText = `${stateTracking(deckArrays[2], 'green')}`
  thirdStageBrown.innerText = `${stateTracking(deckArrays[2], 'brown')}`
  thirdStageBlue.innerText = `${stateTracking(deckArrays[2], 'blue')}`
})


startButton.addEventListener('click', ()=> {
  if ((currentAncient !== undefined) && (currentDifficulty !== undefined)) {
    lastCard.style.backgroundImage=''
    deckContainer1.classList.remove('hidden')
    firstStageGreen.innerText = `${stateTracking(deckArrays[0], 'green')}`
    firstStageBrown.innerText = `${stateTracking(deckArrays[0], 'brown')}`
    firstStageBlue.innerText = `${stateTracking(deckArrays[0], 'blue')}`
    secondStageGreen.innerText = `${stateTracking(deckArrays[1], 'green')}`
    secondStageBrown.innerText = `${stateTracking(deckArrays[1], 'brown')}`
    secondStageBlue.innerText = `${stateTracking(deckArrays[1], 'blue')}`
    thirdStageGreen.innerText = `${stateTracking(deckArrays[2], 'green')}`
    thirdStageBrown.innerText = `${stateTracking(deckArrays[2], 'brown')}`
    thirdStageBlue.innerText = `${stateTracking(deckArrays[2], 'blue')}`
  } else {
    alert('Выберите Древнего и сложность чтобы замешать колоду!')
  }
  
})




