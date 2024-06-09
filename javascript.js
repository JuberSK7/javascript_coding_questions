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


