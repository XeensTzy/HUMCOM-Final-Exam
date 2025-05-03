function getResult(){
    const num=parseFloat(document.getElementById('num').value);
    var divisors = 0;

    if (num % 2 == 0){
        document.getElementById('output').innerText = "The Number is Even";
    } else {
        document.getElementById('output').innerText = "The Number is Odd";
    }
    
    if (num <= 1){
        document.getElementById('output2').innerText = "INVALID NUMBER";
    }
    else if (num % 2 == 0 || num % 3 == 0 || num % 7 == 0 || num % 8 == 0 || num % 5 == 0){
        document.getElementById('output2').innerText = "The Number is Composite";
    } else {
        document.getElementById('output2').innerText = "The Number is Prime";
    }

    for (var i = 1 ; i<=num ; i++){
            if (num % i == 0){
                divisors++;
            }
    }

    document.getElementById('ab').innerHTML ="Number of Divisor/s: " + divisors ;
}
    
