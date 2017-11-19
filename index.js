// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(distBlocks) {
  return distanceFromHqInBlocks(distBlocks) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock)
    return (startBlock - endBlock) * 264
  else {
    return (endBlock - startBlock) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start,destination);
    if (feet <= 400) {
      return 0;
    } else if (feet > 400 && feet <= 2000) {
      return feet * .02 ;
    } else if (2000 < feet && feet <=2500) {
      return 25;
    } else {
      return "cannot travel that far";
  }
}
