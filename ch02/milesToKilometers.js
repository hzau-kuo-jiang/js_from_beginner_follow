function getMilesFromKilometers(kilometers) {
		return kilometers * 1.609344;
}
const kilometers = 130;
console.log(`The distance of ${kilometers} kilometers is equal to ${getMilesFromKilometers(kilometers).toFixed(4)} miles.`);

/*
? The distance of 130 kms is equal to 209.2142 miles
? For reference, 1 mile equals 1.60934 kilometers.
* */