let marks = {
    harry: 60,
    shubh: 50,
    lovish: 90,
    ritika: 5
}

//Q1

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(" marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
//Q2


for (let key in marks) {
    console.log("The marks of" + key + "are " + marks[key])
}

//Q3

let cn = 4
let i = 0
while (i != cn) {
    console.log("Try Again")
    i = prompt("Enter the number")

}
console.log("You entered correct number")


//Q4

const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5
}
console.log(mean(5, 4, 6, 8, 9))