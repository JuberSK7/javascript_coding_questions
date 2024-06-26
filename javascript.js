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

/////// 


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


7) /////////// ******** write a programe to create the chunks

function createChunks(arr, size){
    let result = [];
    let minRes = [];
    for(let i=0; i <arr.length; i++){
        minRes.push(arr[i]);
        if(minRes.length === size || i === arr.length- 1){
            result.push(minRes);
            minRes = [];
        }
    }
    console.log(result)
}

createChunks([1,2,3,4,5], 1)//// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]

8) //////////// ********** Event Delegation 

Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements.
The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM.

example : - 
<ul onclick='alert(event.type)'>
  <li>User1</li>
  <li>User2</li>
  <li>User3</li>
  <ul>

9) ///////////// ***** Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
                      "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
for(let i =0; i < 100; i++){
  if(i % 3 && i % 5){
    console.log('fizzbuzz')
  }else if(i % 3){
console.log('fizz')
  }else if(i % 5){
    console.log('buzz')
}
}
10) ///////////////  ************ Create the timer app in react js

import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const timer = useRef();

  const start = () => {
    timer.current = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000);
  };

  const reset = () => {
    setTime(0);
    clearInterval(timer.current);
  };

  const stop = () => {
    clearInterval(timer.current);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>{time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}> Stop </button>
    </div>
  );
}
