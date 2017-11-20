// Code your solution in this file!
function distanceFromHqInBlocks(location){
  let distance= location - 42
  return Math.abs(distance)
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end){
  return  Math.abs((end * 264) - (start * 264))
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
