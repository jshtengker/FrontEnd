// array

// let students = ["satu","dua","tiga","empat"];   // array literal
// let numbers = [1,2,3,4,5];
// let john = ["john","doe",5,false];

// let test = new Array("lima","enam");
// console.log(test);

// numbers[1] = "dua";
// console.log(numbers);
// console.log(numbers.length - 1);

// for (let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

// array method
// to string()

// console.log(numbers.toString());
// console.log(numbers.join(".."));
// numbers.pop();
// console.log(numbers);
// numbers.push(8);
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.unshift(10);
// console.log(numbers);
// numbers.splice(3,0,true);
// console.log(numbers);
// numbers.splice(2,1,5);
// console.log(numbers);
// numbers2 = numbers.slice(2,5);
// console.log(numbers2);

// object 
// let john = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 33,
//     isMarried: true,
//     grade: [80,90,100],
//     address: {
//         city: "manado",
//         province: "sulawesi utara",
//         postalCode: "95371",
//     },
//     sayGreetings: function(){
//         console.log("helo my name is " + this.firstName);
//     },
// };


// dot notation
// console.log(john.grade[0]);
// console.log(john.address.province);
// console.log(john.sayGreetings());

// bracket notation
// console.log(john["grade"][1]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]());
// john.job = "teacher";
// console.log(john);

// array object

let students = [
    {
        id: 1,
        name: "john",
    },
    {
        id: 2,
        name: "jane",
    },
    {
        id: 3,
        name: "bob",
    },
];

students.forEach(function(item){
    console.log(item.name);
});

//menyimpan ke array baru
students.map(function(item){
    console.log(item.name);
});
// let output = students.map(function(item){
//     return item.name;
// });
// console.log(output);

// let output = students.filter(function(item){
//     return item.name == "john";
// });
// console.log(output);

// let output = students.find(function(item){
//     return item.name == "john";
// });

// console.log(output);