// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

    test('if organization is nonprofit', function() {
      expect(launchcode.organization).toEqual("nonprofit");
    });

    test('if execute director is Jeff', function() {
      expect(launchcode.executiveDirector).toEqual("Jeff");
    });

    test('if percentage cool employees  is 100', function() {
      expect(launchcode.percentageCoolEmployees).toEqual(100);
    });

    test('if execute director is Jeff', function() {
      expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
    });

    test('When passed a number that is ONLY divisible by 2, launchOutput() returns Launch!', function(){
      expect(launchcode.launchOutput(2)).toEqual('Launch!');
    });

    test('When passed a number that is ONLY divisible by 3, launchOutput() returns Code!', function(){
      expect(launchcode.launchOutput(3)).toEqual('Code!');
    });

    test('When passed a number that is ONLY divisible by 5, launchOutput() returns Rocks!', function(){
      expect(launchcode.launchOutput(5)).toEqual('Rocks!');
    });

    test('When passed a number that is divisible by 2 AND 3, launchOutput() returns LaunchCode!', function(){
      expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
    });

    test('launchOutput returns "Code Rocks!" for numbers divisible by 3 and 5', function() {
      expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
    });
  
    test('launchOutput returns "Launch Rocks!" for numbers divisible by 2 and 5', function() {
      expect(launchcode.launchOutput(10)).toEqual('Launch Rocks!');
    });
  
    test('launchOutput returns "LaunchCode Rocks!" for numbers divisible by 2, 3, and 5', function() {
      expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
    });
  
    test('launchOutput returns "Rutabagas! That doesn\'t work." for numbers not divisible by 2, 3, or 5', function() {
      expect(launchcode.launchOutput(7)).toEqual('Rutabagas! That doesn\'t work.');
    });


  // Write your unit tests here!
  
});