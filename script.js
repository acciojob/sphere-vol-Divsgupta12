let submit = document.querySelector("#submit");
function volume_sphere(e) {
  e.preventDefault();
  //Write your code here
let radius = document.querySelector("#radius").value;
	let volume = (4/3)*(22/7)*radius*radius*radius;
console.log(volume);
document.querySelector("#volume").value = volume;
}
submit.addEventListener("click",volume_sphere);