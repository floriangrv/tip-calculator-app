const totalBill = document.querySelector(".tip__bill-result");
const tipNumberPeople  = document.querySelector('.tip__number--people ')
const numberPeople = document.querySelector(".tip__number--result");
const allTipsPreset = document.querySelectorAll(".btn__tips");
const customTips = document.querySelector(".custom");
const tipPrice = document.querySelector(".total--tip");
const totalPrice = document.querySelector(".total--price");

const reset = document.querySelector(".reset");

let currentTips = 0;
allTipsPreset.forEach(function (el) {
  el.addEventListener("click", function (e) {
    currentTips = parseFloat(this.innerHTML);
    calculate();
  });
});

totalBill.addEventListener("input", calculate);
numberPeople.addEventListener("input", calculate);
customTips.addEventListener("input", calculate);

const getTotalBill = function () {
  return parseFloat(totalBill.value);
};

const getCustomTips = function () {
  return parseInt(customTips.value);
};

const getNumberPeople = function () {
    if(numberPeople.value == 0 ) {
        tipNumberPeople.classList.add("red-outline")
    } else if (numberPeople.value != 0) {
        tipNumberPeople.classList.remove("red-outline")

    }
  return parseInt(numberPeople.value);
};

function calculate() {
  if (customTips.value !=="") {
    let tipAmount = (getCustomTips() / 100) * getTotalBill();
    let totalWithTip = getTotalBill() + tipAmount;
    tipPrice.innerHTML = "$" + (tipAmount / getNumberPeople()).toFixed(2);
    totalPrice.innerHTML = "$" + (totalWithTip / getNumberPeople()).toFixed(2);
  } else {
    let tipAmount = (currentTips / 100) * getTotalBill();
    let totalWithTip = getTotalBill() + tipAmount;
    tipPrice.innerHTML = "$" + (tipAmount / getNumberPeople()).toFixed(2);
    totalPrice.innerHTML = "$" + (totalWithTip / getNumberPeople()).toFixed(2);
  }
}

function resetCustom() {
  document.querySelector(".custom").value = "";
  totalBill.value = 0;
  numberPeople.value = 0;
  tipPrice.innerHTML = "$" + "0.00";
  totalPrice.innerHTML = "$" + "0.00";
}

reset.addEventListener("click", function (e) {
  e.preventDefault();
  resetCustom();
});
