//Q1
let arr = [2, 45, 77, 5, 364, 64]
arr.push(56223)
console.log(arr)


//Q2
let arr1 = [9, 1]
let a;
do {
    a = prompt("Enter the number: ")
    a = Number.parseInt(a)
    arr1.push(a)

} while (a != 0);
console.log(arr1)


//Q3
a = [3, 80, 65, 70, 43560, 45, 78, 50]
let n = a.filter((x) => {
    return x % 10 == 0
})
console.log(n)


//Q4
a = [3, 80, 65, 70, 43560, 45, 78, 50]
let n1 = a.map((x) => {
    return x * x
})
console.log(n1)


//Q5
ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let n2 = ar.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n2)

