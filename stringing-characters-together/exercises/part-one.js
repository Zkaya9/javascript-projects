let num = (1001);

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let convertedNumber  = num.toString;
let numberLength  = convertedNumber.length;
console.log("Length of number is: " + numberLength);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimalNumber = 1001.0;
let convertedDecimalNumber = 0;

if (decimalNumber.toString().includes('.')) { //checks if it has " . "
    let decimalPart = decimalNumber.toString().split('.')[1]; //if so, split will divide string into two arrays with zero index so 1 makes sure its the part after the " . "
    convertedDecimalNumber = decimalPart.length;
}
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }
