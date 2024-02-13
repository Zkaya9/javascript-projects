//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

let ascending1 = nums1.sort(function(a, b){return a-b}); 
let ascending2 = nums2.sort(function(a, b){return a-b});
let ascending3 = nums3.sort(function(a, b){return a-b}); 

console.log(ascending1); 
console.log(ascending2); 
console.log(ascending3);

//Sort each array in decending order.

let descending1 = nums1.sort(function(a, b){return b-a});
let descending2 = nums2.sort(function(a, b){return b-a}); 
let descending3 = nums3.sort(function(a, b){return b-a});

console.log(descending1);
console.log(descending2); 
console.log(descending3); 