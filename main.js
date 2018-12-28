let donateButton = document.querySelector('#donate');
let amountObject = document.querySelector('#donation-amount');

function donate() {
  let amount = +amountObject.innerHTML;
  amount += 3;
  amountObject.innerHTML = amount;
}

donateButton.addEventListener('click', donate);