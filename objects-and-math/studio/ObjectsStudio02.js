// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  // Calculate the circumference using the formula C = 2πr
  const circumference = 2 * Math.PI * radius;

  return Math.round(circumference);
}

// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
  // Calculate the time it will take to complete the orbits (time = distance/speed)
  const time = (numOrbits * orbitCircumference(orbitRadius)) / orbitalSpeed;

  // Round the answer to 2 decimal places
  const roundedTime = time.toFixed(2);

  return roundedTime;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  // Select a random index from the array
  let randomIndex = Math.floor(Math.random() * arr.length);
  
  // Return the selected entry
  return arr[randomIndex];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, numOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
  // Use missionDuration to calculate the spacewalk time
  const spacewalkTime = missionDuration(numOrbits, orbitRadius, orbitalSpeed);

  // Calculate the amount of oxygen consumed during the spacewalk
  const oxygenUsed = candidate.o2Used(spacewalkTime);

  // Round the oxygen consumption to 3 decimal places
  const roundedOxygenUsed = oxygenUsed.toFixed(3);

  // Return the formatted string
  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${roundedOxygenUsed} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 