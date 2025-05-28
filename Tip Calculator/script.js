// ===== DOM ELEMENTS =====
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const customTipInput = document.querySelector("#customTip");
const tipButtons = document.querySelectorAll(".tip-btn");
const tipResult = document.querySelector("#tip-result");
const totalResult = document.querySelector("#total-result");
const resetBtn = document.querySelector("#reset-btn");

// ===== STATE VARIABLES =====
let bill = 0;
let people = 1;
let tip = 0;

// ===== UTILITY FUNCTIONS =====

// IMPROVEMENT: Added input validation function
function validateInput(input, value, min = 0, max = Infinity) {
  // Remove error class first
  input.classList.remove("error");

  if (value < min || value > max || isNaN(value)) {
    input.classList.add("error");
    return false;
  }
  return true;
}

// IMPROVEMENT: Added function to update reset button state
function updateResetButton() {
  const hasValues = bill > 0 || people > 1 || tip > 0;
  resetBtn.disabled = !hasValues;
}

// IMPROVEMENT: Enhanced calculate function with better error handling
function calculate() {
  // Validate inputs before calculating
  const isBillValid = validateInput(billInput, bill, 0);
  const isPeopleValid = validateInput(peopleInput, people, 1);

  // If people is less than 1 or inputs are invalid, show $0.00
  if (people < 1 || !isBillValid || !isPeopleValid || bill === 0) {
    tipResult.textContent = "$0.00";
    totalResult.textContent = "$0.00";
    updateResetButton();
    return;
  }

  // Calculate tip and total per person
  const tipPerPerson = (bill * (tip / 100)) / people;
  const totalPerPerson = bill / people + tipPerPerson;

  // IMPROVEMENT: Added number formatting for better display
  tipResult.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalResult.textContent = `$${totalPerPerson.toFixed(2)}`;

  updateResetButton();
}

// ===== EVENT LISTENERS =====

// IMPROVEMENT: Enhanced bill input with better validation
billInput.addEventListener("input", (e) => {
  const value = parseFloat(e.target.value);
  bill = isNaN(value) ? 0 : value;

  // IMPROVEMENT: Prevent negative values
  if (bill < 0) {
    bill = 0;
    billInput.value = "";
  }

  calculate();
});

// IMPROVEMENT: Enhanced people input with better validation
peopleInput.addEventListener("input", (e) => {
  const value = parseInt(e.target.value);
  people = isNaN(value) ? 0 : value;

  // IMPROVEMENT: Prevent values less than 1
  if (people < 1 && e.target.value !== "") {
    people = 1;
    peopleInput.value = "1";
  }

  calculate();
});

// IMPROVEMENT: Enhanced custom tip input with validation
customTipInput.addEventListener("input", (e) => {
  const value = parseFloat(e.target.value);
  tip = isNaN(value) ? 0 : value;

  // IMPROVEMENT: Prevent negative tip values
  if (tip < 0) {
    tip = 0;
    customTipInput.value = "";
  }

  // IMPROVEMENT: Reasonable maximum tip percentage (100%)
  if (tip > 100) {
    tip = 100;
    customTipInput.value = "100";
  }

  clearActiveButtons();
  calculate();
});

// IMPROVEMENT: Enhanced tip button handling
tipButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // IMPROVEMENT: Prevent form submission if button is in a form
    e.preventDefault();

    tip = parseFloat(btn.dataset.tip);
    clearActiveButtons();
    btn.classList.add("active");
    customTipInput.value = ""; // Clear custom input when preset is selected
    calculate();
  });
});

// IMPROVEMENT: Added keyboard support for tip buttons
tipButtons.forEach((btn) => {
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
});

function clearActiveButtons() {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
}

// IMPROVEMENT: Enhanced reset function
resetBtn.addEventListener("click", () => {
  // Clear all inputs
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";

  // Reset state variables
  bill = 0;
  people = 1;
  tip = 0;

  // Clear visual states
  clearActiveButtons();

  // IMPROVEMENT: Remove any error states
  billInput.classList.remove("error");
  peopleInput.classList.remove("error");
  customTipInput.classList.remove("error");

  // Reset display
  tipResult.textContent = "$0.00";
  totalResult.textContent = "$0.00";

  // Update reset button state
  updateResetButton();

  // IMPROVEMENT: Focus back to bill input for better UX
  billInput.focus();
});

// ===== INITIALIZATION =====
// IMPROVEMENT: Initialize the app state on load
document.addEventListener("DOMContentLoaded", () => {
  updateResetButton();
  calculate();
});
