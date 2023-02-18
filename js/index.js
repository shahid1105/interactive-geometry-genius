// first card calculation
let serial = 0;
document.getElementById('first-card').addEventListener('click', function () {
    serial += 1;
    const cardTitle = document.getElementById('tr-title').innerText;

    const CardFirstInput = document.getElementById('tr-first-input').value;
    const CardSecondInput = document.getElementById('tr-second-input').value;
    const rules = document.getElementById('tr-rules').innerText;

    const calculation = calculationValue(CardFirstInput, CardSecondInput, rules);

    // first card validation

    if (CardFirstInput <= 0 || CardSecondInput <= 0) {
        alert('Please provide a valid number');
        return;
    }
    else if (isNaN(calculation)) {
        alert('Please provide a valid number')
        return;
    }

    displayData(cardTitle, calculation);
})

// second card calculation
document.getElementById('second-card').addEventListener('click', function () {
    serial += 1;
    const cardTitle = document.getElementById('re-title').innerText;

    const CardFirstInput = document.getElementById('re-first-input').value;
    const CardSecondInput = document.getElementById('re-second-input').value;
    const rules = document.getElementById('re-rules').innerText;

    // call function
    const calculation = calculationValue(CardFirstInput, CardSecondInput, rules);

    // second card validation
    if (CardFirstInput <= 0 || CardSecondInput <= 0) {
        alert('Please provide a valid number');
        return;
    }
    else if (isNaN(calculation)) {
        alert('Please provide a valid number')
        return;
    }

    // call function
    displayData(cardTitle, calculation);
})

// third card calculation
document.getElementById('third-card').addEventListener('click', function () {
    serial += 1;
    const cardTitle = document.getElementById('pa-title').innerText;

    const num1 = document.getElementById('pa-num1').innerText;
    const num2 = document.getElementById('pa-num2').innerText;

    const calculation = num1 * num2;

    displayData(cardTitle, calculation);
})

// fourth card calculation
document.getElementById('fourth-card').addEventListener('click', function () {
    serial += 1;
    const cardTitle = document.getElementById('rh-title').innerText;

    const num = document.getElementById('rh-num1').innerText;
    const num1 = document.getElementById('rh-num1').innerText;
    const num2 = document.getElementById('rh-num2').innerText;


    const calculation = parseFloat(num) * parseFloat(num1) * parseFloat(num2);

    displayData(cardTitle, calculation);
})

// fifth card calculation
document.getElementById('fifth-card').addEventListener('click', function () {
    serial += 1;
    const cardTitle = document.getElementById('pe-title').innerText;

    const num1 = document.getElementById('pe-num1').innerText;
    const num2 = document.getElementById('pe-num2').innerText;

    const calculation = parseInt(num1) * parseInt(num2);

    displayData(cardTitle, calculation);
})

// sixth card calculation
document.getElementById('sixth-card').addEventListener('click', function () {
    serial += 1;
    const cardTitle = document.getElementById('el-title').innerText;

    const num1 = document.getElementById('el-num1').innerText;
    const num2 = document.getElementById('el-num2').innerText;

    const calculation = 3.1416 * parseFloat(num1) * parseFloat(num2);

    displayData(cardTitle, calculation.toFixed(2));
})


// change page: go to blog page
document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
})


// common function 
// first and second card common function
function calculationValue(CardFirstInput, CardSecondInput, rules) {
    const calculation = parseFloat(rules) * parseFloat(CardFirstInput) * parseFloat(CardSecondInput).toFixed(2);
    return calculation;
}

// for all card common function

function displayData(cardTitle, calculation) {
    const calculationTable = document.getElementById('calculation-table');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${cardTitle}</td>
    <td><p>${calculation} cm<sup>2</sup></p></td>
    `
    // <td><p><button>convert to m<sup>2</sup></button></p</td>
    calculationTable.appendChild(tr);
    // Create a button element
    const td = document.createElement('td');
    const button = document.createElement('button');
    
    // Set properties and attributes of the button element
    button.textContent = 'convert to m2';
    button.style.backgroundColor = '#1090D8';
    button.style.color = 'white';
    button.style.fontSize = '14px';
    button.style.padding = '5px';
    button.style.borderRadius = '3px';

    td.appendChild(button);
    tr.appendChild(td);
}


// change background color

// function changeBgColor() {
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
//     let bgColor = "rgb(" + x + "," + y + "," + z + ")";

//     div.style.backgroundColor = bgColor;
// }

// let divs = document.querySelectorAll('div');
// for (let i = 0; i < divs.length; i++) {
//       divs[i].onclick = function()
// }
// {
//     e.target.style.backgroundColor = changeBgColor();
// }