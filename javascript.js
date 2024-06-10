/// ** Remove the duplicate item / number in array

const arr = [1,2,3,4,2,5,1,6,8,9,6,8];
// using for loop
const res =[];
for(let i=0; i<arr.length; i++){
  if(res.indexOf(arr[i]) === -1){
    res.push(arr[i])
  }
}
console.log(res) //[ 1, 2, 3, 4, 5, 6, 8, 9];

/// using filter method
const removeDuplicate = arr.filter((num, index) => arr.indexOf(num]) === index);
console.log(removeDuplicate); //[ 1, 2, 3, 4, 5, 6, 8, 9];

// using new Set method
const removeDuplicte = [...new Set(arr) ];
console.log(removeDuplicte); //[ 1, 2, 3, 4, 5, 6, 8, 9];


2) // Find the largest or maximum number in the array

const arr = [1,2,3,4,2,5,1,6,8,9,6,8];

// using for loop
var largeNum = arr[0];
for(let i=0; i < arr.length; i++){
   if(arr[i] > largeNum){
    largeNum = arr[i];
  }
}

console.log(largeNum)// 9

///using Math.max() function
const findMax = Math.max(...arr);
console.log(findMax)// 9


2) // ***Find the smallest or manimum number in the array

const arr = [1,2,3,4,2,5,1,6,8,9,6,8];

// using for loop
var minNum = arr[0];
for(let i=0; i < arr.length; i++){
   if(arr[i] < minNum){
    minNum = arr[i];
  }
}

console.log(minNum)// 1

///using Math.max() function
const findMax = Math.min(...arr);
console.log(findMax)// 0


3) //// ****check string string is palindrom or not (reads the same forwards and backwards);
//using split, reverse and join methods

function isPalindrom(str){
  return str === str.split('').reverse().join('');
}
console.log(isPalindrom(sbkkbs)) // true


4) ////******** Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const arr = [1,2,3,4,2,5,1,6,8,9,6,8,0];
const findEvenNums = arr.filter((num) => num % 2 === 0);
console.log(findEvenNums);//[ 1, 3, 5, 1, 9 ]

//Note :- for finding the odd , then chnage the instead 0 to 1


5)//// ********* Write a JavaScript program to calculate the factorial of a given number.

  function findFactorial(num){
     if(num === 0 || num ===1){
       return 1
     }else{
       return num * findFactorial(num - 1);
    }
  }

console.log(findFactorial(2))// 2

6) /////******** Write a JavaScript program to find the largest element in a nested array. 

