
//write program to calculate factorial using reduce function and for loop.


let a = 5;
function facfor(number){
//using for loop
    let fact = 1;
for (let index = 1; index <= number; index++) {
   fact = fact * index;
    }
return fact;
}
console.log(facfor(a));



function factorial(num){
    //using reduce() function
    let arr = Array.from(Array(num+1).keys());
    console.log(arr);
    let c = arr.slice(1,).reduce((a,b)=>a*b)
    return c;
}
console.log(factorial(a));