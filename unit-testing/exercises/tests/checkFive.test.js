const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("giving number 2 as input", function(){
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

   test("check how 5 reacts",  function(){
      let output = checkFive(5);
      expect(output).toEqual("5 is equal to 5.");
   });

   test("check how 5 reacts",  function(){
      let output = checkFive(9);
      expect(output).toEqual("9 is greater than 5.");
   });

});