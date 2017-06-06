// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
    if(num1 > num2)
    {
      return num1;
    }
    else{
      return num2;
    }
}

// console.log(max(200, 58998));
// console.log(max(-400, 2));
// console.log(max(223, 221));
// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree([num1,num2,num3]){
  var max = Math.max(num1,num2,num3);
  return max;

}

// console.log(maxOfThree([89, 270, 85]));
// console.log(maxOfThree([27, 25, 26]));
// console.log(maxOfThree([100000, 2, 20924848]));
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(str){
  var letter = str.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var j = 0; j < vowels.length; j++) {
    if(letter == vowels[j]){
            return true;
         }
  }
  return false;
}

// console.log(isVowel('A'));
// console.log(isVowel('a'));
// console.log(isVowel('b'));
// console.log(isVowel('c'));
// console.log(isVowel('e'));
// console.log(isVowel('Y'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sumFunction(num1, num2){
  var sum = num1 + num2;
  return sum;
}
// console.log(sum(3, 700));
// console.log(sum(20, 98778));
// console.log(sum(8778, 1000));
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(num1, num2, num3){
  return (num1+num2+num3)/3;
}
// console.log(avg(20, 27, 37));
// console.log(avg(75, 28, 5));
// console.log(avg(200, 500, 20));
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(str){
  return str.length;
}

// console.log(getLength("word"));
// console.log(getLength('this is a really short string'));
// console.log(getLength('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(arg1, arg2) {
  if (arg1 > arg2) {
    return true;
  }
  else{
    return false;
  }
}

// console.log(greaterThan(2, 7));
// console.log(greaterThan(5, 10));
// console.log(greaterThan(2000, 50));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(string){

  return ("Hello, " + string);
}
// console.log(greet("Garret"));
// console.log(greet("Shannon"));
// console.log(greet("George"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madLib(arg1, arg2, arg3, arg4){
  return ("The " + arg1 + " " + arg2 + " "+ arg3 + " into the " + arg4);
}

// console.log(madLib('cute', 'child', 'jumped', 'pool'));
// console.log(madLib('quick', 'deer', 'jumped', 'garden'));
