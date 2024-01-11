// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
const spaceShuttle = "Determination";
const  shuttleSpeedMPH = 17500;
const distanceToMarsKM = 225000000;
const distanceToMoonKM = 384400;
const milesPerKm = 0.621;

console.log(typeof spaceShuttle);
console.log(typeof  shuttleSpeedMPH);
console.log(typeof distanceToMarsKM);
console.log(typeof distanceToMoonKM);
console.log(typeof milesPerKm);

const milesToMars = distanceToMarsKM * milesPerKm;
const hoursToMars = milesToMars / shuttleSpeedMPH;
const daysToMars = hoursToMars / 24;


console.log(spaceShuttle + ' will take ' + daysToMars + ' days to reach Mars.');


const milesToMoon = distanceToMoonKM * milesPerKm;
const hoursToMoon = milesToMoon / shuttleSpeedMPH;
const daysToMoon = hoursToMoon / 24;


console.log(spaceShuttle + ' will take ' + daysToMoon + ' days to reach the Moon.');


