// the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed ,
// without waiting for stylesheets,
// images , and subframes to finish loading

// the load event is fired when the whole page has loaded, including all dependant resources such as stylesheets and images.

const btn = document.querySelector(".toggleDiv");
const video = document.querySelector(".videoplayer");
const togglebutton = document.querySelector(".toggleBtn");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", function () {
  if (!togglebutton.classList.contains("switch")) {
    togglebutton.classList.add("switch");
    video.pause();
  } else {
    togglebutton.classList.remove("switch");
    video.play();
  }
});

// display preloader
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
