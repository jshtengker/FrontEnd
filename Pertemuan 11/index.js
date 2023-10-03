// import helloWorld, { fullName as nameFull, integer, john} from "./utils.js";
// import { sayGreetings } from "./sayGreetings.js";

// console.log(nameFull);
// console.log(integer);
// console.log(john);
// helloWorld();
// sayGreetings(); 

// Asynchronous

// synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

// asynchronous -> multi thread -> non blocking
// two types of asynchronous
// 1. Parallel
// setTimeout(() => {
//     console.log("Proses 1");
// },3000)
// console.log("Proses 2");
// setTimeout(() => {
//     console.log("Proses 3");
// }, 4000)
// console.log("Proses 4");

// 2. Concurrent
// 2.A Callback (ES5)
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             },3000);
//         },3000);
//     },3000);
// },3000);


//2.B Promise (ES6)
// Promises

let condition = false;

const newPromise = new Promise((resolve, reject) => {
    if (condition){
        resolve("Succed");
    }
    else{
        reject("Failed");
    }
});

// 2. Promise
// 1. then - catch (ES6)
// newPromise.then((result) => {
//     console.log(result);
// }).catch(error => console.log(error));

// 2. async - await 
// async - used inside a function

const consumePromise = async () => {
 try{
    let result = await newPromise;
    console.log(result);
 } catch (error){
    console.log(error);
 } finally {
    console.log("always ");
 }
}
consumePromise();





