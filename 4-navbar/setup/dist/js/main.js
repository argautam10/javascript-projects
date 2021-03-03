const menubar = document.querySelector(".child");
const menuDiv = document.querySelector(".div3");
const listItems = document.querySelector("#list1");
const navBar = document.querySelector(".navbar");
const text = document.querySelector("#addict");
let showMenu = false;

menuDiv.addEventListener("click", toggleBar);

function toggleBar() {
  if (!showMenu) {
    menubar.classList.add("open");
    listItems.classList.add("open");
    navBar.classList.add("open");
    text.classList.add("open");
    showMenu = true;
  } else {
    menubar.classList.remove("open");
    listItems.classList.remove("open");
    navBar.classList.remove("open");
    text.classList.remove("open");
    showMenu = false;
  }
}
