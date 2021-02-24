const crore = document.querySelector("input.crore");
const million = document.querySelector("input.million");
const rate = document.querySelector(".rate");

const exchangeRateINR_USD = () => {
  fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=INR`)
    .then(response => response.json())
    .then(json => {
      console.log("hello world");
      rate.innerHTML = json.rates.INR.toFixed(2);
      million.value = ((crore.value / json.rates.INR) * 10).toFixed(2);
    });
}

const exchangeRateUSD_INR = () => {
  fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=INR`)
    .then(response => response.json())
    .then(json => {
      console.log("hello world");
      rate.innerHTML = json.rates.INR.toFixed(2);
      crore.value = ((million.value * json.rates.INR) / 10).toFixed(2);
    });
}


crore.addEventListener('input', exchangeRateINR_USD);
million.addEventListener('input', exchangeRateUSD_INR)