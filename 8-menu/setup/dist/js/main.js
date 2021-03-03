// items

const menu = [
  {
    id: 1,
    title: "Buttermilk Pancake",
    category: "Breakfast",

    price: 15.99,
    img: "./image/item-1.jpeg",
    desc:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "Dinner Double",
    category: "Lunch",

    price: 13.99,
    img: "./image/item-2.jpeg",
    desc:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    title: "Godzilla Milksake",
    category: "Shakes",

    price: 6.99,
    img: "./image/item-3.jpeg",
    desc:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "Breakfast",

    price: 18.99,
    img: "./image/item-4.jpeg",
    desc:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",

    price: 22.99,
    img: "./image/item-5.jpeg",
    desc:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "Shakes",

    price: 17.99,
    img: "./image/item-6.jpeg",
    desc:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "Breakfast",

    price: 10.99,
    img: "./image/item-7.jpeg",
    desc:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 8,
    title: "American Classic",
    category: "Lunch",

    price: 16.99,
    img: "./image/item-8.jpeg",
    desc:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "Shakes",

    price: 12.99,
    img: "./image/item-9.jpeg",
    desc:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 10,
    title: "Bison Steak",
    category: "Dinner",

    price: 20.99,
    img: "./image/item-10.jpeg",
    desc:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
];

const contain = document.querySelector(".container");
const displayBtns = document.querySelector(".div3");
// *
// *
// *
// *
// *
// *

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
});

// *
// *
// *
// *
// *
// *
// *

// show button dynamically
function displayMenuBtns() {
  // display buttons DOM
  // reduce has two parameters as accumulator and currentvalue
  // value is for total and item for each item in array
  let Categories = menu.reduce(
    function (value, item) {
      // if value does not have item of specific category then push the item in value
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );

  // console.log(Categories);
  const categoryBtns = Categories.map(function (category) {
    return `<button class="filter-btn" type="button " data-id=${category}>
  ${category}
</button>`;
  }).join("");
  displayBtns.innerHTML = categoryBtns;

  // we have not need to write document always
  // we need menuBtn inside displayBtns thatswhy it replaced with displayBtns
  const menuBtn = displayBtns.querySelectorAll(".filter-btn");

  menuBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset.id);
      // choose the category for the item
      const category = e.currentTarget.dataset.id;
      // filtering the array of menu
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// *
// *
// *
// *
// *
// *
// *
// for displaying the menu
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="div1 ask">
    <div class="image">
      <img src=${item.img}  alt=${item.title}/>
    </div>

    <div class="details">
      <p id="itemname">${item.title}</p>
      <h2>$${item.price}</h2>
      <p id="para">
      ${item.desc}
      </p>
    </div>
  </div>`;
  });
  // joining or concatination of string thatswhy it has empty string in parenthesis
  displayMenu = displayMenu.join("");
  contain.innerHTML = displayMenu;
}
