// Code your solution in this file!
function distanceFromHqInBlocks(n) {
	return Math.abs(42 - n)
}

function distanceFromHqInFeet(n) {
	return Math.abs(42 - n) * 264
}

function distanceTravelledInFeet(a, b) {
	return Math.abs(a - b) * 264
}

function calculatesFarePrice(start, destination) {
	let feetDistance = distanceTravelledInFeet(start, destination)
	if (feetDistance < 400) {
		return 0
	} else if (feetDistance < 2000) {
		return feetDistance * 0.02
	} else if (feetDistance < 2500) {
		return 25
	} else {
		return 'cannot travel that far'
	}
}

