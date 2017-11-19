// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return (distanceFromHqInBlocks(street) * 264);
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end) * 264);
}

function calculatesFarePrice(start, end) {
  const distanceTravelled = distanceTravelledInFeet(start, end);
  if (distanceTravelled < 400) {
    return 0;
  } else if (distanceTravelled >= 400 && distanceTravelled < 2000) {
    return (distanceTravelled * .02);
  }
  else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
