# JavaScript Interview Questions and Answers

This repository contains a collection of common JavaScript interview questions and their solutions, covering various topics from basic algorithms to more advanced concepts like caching, debouncing, and React components.

## 1. Array Manipulation

### 1.1 Remove Duplicates from an Array

**Question:** Write a function to remove duplicate elements from an array.

**Solution 1: Using `Set`**

```javascript
const removeDuplicate = (arr) => {
  return [...new Set(arr)];
};
```

**Solution 2: Using `filter` and `indexOf`**

```javascript
const removeDuplicate = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
```

### 1.2 Merge Two Arrays

**Question:** Write a function to merge two arrays into one.

**Solution 1: Using Spread Operator**

```javascript
const mergeArray = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
```

**Solution 2: Using `concat` Method**

```javascript
const mergeArray = (arr1, arr2) => {
  return arr1.concat(arr2);
};
```

### 1.3 Flatten a Nested Array

**Question:** Write a function to flatten a nested array.

**Solution 1: Using `flat` Method**

```javascript
const flattenArray = (arr) => {
  return arr.flat(Infinity);
};
```

**Solution 2: Using Recursion with `reduce`**

```javascript
function flattenArray(arr) {
  return arr.reduce(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(flattenArray(item)) : acc.concat(item),
    []
  );
}
```

### 1.4 Find Minimum and Maximum Value in an Array

**Question:** Write a function to find the minimum and maximum values in an array.

**Solution 1: Using `Math.min` and `Math.max`**

```javascript
const numbers = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(`Max value is ${max} and Min value is ${min}`);
```

**Solution 2: Using `forEach` Method**

```javascript
let max = numbers[0];
let min = numbers[0];
numbers.forEach((num) => {
  if (num > max) max = num;
  if (num < min) min = num;
});
console.log(`Max value is ${max} and Min value is ${min} .`);
```

### 1.5 Find Second Largest and Second Smallest Number

**Question:** Write a function to find the second largest and second smallest numbers in an array.

**Second Largest Solution: Using `Set` and `sort`**

```javascript
const secondLargetsNumber = (arr) => {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
};
```

**Second Smallest Solution: Using `Set` and `sort`**

```javascript
const secondSmallestNumber = (arr) => {
  const uniqueArray = [...new Set(arr)];
  uniqueArray.sort((a, b) => a - b);
  return uniqueArray[1];
};
```

## 2. Caching

**Question:** Implement a function that caches the result of an asynchronous function with a time-to-live (TTL).

**Solution:**

```javascript
function cached(fn, ttl = 30000) {
  let cache = new Map();

  return async function (...args) {
    let key = JSON.stringify(args);
    let cachedVal = cache.get(key);
    if (cachedVal && Date.now() < cachedVal.expiresAt) {
      return cachedVal.value;
    }
    let res = await fn(args);

    cache.set(key, {
      data: res,
      expiresAt: Date.now() + ttl,
    });
    return res;
  };
}
```

## 3. Debounce and Throttle

### 3.1 Debounce

**Question:** Implement a debounce function.

**Solution:**

```javascript
function debounce(func, delay = 300) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

### 3.2 Throttle

**Question:** Implement a throttle function.

**Solution:**

```javascript
function throttle(func, limit = 300) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= limit) {
      lastTime = now;
      return func.apply(this, args);
    }
  };
}
```

## 4. Object Manipulation

### 4.1 Flatten Nested Object

**Question:** Write a function to flatten a nested object.

**Solution:**

```javascript
function flattenObject(obj, prefix = "") {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}
```

### 4.2 Sort an Object by Its Values (Descending)

**Question:** Write a function to sort an object by its values in descending order.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const sortedData = Object.fromEntries(Object.entries(marks).sort((a, b) => b[1] - a[1]));
console.log(sortedData);
```

### 4.3 Sort an Object by Its Keys

**Question:** Write a function to sort an object by its keys.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const sorted = Object.fromEntries(Object.entries(marks).sort());
console.log(sorted);
```

### 4.4 Find the Key with the Highest Value

**Question:** Write a function to find the key with the highest value in an object.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const topMarks = Object.keys(marks).reduce((a, b) => marks[a] > marks[b] ? a : b);
console.log(topMarks);
```

### 4.5 Find the Key with the Lowest Value

**Question:** Write a function to find the key with the lowest value in an object.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const low = Object.keys(marks).reduce((a, b) => marks[a] < marks[b] ? a : b);
console.log(low);
```

### 4.6 Convert Object to Array of Objects

**Question:** Write a function to convert an object to an array of objects with key-value pairs.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const result = Object.entries(marks).map(([title, score]) => ({ title, score }));
console.log(result);
```

### 4.7 Filter Object by Values

**Question:** Write a function to filter an object to include only entries where the value is greater than a specified number.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const filteredData = Object.fromEntries(Object.entries(marks).filter(([, score]) => score > 20));
console.log(filteredData);
```

### 4.8 Count Character Occurrences in a String

**Question:** Write a function to count the occurrences of each character in a string using an object.

**Solution:**

```javascript
const str = "strawberrystrawberry";
let count = {};
for (let char of str) {
  count[char] = (count[char] || 0) + 1;
}
console.log(count);
```

### 4.9 Group Array of Objects by a Property

**Question:** Write a function to group an array of objects by a specific property.

**Solution:**

```javascript
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 21 },
  { name: "D", age: 20 },
  { name: "F", age: 21 },
];
const grouped = users.reduce((acc, user) => {
  acc[user.age] = acc[user.age] || [];
  acc[user.age].push(user);
  return acc;
}, {});
console.log(grouped);
```

### 4.10 Remove a Key from an Object Without Mutating

**Question:** Write a function to remove a key from an object without mutating the original object.

**Solution:**

```javascript
const obj = { name: "Ranjana", age: 24 };
const { age, ...rest } = obj;
console.log(rest);
```

### 4.11 Check if Two Objects Have the Same Properties

**Question:** Write a function to check if two objects have the same properties (keys), regardless of order.

**Solution:**

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, a: 4 };
const sameKeys = JSON.stringify(Object.keys(obj1).sort()) === JSON.stringify(Object.keys(obj2).sort());
console.log(sameKeys);
```

### 4.12 Convert Array of Objects to Object

**Question:** Write a function to convert an array of objects to an object keyed by a specific property.

**Solution:**

```javascript
const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];
const objArr = arr.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
console.log(objArr);
```

### 4.13 Find Keys with Duplicate Values in an Object

**Question:** Write a function to find keys that have duplicate values in an object.

**Solution:**

```javascript
const data = { a: 1, b: 2, c: 1, d: 3 };
const duplicates = Object.entries(data)
  .filter(([, v], _, arr) => arr.filter(([, val]) => val === v).length > 1)
  .map(([k]) => k);
console.log(duplicates);
```

### 4.14 Sum All Values in an Object

**Question:** Write a function to sum all numeric values in an object.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const total = Object.values(marks).reduce((sum, v) => sum + v, 0);
console.log(total);
```

### 4.15 Find Object Key by Value

**Question:** Write a function to find the key of an object by its value.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const objKey = Object.keys(marks).find(key => marks[key] === 12);
console.log(objKey);
```

### 4.16 Transform Object Values

**Question:** Write a function to transform (e.g., double) all values in an object.

**Solution:**

```javascript
const marks = { a: 12, d: 45, e: 23, b: 70, c: 16 };
const doubled = Object.fromEntries(Object.entries(marks).map(([key, val]) => [key, val * 2]));
console.log(doubled);
```

### 4.17 Sort an Object by Its Values (Ascending)

**Question:** Write a function to sort an object by its values in ascending order.

**Solution:**

```javascript
const obj = { a: 10, b: 5, c: 20 };
const newObj = Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]));
console.log(newObj);
```

### 4.18 Find First Key with Value Greater Than a Number

**Question:** Write a function to find the first key in an object where the value is greater than a specified number.

**Solution:**

```javascript
const obj = { a: 10, b: 5, c: 20 };
const key = Object.keys(obj).find(item => obj[item] > 10);
console.log(key);
```

### 4.19 Reverse Keys and Values in an Object

**Question:** Write a function to reverse the keys and values in an object.

**Solution:**

```javascript
const data = { a: 1, b: 2, c: 3 };
const reverseData = Object.fromEntries(Object.entries(data).map(([k, v]) => [v, k]));
console.log(reverseData);
```

### 4.20 Remove Keys with Falsy Values

**Question:** Write a function to remove keys from an object that have falsy values.

**Solution:**

```javascript
const obj = { a: 0, b: 1, c: "", d: 4 };
const cleaned = Object.fromEntries(Object.entries(obj).filter(([, v]) => v));
console.log(cleaned);
```

### 4.21 Count Total Number of Keys in a Nested Object

**Question:** Write a recursive function to count the total number of keys in a nested object.

**Solution:**

```javascript
const countKeys = obj =>
  Object.values(obj).reduce(
    (c, v) => c + (typeof v === "object" && v !== null ? countKeys(v) : 0),
    Object.keys(obj).length
  );

console.log(countKeys({ a: 1, b: { c: 2, d: { e: 3 } } }));
```

## 5. Other Algorithms

### 5.1 Count Letters in a Word

**Question:** Write a function to count the occurrences of each letter in a word.

**Solution:**

```javascript
function countLetters(word) {
  const count = {};
  for (let char of word) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}
```

### 5.2 Reverse a String

**Question:** Write a function to reverse a string.

**Solution:**

```javascript
function reverseStr(word) {
  let res = "";
  for (let i = word.length - 1; i >= 0; i--) {
    res += word[i];
  }
  return res;
}
```

### 5.3 Palindrome Check

**Question:** Write a function to check if a string is a palindrome.

**Solution:**

```javascript
function isPalindrome(str) {
  let revesrseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revesrseStr += str[i];
  }
  if (str == revesrseStr) {
    console.log("Yes ");
  } else {
    console.log("NO");
  }
}
```

### 5.4 Factorial

**Question:** Write a function to calculate the factorial of a number.

**Solution:**

```javascript
function factorialNum(n) {
  if (n < 0) {
    return undefined;
  }
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}
```

### 5.5 FizzBuzz

**Question:** Write a function that prints numbers from 1 to n. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

**Solution:**

```javascript
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 == 0) {
      output += "Fizz";
    }
    if (i % 5 == 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
}
```

### 5.6 Extract and Sum Numbers from String

**Question:** Write a function to extract and sum all the numbers from a string.

**Solution:**

```javascript
const str = "1syhg55gh234";

const result = str
  .match(/\d+/g)
  .map(Number)
  .reduce((a, b) => a + b, 0);
```

## 6. React Components

This repository also includes React projects demonstrating a simple pagination component and a chip input component. You can find them in the `react-pagination`, `reactjs/first`, and `reactjs/pagination` directories.
