let renderCurrentState = (elem, parent) => {
  parent.classList.add('deck-container')
  document.body.appendChild(parent)

  elem.classList.add('current-state')
  parent.appendChild(elem)
  

  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        let el1 = document.createElement('div')
        el1.classList.add('stage-container')
        el1.innerHTML = `
        <span class="stage-text">Первая стадия</span>
        <div class="dots-container">
          <div class="dot green">0</div>
          <div class="dot brown">0</div>
          <div class="dot blue">0</div>
        </div>
        `;
        
        elem.appendChild(el1)
        break;

        case 1:
          let el2 = document.createElement('div')
          el2.classList.add('stage-container')
          el2.innerHTML = `
          <span class="stage-text">Вторая стадия</span>
          <div class="dots-container">
            <div class="dot green">0</div>
            <div class="dot brown">0</div>
            <div class="dot blue">0</div>
          </div>
          `;
          
          elem.appendChild(el2)
          break;

        case 2:
          let el3 = document.createElement('div')
          el3.classList.add('stage-container')
        el3.innerHTML = `
        <span class="stage-text">Третья стадия</span>
        <div class="dots-container">
          <div class="dot green">0</div>
          <div class="dot brown">0</div>
          <div class="dot blue">0</div>
        </div>
        `;
        elem.appendChild(el3)
        break;
      
    }
  }


}



export default renderCurrentState