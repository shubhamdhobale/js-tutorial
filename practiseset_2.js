//Q1

let age = prompt("Enter your age")

if (age > 10 && age < 20) {
    console.log("your age lies between 10 and 20")
} else {
    console.log("your age doesn't lies between 10 and 20")
}


//Q2

let age1 = prompt("enter yor age: ")

switch (age1) {
    case '12':
        console.log("This is a special case")
        break
    case '2':
        console.log("This is second case")
        break
    case '3':
        console.log("This is third case")
        break;
    default:
        console.log("This is not a special case")
}


//Q3

let num = prompt("Enter The number: ")

if (num % 2 == 0 && num % 3 == 0) {
    console.log("Number is divisible by 2 & 3")
} else {
    console.log("Number is not divisible by 2 & 3")
}


//Q4

let num1 = prompt("Enter The number: ")

if (num1 % 2 == 0 || num1 % 3 == 0) {
    console.log("Number is divisible by 2 or 3")
} else {
    console.log("Number is not divisible by 2 or 3")
}


//Q5

let age2 = prompt("ENter your age")
let a = age2 > 18 ? "You can drive" : "You can  not drive"
console.log(a)