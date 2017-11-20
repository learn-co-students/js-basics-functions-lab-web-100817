function distanceFromHqInBlocks(pickup) {
    blocks = Math.abs(42 - pickup);
    return blocks
}

function distanceFromHqInFeet(pickup) {
  feet = distanceFromHqInBlocks(pickup) * 264;
  return feet
}

function distanceTravelledInFeet(pickup, dropoff) {
  distance = Math.abs(pickup - dropoff) * 264;
  return distance
}

function calculatesFarePrice(pickup, dropoff) {
  const distance = distanceTravelledInFeet(pickup, dropoff);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return distance * .02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return "cannot travel that far";
  }
}
