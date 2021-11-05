let isFibonacci = true; 

while(isFibonacci) {
    const n = prompt('Please, enter n', 3);

    if(!(n.trim() && isFinite(n) && Number.isInteger(n))){
        alert('Please, enter valid number');
        continue;
    }
    console.log(n)

    alert (`n is ${Fibonacci(Number(n))}`)
    isFibonacci = confirm("Do you want to continue Fibonacci?");
}

function Fibonacci (n, first = 0, second = 1) {
    switch (true) {
        case (n === first): {
            return first;
        }
        case (n === second): {
            return second;
        }
        case (n > 0): {
            return Fibonacci(n - 1) + Fibonacci(n - 2);
        }
        case (n < 0): {
            return Fibonacci(n + 2) - Fibonacci (n + 1);
        }
        default: {
            console.log('error')
        }
    }
}