let submit = document.querySelector("#submit");
// console.log(submit);
function volume_sphere(e) {
  e.preventDefault();
  //Write your code here
let radius = document.querySelector("#radius").value;
console.log(radius);
console.log(submit);
let volume = 4/3*(3.14*radius*radius);
document.querySelector("#volume").innerHtml = volume;
}
submit.addEventListener("click",volume_sphere);