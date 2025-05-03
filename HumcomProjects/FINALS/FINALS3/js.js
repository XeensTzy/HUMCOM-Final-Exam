function getResult(){
    const num=parseFloat(document.getElementById('num').value);

    const cm = num * 100000;

    document.getElementById('output').innerHTML = num + " kilometer/s is " + cm +" centimeters."
}
    
