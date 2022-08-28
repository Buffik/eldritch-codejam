import ancientsData from '../../data/ancients'
console.log(ancientsData.length);

let addAncientCards = (elem) => {
  elem.classList.add('ancient-cards__template')
  elem.classList.add('sibling-fade')
  for (let i = 0; i < ancientsData.length; i++) {
    let el = document.createElement('img')
    el.src = ancientsData[i].cardFace
    el.id = ancientsData[i].id
    el.classList.add('ancient-card')
    elem.append(el)
  }
}



export default addAncientCards