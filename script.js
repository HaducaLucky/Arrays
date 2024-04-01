//!  array = a variable like structure that can hold
//!          more that 1 value

// let fruits = ["apple", "orange", "banana"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let fruits = ["apple", "orange", "banana"];

// fruits[1] = "coconut";

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

//* push,pop,unshift,shift 

// let fruits = ["apple", "orange", "banana"];

//? fruits.push("coconut");
//? fruits.pop();
//? fruits.unshift("mango");
//? fruits.shift();

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

//* To get the length

// let fruits = ["apple", "orange", "banana", "coconut"];

// let numofFruits = fruits.length;
// // to get the index
// let index = fruits.indexOf("banana");

// // console.log(numofFruits);
// console.log(index);

//* for

// let fruits = ["apple", "orange", "banana", "coconut"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


//* in reverse

// let fruits = ["apple", "orange", "banana", "coconut"];

// for(let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

//* Enhanced for loop 

// let fruits = ["apple", "orange", "banana", "coconut"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

//* sort an array

let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.sort();
fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}