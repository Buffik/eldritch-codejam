let showCard = (arr) => {
  let result = ''
  if (arr[0].length > 0) {
    result = arr[0].shift()
    return result.cardFace
  } else if (arr[1].length > 0) {
    result = arr[1].shift()
    return result.cardFace
  } else if (arr[2].length > 0) {
    result = arr[2].shift()
    return result.cardFace
  }

  if ((arr[0].length === 0) && (arr[1].length === 0) && (arr[2].length === 0)) {
    return result
  }
}

export default showCard