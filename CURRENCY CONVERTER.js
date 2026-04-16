const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swap");

convertBtn.addEventListener("click", () => {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (!amount) {
    alert("Please enter an amount");
    return;
  }

  // Dummy conversion rate (replace with API)
  const rate = 83; // USD → INR example
  let result = amount * rate;

  document.getElementById("result").innerText =
    `${amount} ${from} = ${result.toFixed(2)} ${to}`;
});

swapBtn.addEventListener("click", () => {
  const from = document.getElementById("fromCurrency");
  const to = document.getElementById("toCurrency");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;
});