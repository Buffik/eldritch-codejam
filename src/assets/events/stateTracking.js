let stateTracking = (arr, color) => {
  let result = 0
  arr.forEach(el => {
    if (el.color === color) {
      result++
    } 
  })
  return result
}

export default stateTracking