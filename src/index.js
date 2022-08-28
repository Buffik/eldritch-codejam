import addAncientCards from "./assets/components/ancients";
import renderDifficulties from "./assets/components/difficults";
import renderStartButton from "./assets/components/startButton";
import renderCurrentState from "./assets/components/deck-container/current state";
import renderLastCard from "./assets/components/deck-container/last-card";
import renderDeck from "./assets/components/deck-container/deck";
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



let cards = document.querySelectorAll('.ancient-card')
let cardsTemplateBase = document.querySelector('.ancient-cards__template')

let difficulties = document.querySelectorAll('.difficulty')
let difficultiesTemplate = document.querySelector('.difficulty__template')

cardsTemplateBase.addEventListener('click', (event) => {
  cards.forEach(elem => elem.classList.remove('clicked_item'))
  event.target.classList.add('clicked_item')
})

difficultiesTemplate.addEventListener('click', (event) => {
  difficulties.forEach(elem => elem.classList.remove('clicked_difficulty'))
  event.target.classList.add('clicked_difficulty')
})

