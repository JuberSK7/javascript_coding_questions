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

0) ///////////// ******* ////find the second largest value in the Array

const arr = [1,2,3,4,5,6,7,8,9];

function findSecondLargestNum(){
  let largeNum = -Infinity;
  let secondLarge = -Infinity;
  
  for(let i=0; i < arr.length; i++){
    if(arr[i] > largeNum){
      secondLarge = largeNum;
      largeNum = arr[i];
    }else if(arr[i] > secondLarge && arr[i] !== largest){
      secondLarge = arr[i];
    }
  }
return secondLarge
} 
console.log(findSecondLargestNum()) // 8


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

11) /////////////////////// ******************  calculator

/// computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousands(45).crore(7).value()
function calculater(){

   this.totalAmount =1; 

  this.lacs = function(amount){
   this.totalAmount += amount * 100000;
    return this
  }
  this.crore = function(amount){
     this.totalAmount += amount * 10000000;
     return this
  }
  this.thousands = function(amount){
  this.totalAmount += amount * 1000;
     return this
  }
  
  
 this.value = function(amount){
    return this.totalAmount;
   
  }
}

function computeAmount(){
  return new calculater();
}

console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousands(45).crore(7).value());

12) // ************* Return the array of object based on types of items
function filterBytype(items){
    const fruits = [];
    const vegetable =[];
    items.map((item) => {
        if(item.type == 'fruit'){
            fruits.push(item)
        }
         if(item.type == 'vegetable'){
            vegetable.push(item)
        }
    })
    return {fruits, vegetable}
}
console.log(filterBytype(items))


12) //////////////// *******************  write a program to return 'fuzz' for number is divide by 3 and return 'Buzz' for number is dived by 5 or both is devided then return 'Fizzbuzz'
  Note : show the fizz text on divid by 3 and buzz devide by 5 instead of number.


    function fizzBuzz(){
    for(let i=0; i<100; i++){
      let output = '';
      if(i % 3 === 0) {
        output += 'fizz';
      }
        if(i % 5 === 0) {
        output += 'buzz';
      }
      if(output === ''){
        output = i.toString();
      }
      console.log(output);
    }
  }

fizzBuzz() /////fuzzbuzz 1 2 fuzz 4 buzz fuzz 7 8 fuzz buzz .....


13) What is Spread Oprator ? and Example of Spread Oprator.
  Answer: Spread Oprator ar spread or extract the values in the array.

  Example : 
  a) Concatinating Array: 
    const a = [1,2,3];
    const b = [4,5,6];
    const z = [...a, ...b];
    console.log(z)// [1,2,3,4,5,6];

  b) Copying array
  const a = [1,2,3];
  const z = [...a]
  console.log(z);

 c) Passing Multiple Parameter into single Argument in a function
 const arr1 = [1,2,3];
   function MyFun(arg1, arg2){
     console.log(arg1, arg2);
 }
MyFun(...arr1);

14) What is Rest Oprator ? and Example of rest Oprator.
Answer : Rest oprator condence multiple element into a single array or object.
Expample : 
 function Example(...args){
 console.log(args)
 }
 Example(1,2,3,4);

15) Whats the difference between Object.keys,values and entries
 Object.keys(): This will return the array of keys
 Object.values(): This will return the array of values
 Object.entries(): This will return array of [key,value] pairs.
Example : 
   let data = {
      name: "Sai",
      lang: "English"
   };
   Object.keys(data)  // ["name","lang"]
   Object.values(data) // ["Sai","english"]
   Object.entries(data) // [["name","Sai"],["lang","English"]]

16) What is the Object.freez() and Object.seal() methods in Javascript ?

  a) Object.freez() :
   We Make the object totally Immutable (Prevent the addition of new Properties and moditification of existing Properties);

   const obj1 = {
    name : 'Zuber',
    age: 23
   }
   Object.freez(obj1);
   obj1.name = 'NoName';
   obj1.age = 24;
  console.log(obj1) //{ name : 'Zuber', age: 23}

  b) Object.seal();
  Will Prevent the addition of new properties but we can modify existing properties.
   let data = {
      a : 10
    };
   Object.seal(data);
   data.a = 20;
   data.c = 30;
 console.log(data) // a: 20

17) ////////////// ************* Write a function to take array of arguments as numbers and return new array with only even numbers in the input array

function filterEvens(arr){
  const evensNumber = arr.filter((ele) => ele % 2 == 0)
  console.log(evensNumber)
}

function filterEvens(arr){
  const result = [];
  for(let i=0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      result.push(arr[i])
    }
  }
  console.log(result)
}

filterEvens([1,2,3,4,5,6,7,8,-8,19,9,10]);

13) ////////// **************write a function in javascript to check the string is palindrome or not ?

function checkPalindrom(str) {
  let len = str.length;
  for(let i=0; i< len/2; i++){
    if(str[i] !== str[len - i - 1]){
      return 'isNotPalindrom'
    }
  }
  return 'isPalindrom'
}
console.log(checkPalindrom('madam'));

19) /////// ***********write a function in javascript to retrun logest sentances in the String

function longestSentance(str){
  let wordsArray = str.split(' ');
  let logestStr = '';
  for(let i=0; i < wordsArray.length; i++){
    if(wordsArray[i].length > logestStr.length){
      logestStr = wordsArray[i]
    }
  }
  console.log(logestStr)
}

longestSentance('Hi Im Shaikh Juber')

