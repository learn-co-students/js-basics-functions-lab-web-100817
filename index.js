// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    this.distance = distance
    if (distance >= 42) {
    return (distance - 42)
  }
    else {
      return (42 - distance)
    }
}

function distanceTravelledInFeet(beginning,end){
  this.beginning = beginning
  this.end = end
  return Math.abs(((end - beginning)* 264))
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264
}

function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start,destination)
  switch (true){
    case (distance > 2500):
    return 'cannot travel that far';
    break;
    case (distance > 2000):
      return 25;
      break;
    case (distance > 400):
      return distance * 0.02;
      break;
    case (distance <= 400):
      return 0;
      break;
  }
}
