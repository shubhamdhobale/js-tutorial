//Q1
let str = "Har\"" //'\'is a escaping charater
console.log(str.length)

//Q2
let string = "Hello.! My name is Shubham"
let word = "Shubham"
console.log(string.includes(word))
console.log(string.startsWith('Shubham'))
console.log(string.endsWith('Shubham'))

//Q3
console.log(string.toLowerCase())
console.log(string.toUpperCase())

//Q4
let str1 = "Today's net profit is 2500"
console.log(str1.substr(22))
console.log(str1.slice("Today's net profit is ".length))

//Q5
let hello = "hello world"
hello[3] = "r"
console.log(hello)
    //string is not changed.Because strings are immutable.