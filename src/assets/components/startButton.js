let renderStartButton = () => {
  let el = document.createElement('button')
  el.innerText = 'Замешать'
  el.classList.add('start-button')
  document.body.append(el)
}



export default renderStartButton