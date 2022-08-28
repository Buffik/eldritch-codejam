import difficulties from '../../data/difficulties'


let renderDifficulties = (elem) => {
  elem.classList.add('difficulty__template')
  elem.classList.add('sibling-fade-difficulties')
  for (let i = 0; i < difficulties.length; i++) {
    let el = document.createElement('div')
    el.innerText = difficulties[i].name
    el.id = difficulties[i].id
    el.classList.add('difficulty')
    elem.append(el)
  }
}



export default renderDifficulties