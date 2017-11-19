// Code your solution in this file!
function distanceFromHqInBlocks(destination){
  return Math.abs(42 - destination)
}

function distanceFromHqInFeet(destination){
  return  distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet (starting, ending) {
  return Math.abs(ending - starting) * 264
}


function calculatesFarePrice (starting, ending) {
  const travelled = distanceTravelledInFeet(starting, ending);
  if (travelled <= 400) {
    return 0;
  }
  else if (travelled > 400 && travelled <= 2000) {
    return travelled * .02
  }
  else if (2000 < travelled && travelled <= 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
