// Code your solution in this file!
function calculateVertical(begin, end) {
  vert = (being, end)*264
  return vert
}
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
      dist = blocks - 42
    } else {
      dist = 42 - blocks
    }
  return dist
}

function distanceFromHqInFeet(blocks) {
  if (blocks > 42) {
    dist = (blocks - 42)*264
  } else {
    dist = (42 - blocks)*264
  }
return dist
}

function distanceTravelledInFeet(begin, end) {
    if (begin > 42) {
      dist = (end - begin)*264
    } else {
      dist = (begin - end)*264
    }
  return dist
}

function calculatesFarePrice(begin, end) {
let  distance = distanceTravelledInFeet(begin, end);
  if (distance < 400) {
     fare = 0;
  } else if (distance > 400 && distance < 2000) {
    fare = distance * 0.02;
  } else if (distance > 2000 && distance < 2499) {
    fare = 25;
  } else {
    return 'cannot travel that far';
  }
  return fare
}
