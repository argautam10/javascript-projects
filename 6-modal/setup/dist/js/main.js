const btns = document.querySelector(".div2");

const wall = document.querySelector(".container");

const modalContent = document.querySelector(".div3");
const closeDiv = document.querySelector(".close");

let animation = false;

btns.addEventListener("click", modal);

function modal() {
  wall.classList.add("open");
  modalContent.classList.add("open");
  animation = true;
}

closeDiv.addEventListener("click", function () {
  modalContent.classList.remove("open");
  wall.classList.remove("open");
});
