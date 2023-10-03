// Array Exercises

let people = ["Greg","Mary","Devon","James"];

// (1) using for loop, iterate through this array 

for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

// (2) using forEach(), iterate through this array

people.forEach(function(eachPerson){
    console.log(eachPerson);
});

// (3) write the command to remove "Greg" from the array

people.shift();
console.log(people);

// (4) write the command to remove "James" from the array

people.pop();
console.log(people);

// (5) write the command to add "Matt" to the front of the array

people.unshift("Matt")
console.log(people);

// (6) write the command to add your name to the end of the array

people.push("Josh")
console.log(people);

// (7) using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop

// for (let i = 0; i < people.length; i++){
//     console.log(people[i]);
//     if (people[i] == "Mary"){
//         break;
//     } 
// }

// (8) write the command to make a copy of the array using slice. The copy should not include "Mary" or "Matt".

let people2 = people.slice(2);
console.log(people2);

// (9) redefine the people variable with the value you started with, using the splice command, remove 
// "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when
// you are done ["Matt","Marry","Elizabeth","Artie","Your Name"]

console.log(people);

people.splice(2,1,"Elizabeth","Artie");
console.log(people);

// (10) create a new varaibel called withBob and set it equal to the people array concatenated with the string of "Bob"

let withBob = "Bob";

people.push(withBob);
console.log(people);

// Object Exercises 

let programming = {
    languages: ["JavaScript","Python","Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programming-joke"
};

// (1) write the command to add the language "Go" to the end of the languages array

programming.languages.push("Go");
console.log(programming.languages);

// (2) by using the bracket notation, change the difficulty to the value of 7

programming["difficulty"] = 7;
console.log(programming["difficulty"]);

// (3) using the delete keyword, write the command to remove the jokes key from the programming object

delete programming["jokes"];
console.log(programming);

// (4) by using the dot notation, write the command to add a new key called isFun and value of true to the programming object

programming.isFun = true;
console.log(programming);

// (5) using a map(), iterate through the languages array and update each element to be "0 - Javascript, 1 - python, ..," 
// where 0 represents the index of the array, and console.log the output

programming.languages.map(function(item, index){
    console.log(`${index} - ${item}`);
});

