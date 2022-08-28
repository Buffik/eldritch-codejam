import addAncientCards from "./assets/components/ancients";
import renderDifficulties from "./assets/components/difficults";
import renderStartButton from "./assets/components/startButton";
import renderCurrentState from "./assets/components/deck-container/current state";
import renderLastCard from "./assets/components/deck-container/last-card";
import renderDeck from "./assets/components/deck-container/deck";
import shuffleArray from "./assets/events/shuffleArray";
import getRandomNum from "./assets/events/getRAndomNumber";
import bigFunction from "./assets/events/createDeck";
import showCard from "./assets/events/showCard";
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

startButton.addEventListener('click', ()=> {
  if ((currentAncient !== undefined) && (currentDifficulty !== undefined)) {
    deckContainer1.classList.remove('hidden')
  } else {
    alert('Выберите Древнего и сложность чтобы замешать колоду!')
  }
  
})

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

deck.addEventListener('click', ()=> {
  console.log(deckArrays);

  last.style.backgroundImage = `url(${showCard(deckArrays)})`
})


