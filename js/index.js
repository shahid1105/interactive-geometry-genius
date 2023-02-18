// first card calculation
let serial = 0;
document.getElementById('first-card').addEventListener('click', function () {
    serial += 1;
    const cardTitle = document.getElementById('tr-title').innerText;

    const CardFirstInput = document.getElementById('tr-first-input').value;
    const CardSecondInput = document.getElementById('tr-second-input').value;
    const rules = document.getElementById('tr-rules').innerText;

    const calculation = parseFloat(rules) * parseFloat(CardFirstInput) * parseFloat(CardSecondInput).toFixed(2);

    
    // const result = calculationResult(cardTitle, CardFirstInput, CardSecondInput);
    displayData(cardTitle, calculation);
    
    
})

// second card calculation
document.getElementById('second-card').addEventListener('click', function () {
    serial += 1;
    const cardTitle = document.getElementById('re-title').innerText;

    const CardFirstInput = document.getElementById('re-first-input').value;
    const CardSecondInput = document.getElementById('re-second-input').value;
    const rules = document.getElementById('re-rules').innerText;

    const calculation = parseFloat(rules) * parseFloat(CardFirstInput) * parseFloat(CardSecondInput).toFixed(2);

    // const result = calculationResult(cardTitle, CardFirstInput, CardSecondInput);
    displayData(cardTitle, calculation);
})

// third card calculation
document.getElementById('third-card').addEventListener('click', function(){
    serial += 1;
    const cardTitle = document.getElementById('pa-title').innerText;

    const num1 = document.getElementById('pa-num1').innerText;
    const num2 = document.getElementById('pa-num2').innerText;

    const calculation = num1 * num2;

    displayData(cardTitle, calculation);
})

// fourth card calculation
document.getElementById('fourth-card').addEventListener('click', function(){
    serial += 1;
    const cardTitle = document.getElementById('rh-title').innerText;

    const num = document.getElementById('rh-num1').innerText;
    const num1 = document.getElementById('rh-num1').innerText;
    const num2 = document.getElementById('rh-num2').innerText;
    

    const calculation = parseFloat(num) * parseFloat(num1) * parseFloat(num2);

    displayData(cardTitle, calculation);
})

// fifth card calculation
document.getElementById('fifth-card').addEventListener('click', function(){
    serial += 1;
    const cardTitle = document.getElementById('pe-title').innerText;

    const num1 = document.getElementById('pe-num1').innerText;
    const num2 = document.getElementById('pe-num2').innerText;

    const calculation = parseInt(num1) * parseInt(num2);

    displayData(cardTitle, calculation);
})

// sixth card calculation
document.getElementById('sixth-card').addEventListener('click', function(){
    serial += 1;
    const cardTitle = document.getElementById('el-title').innerText;

    const num1 = document.getElementById('el-num1').innerText;
    const num2 = document.getElementById('el-num2').innerText;

    const calculation = 3.1416 * parseFloat(num1) * parseFloat(num2);

    displayData(cardTitle, calculation);
})


// common function 
// function calculationResult( CardFirstInput, CardSecondInput) {
//     const rules = document.getElementsByClassName('rules').innerText;
//     const calculation = parseFloat(rules) * parseFloat(CardFirstInput) * parseFloat(CardSecondInput).toFixed(2);

//     return calculation;
// }

function displayData(cardTitle, calculation){
    const calculationTable = document.getElementById('calculation-table');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${cardTitle}</td>
    <td><p>${calculation} cm</p></td>
    <button>convert to cm2</button>
    `
    calculationTable.appendChild(tr);
}