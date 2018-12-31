let donateButton = document.querySelector('#donate');
let amountObject = document.querySelector('#donation-amount');

function donate() {
    let amount = +amountObject.innerHTML;
    amount += 3;
    amountObject.innerHTML = amount;
}

donateButton.addEventListener('click', donate);

let excuseButton = document.querySelector('#excuse');

function excuse() {
    alert("I think I left the oven on!");
}

excuseButton.addEventListener('click', excuse);

let killTimeButton = document.querySelector('#killTime');

function killTime() {
    location.href='http://google.com';
}

killTimeButton.addEventListener('click', killTime);