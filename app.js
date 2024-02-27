
let input = document.getElementById("input");
let form = document.getElementById("form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let piyoda = document.getElementById("footSpeed");
  let f = input.value;
  let iyoda = f / 3.6;
  piyoda.textContent = iyoda.toFixed(2);
  let bike = document.getElementById("bikeSpeed");
  let bikes = f / 20.1;
  bike.textContent = bikes.toFixed(2);
  let car = document.getElementById("carSpeed");
  let cars = f / 70;
  car.textContent = cars.toFixed(2);
  let plane = document.getElementById("planeSpeed");
  let planes = f / 800;
  plane.textContent = planes.toFixed(2);
  console.log(f);
});

(function (num) {
  console.log(num);
})("20" + 10);

var word = "Sardor";
console.log(word.includes("S"));
