// Destructuring
/* Destructuring assignment is a process of 
extracting data from array or object into a variable */

// 1. Desctructuring Array & Object

// let ourArray = ["Rottweiler", "Koenigsegg", "Asus", "Airbus", "Javascript"];

// const [dog, carBrand, techBrand, aircraftComp, progLanguage] = ourArray;
// console.log(dog);

// let ourObject = {a:"Samoyed", b:"Pagani", c:"Samsung", d:"Boeing", e:"Python"};
// const {a, b, c, d, e} = ourObject;
// console.log(b);

// const {a : dog, b : carBrand, c : techBrand, d : aircraftComp, e : progLanguage} = ourObject;
// console.log(aircraftComp);

// 2. Destructuring dengan mengambil sebagian item (Array & Object)

// Array

// let ourArray = ["Rottweiler", "Koenigsegg", "Asus", "Airbus", "Javascript"];

// const [, ,techBrand , ,] = ourArray;
// console.log(techBrand); // output "Asus"
// const carBrand = ourArray[1];
// console.log(carBrand); // output "Koenigsegg"

// Object

// let ourObject = {
//     dog:"Samoyed", 
//     carBrand:"Pagani", 
//     techBrand:"Samsung", 
//     aircraftComp:"Boeing", 
//     progLanguage:"Python"
// };
// const {carBrand, progLanguage} = ourObject;
// console.log(carBrand, progLanguage);

// 3. Destructuring dengan menggunakan default value (Array & Object)

// Array

// let ourArray = ["Rottweiler", "Koenigsegg", "Asus", "Airbus"];
// const [dog, carBrand, techBrand, aircraftComp, progLanguage = "Javascript"] = ourArray;
// console.log(progLanguage);

// Object 

// let ourObject = {
//     dog:"Samoyed", 
//     carBrand:"Pagani", 
//     techBrand:"Samsung", 
//     // aircraftComp:"Boeing", 
//     progLanguage:"Python"
// };

// const {carBrand, aircraftComp = "Boeing"} = ourObject;
// console.log(aircraftComp);

// 4. Destructuring dengan menggunakan rest operator (Array & Object)

// Array

// let ourArray = ["Rottweiler", "Koenigsegg", "Asus", "Airbus", "Javascript"];
// const [dog, carBrand, techBrand, ...other] = ourArray;
// console.log(other);

// Object 

// let ourObject = {
//     dog:"Samoyed", 
//     carBrand:"Pagani", 
//     techBrand:"Samsung", 
//     aircraftComp:"Boeing", 
//     progLanguage:"Python"
// };

// const {dog, ...other} = ourObject;
// console.log(other);






