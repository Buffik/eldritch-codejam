import ancientsData from "../../data/ancients";
import { brownCards, blueCards, greenCards } from '../../data/mythicCards/index'
import shuffleArray from './shuffleArray'
import createStage from './createStages'

let bigFunction = (currentAncient) => {
  shuffleArray(brownCards)
  shuffleArray(blueCards)
  shuffleArray(greenCards)

  let first = ancientsData[checkScheme(currentAncient)].firstStage
  let second = ancientsData[checkScheme(currentAncient)].secondStage
  let third = ancientsData[checkScheme(currentAncient)].thirdStage

  let greenCardsCount = first.greenCards + second.greenCards + third.greenCards
  let blueCardsCount = first.blueCards + second.blueCards + third.blueCards
  let brownCardsCount = first.brownCards + second.brownCards + third.brownCards

  // let cardsCountFirstStage = first.greenCards + first.brownCards + first.blueCards
  // let cardsCountSecondStage = second.greenCards + second.brownCards + second.blueCards
  // let cardsCountThirdStage = third.greenCards + third.brownCards + third.blueCards

  
  let countsArr = [greenCardsCount, brownCardsCount, blueCardsCount]

  let greenCardsArr = []
  let brownCardsArr = []
  let blueCardsArr = []

  for (let i = 0; i < countsArr.length; i++) {
    for (let j = 0; j < countsArr[i]; j++) {
      if (i === 0) {
        greenCardsArr.push(greenCards[j])
      } else if (i === 1) {
        brownCardsArr.push(brownCards[j])
      } else if (i === 2) {
        blueCardsArr.push(blueCards[j])
      }
    }
  }

  let firstStageArr = []
  let secondStageArr = []
  let thirdStageArr = []

  createStage(first, firstStageArr, greenCardsArr, brownCardsArr, blueCardsArr)
  createStage(second, secondStageArr, greenCardsArr, brownCardsArr, blueCardsArr)
  createStage(third, thirdStageArr, greenCardsArr, brownCardsArr, blueCardsArr)

  return [shuffleArray(firstStageArr), shuffleArray(secondStageArr), shuffleArray(thirdStageArr)]
}

export default bigFunction

let checkScheme = (id) => {
  let currentAncientCard = 0;
  switch (id) {
    case 'azathoth':
      return currentAncientCard = 0;

    case 'cthulhu':
      return currentAncientCard = 1;
  
    case 'iogSothoth':
      return currentAncientCard = 2;

    case 'shubNiggurath':
      return currentAncientCard = 3;
  }
}

