//Union operator using for assigning multiple values in variable

// const fan = true;

// if(fan){
//     console.log("On")
// }

// else {
//     console.log("Off")
// }

//const fan: boolean | number = true;

const fan: boolean | number = 1;

if(typeof fan === "number"){
    fan.toFixed(2);
    console.log("Fan is On")
}
else {
    console.log("Fan is Off")
}


let myAge: string | number;

//Narrowing data type

myAge = 16;//number
myAge.toFixed(2);

myAge = "16";//string
myAge.toUpperCase();

console.log(myAge);

//ternary operator

 let random = Math.random() * 100;
 let roundOf = Math.round(random)
 
 console.log(random);
  console.log(roundOf)

  let my_Age: number | string;
  if (roundOf > 50){
    my_Age = 18;
    console.log("This is a number: ", my_Age)
  } else {
    my_Age = "18";
    console.log("This is a string: ", my_Age)
  }

  let age = Math.random() > 0.6 ? "Khan" : 60;

  if(typeof age === "number") {
    age
  } else {
    age
  }

  //Literal type

//   let traffic = "red";
//  traffic= "green",

let trafficLights: "red" | "green" | "yellow" | 5 | 4 = "green" //or 5 

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

}
console.log(teacher);
console.log(teacher["first-name"])


//Object data type 

let student: {
    name:string,
}
student = {
    name: "hamzah" //data type assigning
    //age: can`t assign here bcz in objct data type always we first define data type then we can assign values 

} 

// inteface/custom data types= using for apni type bana sakty hn

interface IStuden {
    name: string,
    age: number,
}

let Student1: IStuden = {
    name: "hamzah",
    age: 28,

}

let Student2: IStuden = {
    name: "aziz",
    age: 31,

}
console.log(Student1,Student2);

//aliased = kisi bary naam ko ak sath krna

type All = string | number | boolean;

let Age: All = "yes" 
let num: All = 23
let boo: All = true 

interface Deal1 {
    food: string,

}
interface Deal2 {
    food: string,
    drink: string,
}
let hamzaOrder: Deal1 = {
    food: "Biryani"
}
let shazadOrder: Deal2 = {
    food: "Biryani",
    drink:"Pepsi"
}
hamzaOrder = shazadOrder; //hamzah ko mila shazad ka order 
console.log(hamzaOrder);
//shazadOrder = hamzaOrder ; shazad ko hamza ka 
//this structural data type 