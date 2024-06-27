let countEl = document.querySelectorAll(".count-form")[0];
let countH1El = document.querySelectorAll(".count")[0];
let errorEl = document.querySelectorAll(".error-msg")[0];

// add function
function addCount() {
    let countElVal = countEl.value;
    printMsg(countElVal, '+');
}

// minus function
function minusCount() {
    let countElVal = countEl.value;
    printMsg(countElVal, '-');
}

// message printing function
function printMsg(formVal, operator) {
    if (isNaN(formVal)) {
        errorEl.innerHTML = `Count value must have a number!`
    }
    else if (operator === '+') {
        countH1El.innerHTML = Number(countH1El.innerHTML) + Number(formVal);
        errorEl.innerHTML = '';
    }
    else if (operator === '-') {
        countH1El.innerHTML = Number(countH1El.innerHTML) - Number(formVal);
        errorEl.innerHTML = ''
    }
}