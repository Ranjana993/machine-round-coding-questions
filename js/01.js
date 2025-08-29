//?1 Write a function to remove duplicate from an array
// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 1];
//! 01. Using Set
// const removeDuplicate = (arr) =>{
//   return [new Set(arr)]
// }
// let res = removeDuplicate(arr);
// console.log(res);

// ! 02. Using filter and indexOf
// const removeDuplicate = (arr) => {
//   return arr.filter((item, index) => arr.indexOf(item) === index
//   )
// }
// let res = removeDuplicate(arr)
// console.log(res);



//?2 merge two array into one.
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// 01.uaing spread operator
// const mergeArray = (arr1 , arr2) =>{
//   return [...arr1 , ...arr2]
// }
// console.log(mergeArray(arr1 , arr2));

// ! 02. using concat method
// const mergeArray = (arr1 , arr2)=>{
//   return arr1.concat(arr2)
// }
// console.log(mergeArray(arr1,arr2))





// ? 3 Write a function to flatten a nested array
// const nestedArr = [
//   1, 2,
//   [3, 4],
//   [5, 6],
//   [[7, 8, [9, 10, [11, 12]]]], 13
// ];

//! 01. using flat method
// const flattenArray = (arr) => {
//   return arr.flat(Infinity)
// }
// console.log(flattenArray(nestedArr));


// ! 02. using recursion with reduce method
// function flattenArray(arr) {
//   return arr.reduce(
//     (acc, item) => Array.isArray(item) ? acc.concat(flattenArray(item)) : acc.concat(item), []
//   )
// }
// console.log(flattenArray(nestedArr));


//? 4 Write a fucntion to find the minimum and maximum value in an array
// const numbers = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];

// !01. using Math.min and Math.max
// const max = Math.max(...numbers)
// const min = Math.min(...numbers)
// console.log(`Max value is ${max} and Min value is ${min}`);

//! 02. using  forEach method
// let max = numbers[0];
// let min = numbers[0];
// numbers.forEach(num => {
//   if (num > max) max = num;
//   if (num < min) min = num;
// })
// console.log(`Max value is ${max} and Min value is ${min} .`);


// ? 5 Write a function to return the second largewst number in an array
const arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
// ! 01. using sort method and remove duplicate using Set

const secondLargetsNumber = (arr) => {
  const uniqueArr = [... new Set(arr)]
  uniqueArr.sort((a, b) => b - a)
  return uniqueArr[1]
}
console.log(secondLargetsNumber(arr));

// ! 02 No sorting method
const findSecondLargetsNumber = (arr) => {
  let max = 0;
  let secondMax = 0
  for(let num in arr ){
    if(arr[num] > max){
      secondMax= max
      max = arr[num]
    }
  }
}



// ? 5 Write a function to return the second smallest number in an array
const arr1 = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, -6];
// ! 01. using sort method and remove duplicate using Set
const secondSmallestNumber = (arr) => {
  const uniqueArray = [...new Set(arr)];
  uniqueArray.sort((a, b) => a - b)
  return uniqueArray[1]
}
console.log(secondSmallestNumber(arr1));

