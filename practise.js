


function removingduplicate(str){
	let unique = "";
	for(let i=0; i<str.length; i++){
		if(!unique.includes(str[i])){
			unique += str[i];
		}
	}
	return unique;
}

console.log(removingduplicate('saurav'));


function reverseString(str){
	let rString= "";
	for(let i= str.length-1; i>=0; i--){
		rString += str[i];
	}
	return rString;
}

console.log(reverseString("Saurav"));

function reverseArray(array){
	let rArray= [];
	for(let i= array.length-1; i>=0; i--){
		rArray.push(array[i]);
	}
	return rArray;
}

console.log(reverseArray([1,2,3,4,5]));

function factorial(num){
	if(num===0 || num ===1) return 1;
	return num*factorial(num-1);
}

console.log(factorial(5));


function addtwo(arr, arr1){
	return arr.concat(arr1).sort((a,b)=> a-b);
}

console.log(addtwo([1,5,3,4], [6,7,8,9]));


function palindrome(num){
	let check = num.toString().split('').reverse().join('');
	return check === num.toString();
}
console.log(palindrome(122));

let y =[1,5,3,4];

let z = y.filter((_, index)=> index!==2);

console.log(z);


function fibannoci(num){
	if(num<=0) return 0;
	if(num===1) return 1;
	return fibannoci(num-1)+ fibannoci(num-2);
}

console.log(fibannoci(9));


//merge two sorted arrays;

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

console.log(merge([1, 2, 3, 4], [6, 7, 8, 8]));

//check palindorme

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palindrome("madam"));

// twosum method
// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and
// target = 13, return true because 4 + 9 = 13

function twoSum(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) {
      return true;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(twoSum([1, 2, 4, 6, 8, 9, 14, 15], 13));

//reverse a String

function reverseString(str) {
  let array = str.split("");
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }
  return array.join("");
}

// console.log(reverseString("saurav"));

// largest element

function largestElement(array) {
  let max = -1;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

// console.log(largestElement([2, 5, 1, 3, 0]));

// check if array is sorted;

function sortedArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// console.log(sortedArray([1, 2, 3, 4, 5]));

// find number present in array or not

function number(array, num){
    for(let i=0; i<array.length; i++){
        if(array[i]===num){
            return i;
        }
    }
    return -1;
}

// console.log(number([1, 2, 3, 4, 5], 3));

// count maximum 1's

function maximum(array) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log(maximum([1, 1, 0, 1, 1, 1]));


//remove duplicate in sorted array

function removeDuplicate(array){
  let index=1;
  for(let i=0; i<array.length; i++){
    if(array[i]!==array[i-1]){
        array[index] = array[i];
        index++;
    }
  }
}


function uniqeString(str){
  let charSet = new Set();
  let result = "";
  for(let char of str){
      if(!charSet.has(char)){
          charSet.add(char);
          result+=char;
      }
  }
  return result;
}

console.log(uniqeString("hello World"));


function repettedString(str){
  let charCount = new Map();
  for(let char of str){
      if(!charCount.has(char)){
          charCount.set(char, 1);
      } else {
          charCount.set(char, charCount.get(char)+1);
      }
  }
  let sortthemap = new Map([...charCount.entries()].sort());
  sortthemap.forEach((value, key)=>{
      console.log(`${key}: ${value}`);
  })
}

let str = "madamjii";
repettedString(str);
