// homework_2

// execise_1
function sum(array = []) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// exercise_2
function random(lower, upper) {
  return Math.floor(Math.random() * upper + lower);
}

// exercise 3
function arithmeticMean(array = []) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;
  return average;
}

// exercise 4
function geometricMean(array = []) {
  let multiple = 1;
  for (let i = 0; i < array.length; i++) {
    multiple *= array[i];
  }
  geometricMean = Math.pow(multiple, 1 / array.length);
  return geometricMean;
}

// exercise 5
function euclidianDistance([x1 = 0, y1 = 0], [x2 = 0, y2 = 0]) {
  const dx = Math.pow(x2 - x1, 2);
  const dy = Math.pow(y2 - y1, 2);
  return Math.sqrt(dx + dy);
}

// exercise 6
function pickOne(array) {
  const randomIndex = random(0, array.length - 1);
  return array[randomIndex];
}

// exercise 7
function includes(array, b) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == b) {
      return true;
    }
  }
  return false;
}

// exercise 8
function unique(array) {
  let remove = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    let found = false;

    for (let j = i + 1; j < array.length; j++) {
      if (current === array[j]) {
        found = true;
      }
    }

    if (!found) {
      remove.push(current);
    }
  }
  return remove;
}

// exercise 9
function intersection(array1, array2) {
  result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        result.push(array2[j]);
      }
    }
  }
  return result;
}

// exercise 10
function flat2D(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr3 = [...arr1, ...arr2];
    }
  }
  return arr3;
}

// exercise 11
function union(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}

// another solution
function union(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr3 = [...arr1, ...arr2];
    }
  }
  return arr3;
}

// exercise 12
function reverseNumber(num) {
  let reversed = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

// exercise 13
function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const callbacResult = callback(arr[i]);
    result.push(callbacResult);
  }
  return result;
}

//  exercise 14
function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const callbacResult = callback(arr[i]);
    result.push(callbacResult);
  }
  return result;
}

// exercise 15
function find(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const callbacResult = callback(arr[i]);
    result.push(callbacResult);
    break;
  }
  return result;
}

// exercise 16
function some(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(callback(arr[i], i, arr));
      return true;
    }
    return false;
  }
}

// exercise 17
function every(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(callback(arr[i], i, arr));
      return true;
    }
    return false;
  }
}

// exercise 18
function reduce(arr, callback) {
  result = [];
  for (i = 0; i < arr.length; i++) {
    const callbackResult = callback(arr[i], i);
    result.push(callbackResult);
  }
  return result;
}

// exercise 19
const generatePassword = (passwordLength) => {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = upperCase.toLowerCase();
  let numbers = "0123456789";
  let chars = upperCase + lowerCase + numbers;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
};

// exercise 20
function ceasarCipher(str, b) {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  for (let i = 0; i < str.length; i++) {
    let x = (i + b) % str.length;
    password += str[x];
  }
  return password;
}
