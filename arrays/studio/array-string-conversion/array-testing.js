let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check;
	let output;
	//TODO: 2. write the code required for this step
	check = strings.includes(',');

	if(check){
		let splitStr = strings.split(',');
		let reversed = splitStr.reverse();
		output = reversed.join(',');
	}else{
		output=strings;
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}


//3)
function semiDash() {
	let check;
	let output;
//TODO: write the code required for this step
	check = strings.includes(';');

	if(check){
		let splittedStr = strings.split(',');
		let ordered = splittedStr.sort();
		output = ordered.join('-');
	}else{
		output=strings;
	}
	return output;
}


//4)
function reverseSpaces() {
	let check;
	let output;
  //TODO: write the code required for this step
	check = strings.includes(' ');

	if(check){
		let splitStr = strings.split(',');
		let reverseAph = splitStr.sor().reverse();
		output = strings.join(' ');
	}else{
		output = strings;
	}

	return output;
}

//5)
function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step
	check = strings.includes(' ,');
	if(check){
		let splitStr = strings.split(',');
		let reverse = splitStr.reverse();
		output = strings.join(',')
	}else{
		output = strings;
	}
  
	return output;
}

	console.log(reverseCommas(this.strings));
	console.log(semiDash(this.strings));
	console.log(reverseSpaces(this.strings)); 
	console.log(commaSpace(this.strings));
  

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
