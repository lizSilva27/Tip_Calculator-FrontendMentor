let bill = document.querySelector(".inputs-section__bill-input");
let billNumer = parseInt(bill.value);

let people = document.querySelector(".inputs-section__people-input");
let peopleNumber = parseInt(people.value);

let buttons = document.querySelectorAll(".buttons__button");

let tipResult = document.querySelector(".results__tip-value");
let totalResult = document.querySelector(".results__total-value");

let alert = document.querySelector("#alert");

let tipValue = 0;

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    // change styles
    removeActive();

    element.classList.add("buttons__button--selected");

    tipValue = parseInt(event.target.innerText.slice(0, -1));
    calculateTip();
  });
});

// Updating the bill of the field.
bill.addEventListener("input", () => {
  billNumer = parseInt(bill.value);
  calculateTip();
});

//updating custom
let custom = document.querySelector(".buttons__custom");
custom.addEventListener("click", () => {
  removeActive();
});

custom.addEventListener("input", () => {
  tipValue = parseInt(custom.value);

  if (!isNaN(tipValue)) {
    calculateTip();
  }
});

// Updating number of people
people.addEventListener("input", () => {
  peopleNumber = parseFloat(people.value);

  if (peopleNumber == 0 || isNaN(peopleNumber)) {
    people.style.borderColor = "rgb(209, 164, 79)";
    alert.classList.add("error");
  } else {
    alert.classList.remove("error");
    people.style.borderColor = "hsl(189, 41% 97%)";
    calculateTip();
  }
});

// Reset button
let btnReset = document.querySelector(".result-section__reset");

btnReset.addEventListener("click", () => {
  bill.value = "";
  billNumer = "";
  people.value = 5;
  peopleNumber = 5;
  custom.value = "Custom";
  calculateTip();
});

function removeActive() {
  buttons.forEach((element) => {
    element.classList.remove("buttons__button--selected");
  });
}

function calculateTip() {
  // Tip Amount Calculation
  tipResult.innerText = ((billNumer * tipValue) / 100 / peopleNumber).toFixed(
    2
  );

  //Calculation of the total
  totalResult.innerText = (
    ((billNumer * tipValue) / 100 + billNumer) /
    peopleNumber
  ).toFixed(2);
}
