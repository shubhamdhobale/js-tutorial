const PromiseOne =  new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise one");
  }, 1000)
  resolve()
})
PromiseOne.then(() => {
  console.log("Promise Resolved");
})



const PromiseTwo = new Promise((resolve ,reject) => {
  setTimeout(() => {
    resolve({username: "shubham" , Password : "123"})
  },1000)
})
PromiseTwo.then((user) => {
console.log(user);
})



const PromiseThree = new Promise((resolve , reject) => {
  const error = false;
  if (!error) {
    resolve({username: "shubham" , Password: "123"})
  }else{
    console.log("Error:: Something went wrong");
  }
})
PromiseThree
.then((user) => {
console.log(user);
return user.username;
})
.then((username) =>{
console.log(username);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  console.log("Finally block executed");
})


const PromiseFour = new Promise((resolve , reject) => {
  const error = true;
  if (!error) {
    resolve({username: "Js" , Password: "123"})
  }else{
    console.log("Error:: Js went wrong");
  }
})
async function consumePromiseFour(){
  try {
    const response = await PromiseFour;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFour();


// async function getallusers(){
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
//   }
// }
// getallusers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
})