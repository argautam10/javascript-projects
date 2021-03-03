const colors = ["green", "red", "#4d652d", "rgba(45, 66, 255)"];

const container = document.querySelector(".container");
const btn = document.querySelector(".color-btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  container.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}
