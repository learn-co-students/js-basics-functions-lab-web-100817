// Code your solution in this file!
const headquarters = 42;

function calculateVertical(startingDest, endingDest) {
  return Math.abs((endingDest - startingDest) * 264);
}

function distanceFromHqInBlocks(endingDest) {
    return Math.abs(headquarters - endingDest);
}

function distanceFromHqInFeet(endingDest) {
    return calculateVertical(headquarters, endingDest);
}

function distanceTravelledInFeet(startingDest, endingDest) {
  return calculateVertical(startingDest, endingDest);
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination)  < 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) >= 400 &&  distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) * .02);
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return 'cannot travel that far';
  }
}
