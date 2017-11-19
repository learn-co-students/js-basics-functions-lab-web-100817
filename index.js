// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block<42) {
    return 42-block
  } else {
    return block-42
  }
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264
}

function distanceTravelledInFeet(start,end){
  if (start < end){
    return ((end-start)*264)
  } else {
     return ((start-end)*264)
  }
}

function calculatesFarePrice(start,end){
  if (distanceTravelledInFeet(start,end)>2500){
    return 'cannot travel that far'
  } else if (distanceTravelledInFeet(start,end)>2000) {
    return 25
  } else if (distanceTravelledInFeet(start,end)<=264) {
    return 0
  } else {
    return distanceTravelledInFeet(start,end)*.02
  }
}
