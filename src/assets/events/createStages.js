let createStage = (stage, targetArray, greenCardsArr, brownCardsArr, blueCardsArr) => {
  if (stage.greenCards > 0) {
    for (let i = 0; i < stage.greenCards; i++) {
    targetArray.push(greenCardsArr.pop());
    }
  } 
  if (stage.brownCards > 0) {
    for (let i = 0; i < stage.brownCards; i++) {
      targetArray.push(brownCardsArr.pop());
      }
  } 
  if (stage.blueCards > 0) {
    for (let i = 0; i < stage.blueCards; i++) {
      targetArray.push(blueCardsArr.pop());
      }
  }
}

export default createStage