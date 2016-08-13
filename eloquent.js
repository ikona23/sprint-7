
/****************************************
* Chapter 3 Exercises: Functions
*****************************************


#EXERCISE 1: Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can do that ourselves now. Write a function min that
takes two arguments and returns their minimum.
*/


function min(x,y) {
  if(x<y) {
    return x
  }
  else return y;
}

//tests
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(4, 4));
// → 4

/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// function isEven(number) {
//   var whole_number = Math.abs(parseInt(number, 10));
//   if (whole_number === 0) {
//     return true;
//   }
//   if (whole_number === 1) {
//     return false;
//   }
//   return isEven(whole_number - 2);
// }

var isEven = function(num) {
    num = Math.abs(num); //convert value  for negative numbers
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


/*
Bean counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countBs(word) {
  return countChar(word, "B");
}

function countChar(word,char){
var result=0;
for (i=0;i<word.length;i++){
if(word[i]===char){
result+=1;
}
}
return result;
}
// function countChar(word, character) {
//   var total = 0;
//   for (var count = word.length - 1; count > -1; count--) {
//     if (word.charAt(count) === character) {
//       total += 1;
//     }
//   }
//   return total;
// }
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4


// window.onload = function() {
//         what();
//       function what() {
//             document.getElementById('output').innerHTML = '24/7';
//         };
// }
// // ----------------------------
// var square = function(x) {
//   return x * x;
// };
// document.write(square(12));
// // ----------------------------
// var makeNoise = function(){
//   // document.write("<h1>Power No</h1><p>!</p>" + "Make a NOISE")
// };
// makeNoise();
// // ----------------------------
// var power = function(base, exponent) {
//   var result = 1;
//   for (var count = 0; count < exponent; count++)
//     result *= base;
//   return result;
// };
// // ----------------------------
// document.write("<h1>Power No</h1><p>!</p>" +  power(2, 10) + " " + power(5,6) + " " + square(3) + "<br>")
// // ----------------------------
// var x = "outside";
//
//  var f1 = function() {
//    var x = 'inside f1';
//  };
//  f1();
// document.write(" " + x)
//
// var f2 = function() {
//   x = "inside f2";
// };
// f2();
// document.write(" " + x)
// // ----------------------------
// var landscape = function() {
//   var result = "";
//   var flat = function(size) {
//     for (var count = 0; count < size; count++)
//       result += "_";
//   };
//   var mountain = function(size){
//     result += "/";
//     for (var count = 0; count < size;  count++)
//       result+="'";
//       result += "\\";
//   };
//
//   flat(3);
//   mountain(5);
//   flat(2);
//   mountain(1);
//   flat(5);
//   mountain(7);
//   flat(3);
//   return result;
// };
//
// document.write("<br>" + landscape());
// // ----------------------------
// var tripple = function (hds) {
//   return hds * 3
// };
//
// var hds = tripple
// console.log(hds(3));
// // ----------------------------
//
// var double = function (moon) {
//   return moon * 98485798347529
// };
//
// var moon = double
// console.log(double(5))
//
// // ----------------------------

// var books = [
//   {name: 'Cool name for the book', author: 'Pen Writer', type: 'comics'},
//   {name: 'Better book that previus one', author: 'Beterson Masterson', type: 'roman'},
//   {name: 'Not as good', author: 'Stan Stunter', type: 'comics'},
//   {name: 'Shit', author: 'Besterson Winson', type: 'poem'}
// ]
//
// // -----------filter-----------------
// var myBooks = function(book) {
//   return book.type === 'comics'
// }
//
// var poems = books.filter(function(books) {
// return books.type === 'poem'
// })
//
// // var books = []
// // for (var i = 0; i < books.length; i++) {
// //   if (books[i].type === 'poem')
// //     poem.push(books[i])
// // }
// "<br>"
// document.write("<br>" + books.type === "poem" );
// document.write("<br>" + books[0].name );
// document.write('comics');
// -----------push-----------------

// var types = []
// for (var i=0; i<books.length; i++) {
//   types.push(books[i].type)
// }
// var authors = []
// for (var i=0; i<books.length; i++) {
//   authors.push(books[i].author)
// }

// var types
// var names
// var authors = books.map(function(book) {
//   return book.type + " <br> " + 'written by ' + " "+ book.author + " " + book.name
//
// })
// document.write("<br>" + " " + types + " " + "<br>" + authors);

// -----------reduce-----------------

// var products = [
//   {amount: 50},
//   {amount: 150},
//   {amount: 450},
//   {amount: 350},
//   {amount: 150},
// ]
// // var totalAmounth = 0
// // for (var i=0; i < products.length; i++) {
// //   totalAmounth += products[i].amount
// // }
// var totalAmounth = products.reduce(function(sum, products) {
//   console.log("this is a counting", sum, products)
//   return sum + products.amount
// }, 0)
//
// console.log(totalAmounth)
// document.write(totalAmounth)

// -----------moreReduce-----------------

// var sub = 'Peter Kona'{
//   [
//   {name: 'Peter', owed: '100', quantity: '3'},
//   {name: 'John', owed: '425', quantity: '2'},
//   {name: 'Ben', owed: '395', quantity: '1'},
//   {name: 'Kim', owed: '1663', quantity: '6'}
// ],
// var sub = 'John Sever'[
//   {name: 'Peter', owed: '450', quantity: '3'},
//   {name: 'Derek', owed: '4235', quantity: '1'},
//   {name: 'Sivio', owed: '195', quantity: '4'},
//   {name: 'Kimchi', owed: '863', quantity: '6'}
// ],
// }
//
// function zeroPad(number, width) {
//   var string = String(number);
//   while ( string.length < width)
//     string = "0" + string;
//   return string;
// }
//
// function printFarmInventory(cows, chicken, pigs) {
//   console.log(zeroPad(cows, 3) + " Cows");
//   console.log(zeroPad(chicken, 3) + " Chickens");
//   console.log(zeroPad(pigs, 3))
// }
