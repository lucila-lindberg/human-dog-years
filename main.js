//This variable represents my age. 
let myAge = 29;

//This variable will be changed.
let earlyYears = 2;

earlyYears *= 10.5;

//We need to account for the first 2 years by subtracting 2 from my age. 
let laterYears = myAge - 2;

laterYears *= 4;

//Here we are adding the 2 variables together.
let myAgeInDogYears = earlyYears + laterYears;

let myName = 'LUCY'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
