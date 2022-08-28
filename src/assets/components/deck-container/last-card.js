import { brownCards, blueCards, greenCards } from '../../../data/mythicCards/index'

let renderLastCard = (elem, parent) => {
  elem.classList.add('last-card')
  parent.appendChild(elem)
}

export default renderLastCard