const iconBtn = document.querySelectorAll("button");
const lineDraw = document.querySelector(".line");
const paragraph = document.querySelector("#para");
const iconFirst = document.querySelector("#icon");
const iconSecond = document.querySelector("#icon2");
const questions = document.querySelectorAll(".ask");

//  putting forEach method to get each plust buttons
// traversing the DOM
// iconBtn.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement;

//     // toggle in js uses for the hide and show the content
//     question.classList.toggle("open");
//   });
// });

// another method

questions.forEach(function (question) {
  const btn = question.querySelector("button");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("open");
      }
    });
    question.classList.toggle("open");
  });
});
