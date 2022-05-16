let num = 10;
console.log(num);
let names = ["Ram","Sam","Ali"];
let employee = names; //reference array
employee[1] = "Madhu"; //replacing element from array using index number
employee[3] = "Rohan"; // adding new element in arry using index number
console.log("The names are: "+employee); //extract the values from the array
console.log("The names are : ",employee); //result in array form
for(let name in employee){
    console.log(name); //shows the indexes
}
for(let name of employee){
    console.log(name); //shows the elements
}
console.log("Length of this array is: "+employee.length)
let result = names.filter(checkName);
function checkName(name1){
    return name1.startsWith("M");
}
console.log(result);

let  numbers = [12,33,23,34,54];
let result1 = numbers.map(multiply);
function multiply(num){
    return num*10;
}
console.log(result1)

let result2 = numbers.reduce(addition);
function addition(num1, total){
    return num1+total;
}
console.log(result2)

let sum = function(a,b){
    return a+b;
}
console.log(sum(2,3));

let add =(a,b) => {       //arrow function or lambda function
    return a+b;
}
console.log(add(10,20));

let person = {  //creating objects in js
    firstName : 'Alice' ,
    lastName: 'Disuza' ,
    age : '30'
};
console.log(person.firstName)
for(const key in person){
    console.log(person[key]);
}

function Person(firstName,lastName){    //Adding method to js constructor functions
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function() {
        return firstName+" "+lastName

    }
    
}
let Person1 = new Person("John","Doe");      // creating objects using constructor
console.log(Person1.fullName());