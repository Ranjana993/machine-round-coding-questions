function flattenObject(obj, prefix = '') {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // Recursively flatten nested objects
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        // Add primitive values directly
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}

// Example usage:
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

console.log(flattenObject(obj));
// Output: { "a": 1, "b.c": 2, "b.d.e": 3 }