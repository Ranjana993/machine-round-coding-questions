// ! 1. Reverse a String
// let  string  = "long"

// function reverseStr(word){
//   let res ="";
//   for (let i = word.length-1 ; i>=0 ; i--){
//     res += word[i];
//   }
//   return res;
// }

// console.log(reverseStr("array"))

//! 2. Palindrome Check
// function isPalindrome(str){
//   let revesrseStr ="";
//   for(let i = str.length-1 ; i>=0 ; i--){
//     revesrseStr += str[i];
//   }
//   if(str == revesrseStr){
//     console.log("Yes ");
//   }
//   else{
//     console.log("NO")
//   }
// }

// isPalindrome("madam")

// !3. Find Maximum Number
// function findMax(arr){
//   if(arr.length == 0) return;

//   let maxNum = 0;
//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > maxNum){
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }
// let array = [2,3,5,1,8,12,9];
// let ans = findMax(array)
// console.log(ans)


//! 4. Count Vowels
// function countVowel(str){
//   let vowel = "aeiouAEIOU";
//   let count = 0;
//   for(let i = 0 ; i < str.length ; i++){
//     for(let j = 0 ; j < vowel.length; j++){
//       if(str[i] == vowel[j]){
//         count++;
//         break;
//       }
//     }
//   }
//   return count;
// }
// console.log(countVowel("Locaalhosta"))


//! 5. Factorial
// function factorialNum(n){
//   if(n < 0) {
//     return undefined;
//   }
//   let res = 1;
//   for(let i = 2 ; i<= n ; i++){
//     res *= i
//   }
//   return res;
// }
// console.log(factorialNum(5))

//! 6. FizzBuzz
// function fizzbuzz(n){
//   for(let i = 0 ; i<=n ; i++){
//     let output = "";
//     if (i % 3 == 0) {
//       output += "Fizz";
//     }
//     if (i % 5) {
//       output += "Buzz"
//     }
//     console.log(output || i);
//   }
// }
// fizzbuzz(15)

// ! 7. Remove Duplicates
// function removeDuplicate(arr){
//   let res = [];
//   let seen ={};
//   for(let i = 0 ; i < arr.length ; i++){
//     if(!seen[arr[i]]){
//       seen[arr[i]] = true;
//       res[res.length] = arr[i];
//     }
//   }
//   return res;
// }
// console.log(removeDuplicate([23,24,25,26,78,78,46]))


// ! Problem 1: Flatten Nested Object

// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f:5,
//       g:{
//         h:12,
//       }
//     }
//   }
// };
// function flattenObject(obj, prefix = '', result = {}) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const newKey = prefix ? `${prefix}.${key}` : key;

//       if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//         flattenObject(obj[key], newKey, result);
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   }
//   return result;
// }

// function flattObj(obj , prefix='' , res={}){
//   for(let key in obj){
//     let newKey = prefix ? `${prefix}.${key}`: key;
//     if(typeof obj[key] ==='object' && obj[key] !== null && !Array.isArray(obj[key])){
//       flattObj(obj[key] , newKey , res);
//     }
//     else{
//       res[newKey] = obj[key];
//     }
//   }
//   return res
// }
// console.log(flattObj(obj));


// ! Problem 2: Extract and Sum Numbers from String
// const str = "1syhg55gh234"; // 234+55+1 = 290

// function sumNumbersFromString(str) {
//   let sum = 0;
//   let currentNumber = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     // Check if character is a digit (0-9)
//     if (char >= '0' && char <= '9') {
//       // Build the number digit by digit
//       currentNumber = currentNumber * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0));
//     } else {
//       // When we hit a non-digit, add the completed number to sum
//       sum += currentNumber;
//       currentNumber = 0;
//     }
//   }

  // Add the last number if there is one
//   sum += currentNumber;

//   return sum;
// }

const str = "1syhg55gh234";

const result = str
  .match(/\d+/g)
  .map(Number)
  .reduce((a, b) => a + b, 0);

console.log(result);
// console.log(sumNumbersFromString(str)); // Output: 240
