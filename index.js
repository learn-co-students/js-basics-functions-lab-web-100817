// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber) * 264;
};

function distanceTravelledInFeet(startingBlock, endingBlock){
  return Math.abs(endingBlock - startingBlock ) * 264;
};

function calculatesFarePrice(start, destination){
  const total_distance = distanceTravelledInFeet(start, destination);
  if (total_distance < 400){
    return 0;
  }
  else if (total_distance > 400 && total_distance <= 2000 ) {
    return total_distance * .02;
  }
  else if (total_distance > 2000 && total_distance < 2500){
    return 25;
  }
  else {
    return "cannot travel that far"
  }
};
