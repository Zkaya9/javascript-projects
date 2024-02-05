function sayHello() {
   console.log("Hello, World!");
}


function makeLine(size){
   let line = '';
   for (i = 0 ; i < size; i++){
      line += '#'
   }
   return line;
}
console.log(makeLine(5));


function makeSquare (size){
   let square = '';        // initializing  empty to store the  square in
   for (let i  = 0; i <size; i++){  // itarates through each row of the square
      square += makeLine(size); // calls makeLine function to  create line of hashes then adds it to square string

      if ( i< size -1){  //adds a new line at the end of each row except last one
         square += '\n';
      }
   }
return square;

}

console.log(makeSquare(5))


function makeRectangle(width, height) {
   let rectangle = '';
   for (let i = 0; i < height; i++) {
     rectangle += (makeLine(width) + '\n');
   }
   return rectangle.slice(0, -1);
 }

 
 function makeDownwardStairs(height) {
   let stairs = '';
   for (let i = 0; i < height; i++) {
     stairs += (makeLine(i+1) + '\n');
   }
   return stairs.slice(0, -1);
 }

 function makeIsoscelesTriangle(height) {
   let triangle = '';
   for (let i = 0; i < height; i++) {
     triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
   }
   return triangle.slice(0, -1);
 }