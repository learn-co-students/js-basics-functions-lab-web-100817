// Code your solution in this file!
const home = 42;
// function distanceFromHqInBlocks(dest) {
//   let dist;
//   switch (true) {
//     case dest >= home:
//       dist = dest - home;
//       break;
//     case dest < home:
//       dist = home - dest;
//       break;
//   }
//   return dist;
// }

function distanceFromHqInBlocks(dest, orig = home) {
  let dist;
  dist = dest - orig;
  return dist >= 0 ? dist :  -dist;
}

function distanceFromHqInFeet(dest, orig) {
  return distanceFromHqInBlocks(dest, orig) * 264;
}

function distanceTravelledInFeet(dest, orig) {
  return distanceFromHqInFeet(dest, orig);
}

function calculatesFarePrice(dest, orig) {
  let feet = distanceTravelledInFeet(dest, orig);
  switch (true) {
    case feet <= 400:
      return 0;
    case feet > 400 && feet <= 2000:
      return feet * 0.02;
    case feet > 2000 && feet <= 2500:
      return 25;
    default:
      return 'cannot travel that far';
  }
}
