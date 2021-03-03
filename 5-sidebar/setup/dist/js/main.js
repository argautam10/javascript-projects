const sidebar = document.querySelector(".container");
const sidebarIcon = document.querySelector(".div4");

const crossIcon = document.querySelector(".div3");

let showAnimation = false;
let animation = false;

sidebarIcon.addEventListener("click", toggleBar);

function toggleBar() {
  if (!showAnimation) {
    sidebar.classList.add("press");
    showAnimation = true;
  } else {
    sidebar.classList.remove("press");
    showAnimation = false;
  }
}

crossIcon.addEventListener("click", function () {
  // crossIcon.classList.add("open");
  sidebar.classList.remove("press");
});
