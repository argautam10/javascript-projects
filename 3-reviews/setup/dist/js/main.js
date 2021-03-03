const reviews = [
  {
    id: 1,
    name: "Bill Anderson",
    job: "The BOSS",
    img: "./image/photo-1.jpeg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    name: "johny English",
    job: "UX Designer",
    img: "./image/photo-2.jpg",
    text:
      "epeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
  },
  {
    id: 3,
    name: "Hacckermann",
    job: "UI Designer",
    img: "./image/photo-3.jpg",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    id: 4,
    name: "White Willington",
    job: "Sotware Engineer",
    img: "./image/photo-4.jpg",
    text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form. ",
  },
];

// select items
const profile_image = document.querySelector("#person-img");
const author = document.querySelector("#author");
const jobName = document.querySelector("#job");

const info = document.querySelector("#describe");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const lastBtn = document.querySelector("#btn");

let count = 0;
// load initial items
window.addEventListener("DOMContentLoaded", function (e) {
  showPerson(count);
});

// making a common function for attributes

function showPerson(personNumber) {
  const item = reviews[personNumber];
  profile_image.src = item.img;
  author.textContent = item.name;
  jobName.textContent = item.job;
  info.textContent = item.text;
}

// event listener to the buttons
// show next person
nextBtn.addEventListener("click", function () {
  count++;
  if (count > 3) {
    count = 0;
  }
  showPerson(count);
});
prevBtn.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = 3;
  }
  showPerson(count);
});

// show random function in lastBtn
function getRandomCard() {
  return Math.floor(Math.random() * 4);
}

lastBtn.addEventListener("click", function () {
  let randomNumber = getRandomCard(count);
  showPerson(randomNumber);
});
