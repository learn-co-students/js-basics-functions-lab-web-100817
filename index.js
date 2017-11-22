// Code your solution in this file!
function calculateVertical(beginning, destination){
  return ((destination - beginning) * 264);
}

function distanceFromHqInBlocks(location){
  if (location >= 42) {
    return (location - 42);
  } else {
    return (42 - location);
  }
}

function distanceFromHqInFeet(location){
  return (distanceFromHqInBlocks(location) * 264)
}

function distanceTravelledInFeet(beginning, destination){
  if (destination >= beginning){
    return ((destination - beginning) * 264);
  } else {
    return ((beginning - destination) * 264);
  }
}

function calculatesFarePrice(beginning, destination){
  let distance = distanceTravelledInFeet(beginning, destination), price;
  if (distance < 400){
    return 0;
  } else if (distance <= 2000){
    return (distance * 0.02);
  } else if (distance < 2500){
    return 25
  } else {
    return 'cannot travel that far'
  }
}
