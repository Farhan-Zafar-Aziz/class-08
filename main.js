"use strict";
//Union operator using for assigning multiple values in variable
// const fan = true;
// if(fan){
//     console.log("On")
// }
// else {
//     console.log("Off")
// }
//const fan: boolean | number = true;
const fan = 1;
if (typeof fan === "number") {
    fan.toFixed(2);
    console.log("Fan is On");
}
else {
    console.log("Fan is Off");
}
let myAge;
//Narrowing data type
myAge = 16; //number
myAge.toFixed(2);
myAge = "16"; //string
myAge.toUpperCase();
console.log(myAge);
//ternary operator
let random = Math.random() * 100;
let roundOf = Math.round(random);
console.log(random);
console.log(roundOf);
let my_Age;
if (roundOf > 50) {
    my_Age = 18;
    console.log("This is a number: ", my_Age);
}
else {
    my_Age = "18";
    console.log("This is a string: ", my_Age);
}
let age = Math.random() > 0.6 ? "Khan" : 60;
if (typeof age === "number") {
    age;
}
else {
    age;
}
//Literal type
//   let traffic = "red";
//  traffic= "green",
let trafficLights = "green"; //or 5 
trafficLights = "red";
trafficLights = 5;
// let firstName = "Hamzah";
// firstName = "Ali";
// const name = "hamzah";
// name = "ali"//showing error bcz const always consider his calue as data type 
//Objects 
let teacher = {
    "first-name": "Zeeshan",
    experience: "10",
};
console.log(teacher);
console.log(teacher["first-name"]);
//Object data type 
let student;
student = {
    name: "hamzah" //data type assigning
    //age: can`t assign here bcz in objct data type always we first define data type then we can assign values 
};
let Student1 = {
    name: "hamzah",
    age: 28,
};
let Student2 = {
    name: "aziz",
    age: 31,
};
console.log(Student1, Student2);
let Age = "yes";
let num = 23;
let boo = true;
let hamzaOrder = {
    food: "Biryani"
};
let shazadOrder = {
    food: "Biryani",
    drink: "Pepsi"
};
hamzaOrder = shazadOrder; //hamzah ko mila shazad ka order 
console.log(hamzaOrder.food);
//shazadOrder = hamzaOrder ; shazad ko hamza ka 
//this structural data type 
