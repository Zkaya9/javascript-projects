//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charAt(0).concat(language.charAt(4)));


//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let initial = "JS";

console.log(`The abbriviation for '${language}' is '${initial}'`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log()
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';



/** 
 *
let pluralNoun = "nouns";
let name = "you";
let verb = "work";
let adjective = "powerful";
let color = "vibrant";

console.log(`JavaScript provides a ${color} collection of tools — including ${adjective} syntax and ${pluralNoun} — that allows ${name} to ${verb} with strings.`);

**/