const crore = document.querySelector("input.crore");
const million = document.querySelector("input.million");
const rate = document.querySelector(".rate");

const exchangeRateINR_USD = () => {
  fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=INR`)
    .then(response => response.json())
    .then(json => {
      million.value = ((crore.value / json.rates.INR) * 10).toFixed(2);
    });
}

const exchangeRateUSD_INR = () => {
  fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=INR`)
    .then(response => response.json())
    .then(json => {
      crore.value = ((million.value * json.rates.INR) / 10).toFixed(2);
    });
}

const rateUpdate = () => {
  fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=INR`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      rate.innerHTML = (json.rates.INR);
    })
}


crore.addEventListener('input', exchangeRateINR_USD);
million.addEventListener('input', exchangeRateUSD_INR)

rateUpdate();