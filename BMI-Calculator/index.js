const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#result')
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
// console.log(bmi);
if (height == '' || height < 0) {
  result.innerHTML = `<span>Please Enter a valid height</span>` 
}else if (weight == '' || weight < 0) {
  result.innerHTML = `<span>Please Enter a valid weight</span>`
}else{ 
  result.innerHTML = `<span> Your BMI is : ${bmi}</span>`
}
 
})