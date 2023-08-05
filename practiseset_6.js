//Q1
let age = prompt("enter the age: ")
age = Number.parseInt(age)
const canDrive = (age) => {
    return age >= 18 ? true : false
}
if (canDrive(age)) {
    alert("Yes You can Drive")
} else {
    alert("You can not drive")
}


//Q2
let runAgain = true;
while (runAgain) {
    let age1 = prompt("enter the age: ")
    age1 = Number.parseInt(age1)
    const canDrive = (age1) => {
        return age1 >= 18 ? true : false
    }
    if (canDrive(age1)) {
        alert("Yes You can Drive")
    } else {
        alert("You can not drive")
    }
    runAgain = confirm("do you want to continue with next one:")
}

//Q3
let age2 = prompt("enter the age: ")
age2 = Number.parseInt(age2)
if (age2 < 0) {
    console.error("Please Enter a valid age")
}


//Q4
let num = prompt("Enter the valid age: ")
num = Number.parseInt(num)
if (num > 4) {
    location.href = "https://www.google.com"
}

//Q5
let color = prompt("Enter the background color:")
document.body.style.background = color