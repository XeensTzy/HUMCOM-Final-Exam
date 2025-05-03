function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
  
    result = num1 + num2;

    document.getElementById('output').innerText = `Result: ${result}`;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function minus() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
  
    result = num1 - num2;

    document.getElementById('output').innerText = `Result: ${result}`;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function times() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
  
    result = num1 * num2;

    document.getElementById('output').innerText = `Result: ${result}`;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
  
    result = num1 / num2;

    document.getElementById('output').innerText = `Result: ${result}`;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}