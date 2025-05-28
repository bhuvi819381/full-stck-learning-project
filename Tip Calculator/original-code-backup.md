# 📁 Your Original Code (Backup)

## 🎨 Original CSS (style.css)
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 90rem;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
}

main {
  width: 50rem;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
}

.calculator {
  width: 50%;
  background-color: rgb(100, 146, 216);
}

.result {
  width: 50%;
  background-color: rgb(0, 204, 255);
  border-radius: 1rem;
  padding: 1rem;
}

label {
  display: block;
  font-weight: 500;
}

input {
    width: 100%;
    padding: 1rem;
    background-color: azure;

    &::placeholder{
        float: right;
    }
}

button {
    background-color: green;
    padding: 1rem 2rem;
    border-radius: 7px;
    border: none;
    color: white;
    font-size: 1.2em;
    font-weight: 500;
    
    display: inline-block;
}
```

## 💻 Original JavaScript (script.js)
```javascript
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const customTipInput = document.querySelector("#customTip");
const tipButtons = document.querySelectorAll(".tip-btn");
const tipResult = document.querySelector("#tip-result");
const totalResult = document.querySelector("#total-result");
const resetBtn = document.querySelector("#reset-btn");

let bill = 0;
let people = 1;
let tip = 0;

// 🧮 Calculate tip per person and total per person
function calculate() {
  if (people < 1) {
    tipResult.textContent = "$0.00";
    totalResult.textContent = "$0.00";
    return;
  }

  const tipPerPerson = (bill * (tip / 100)) / people;
  const totalPerPerson = bill / people + tipPerPerson;

  tipResult.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalResult.textContent = `$${totalPerPerson.toFixed(2)}`;
}

// 📥 Input event listeners
billInput.addEventListener("input", () => {
  bill = parseFloat(billInput.value) || 0;
  calculate();
});

peopleInput.addEventListener("input", () => {
  people = parseInt(peopleInput.value) || 0;
  calculate();
});

customTipInput.addEventListener("input", () => {
  tip = parseFloat(customTipInput.value) || 0;
  clearActiveButtons();
  calculate();
});

// 💡 Handle % buttons
tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tip = parseFloat(btn.dataset.tip);
    clearActiveButtons();
    btn.classList.add("active");
    customTipInput.value = "";
    calculate();
  });
});

function clearActiveButtons() {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
}

// 🔁 Reset everything
resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";

  bill = 0;
  people = 1;
  tip = 0;

  clearActiveButtons();
  tipResult.textContent = "$0.00";
  totalResult.textContent = "$0.00";
});
```

## 📝 Key Issues in Your Original Code:

1. **CSS Issues:**
   - `&::placeholder` syntax is not standard CSS
   - Fixed width layout (not responsive)
   - Poor color choices
   - No hover/focus states

2. **JavaScript Issues:**
   - No input validation
   - No error handling
   - No accessibility features
   - No visual feedback for errors

3. **HTML Issues:**
   - Missing accessibility attributes
   - No meta description
   - Limited semantic structure

Compare this with the improved version to see the differences! 🚀
