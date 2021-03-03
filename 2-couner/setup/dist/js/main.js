const btns = document.querySelectorAll("button");
const digitNumber = document.getElementById("digit");
// set initial value
let count = 0;

// foreach method iterate over each button
// you can use for loop also in the btns
btns.forEach(function (btn) {
  //   console.log(items);
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // find out if style have the descendant  like classes and tags using contains()
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      digitNumber.style.color = "green";
    }
    if (count < 0) {
      digitNumber.style.color = "red";
    }
    if (count == 0) {
      digitNumber.style.color = "black";
    }
    digitNumber.textContent = count;
  });
});
