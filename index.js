// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42-block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(x, y) {
  return Math.abs(distanceFromHqInFeet(x)-distanceFromHqInFeet(y))
}

function calculatesFarePrice(x, y) {
  const dist = distanceTravelledInFeet(x, y)
  let cost

  if (dist <= 400) {
    cost = 0
  } else if ( dist <= 2000) {
    cost = dist * 0.02
  } else if (dist > 2000 & dist <= 2500) {
    cost = 25
  } else {
    return 'cannot travel that far'
  }
  return cost
}
