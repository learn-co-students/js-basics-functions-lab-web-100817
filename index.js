// Code your solution in this file!

function distanceFromHqInBlocks(num) {
  let answer;
  num >= 42 ? answer = num - 42 : answer = 42 - num;
  return answer;
}

function distanceFromHqInFeet(num) {
  let blocks = distanceFromHqInBlocks(num)
  return blocks * 264
}

function distanceTravelledInFeet(num1, num2) {
  let blocks;
  num2 >= num1 ? blocks = num2 - num1 : blocks = num1 - num2;
  return blocks * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let fare;
  if (distance < 400) {
    fare = 0;
  } else if (distance >= 400 && distance < 2000) {
    fare = distance * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    fare = 25;
  } else {
    return 'cannot travel that far'
  }
  return fare;
}

calculatesFarePrice(43, 44);