// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  return Math.abs(number - 42);
}

function distanceFromHqInFeet(number) {
  return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
    return 0;
  }
  else if (distance < 2000) {
    return distance * 0.02;
  }
  else if (distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
