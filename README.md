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
