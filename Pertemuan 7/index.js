// // string literal

let fullName = "John Doe";
let age = 33;
let address = "Manado";

// // es5

// let kalimat5 = "Halo " + fullName + ", age " + age + " address " + address;
// console.log(kalimat5);

// // es6

// console.log(`Halo ${fullName}, age : ${age} address ${address}`);

// arrow function

// function sayGreetings(name){
//     return `hello ${name}`;
// }
// console.log(sayGreetings("john"));

// const sayGreetings = (name2) => {
//     return `hello ${name2}`;
// }
// console.log(sayGreetings("doe"));

// implicit return value

// const sayGreetings = (name) => `hello ${name}`;
// console.log(sayGreetings("doe"));

// IIFE

// let output = (() => `helo`)();

// callback

// let numbers = [1,2,3,4,5,];
// let output2 = numbers.map((item) => item);
// console.log(output2);

// default parameter

// const sayGreetings5 = (fullName, name) => {
//     if (fullName === undefined){
//         fullName = "test";
//     }
//     if ( age === undefined){
//         age = 33;
//     }
//     console.log(`hello ${fullName}`);
// }
// sayGreetings5();

const sayGreetings6 = (fullName = "John Doe", age = 33) => {
    console.log(`hello ${fullName}, age : ${age}`);
}
sayGreetings6();