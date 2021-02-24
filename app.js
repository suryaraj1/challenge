const crore = document.querySelector("input.crore");
const million = document.querySelector("input.million");
const rate = document.querySelector(".rate");

const exchangeRate = () => {
  fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=INR`)
    .then(response => response.json())
    .then(json => {
      rate.innerHTML = json.rates.INR.toFixed(2);
      million.value = crore.value * json.rates.INR;
    });
}

exchangeRate();