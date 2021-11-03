let currentCurrency, 
    transferCurrency, 
    moneyAmount, 
    isConverter = true,
    valCurrCurrency,
    valTransferCurrency; 

const eur = 30.4,
      usd = 26.23,
      rub = 0.36,
      byn = 10.64,
      pln = 6.63;

while(isConverter) {
    currentCurrency = prompt('Please, enter the current currency (EUR, USD,RUB,BYN,PLN)', 'EUR');

    switch(true) {
        case currentCurrency === 'EUR': {
            valCurrCurrency = eur;
            break;
        }
        case currentCurrency === 'USD': {
            valCurrCurrency = usd;
            break;
        }
        case currentCurrency === 'RUB': {
            valCurrCurrency = rub;
            break;
        }
        case currentCurrency === 'BYN': {
            valCurrCurrency = byn;
            break;
        }
        case currentCurrency === 'PLN': {
            valCurrCurrency = pln;
            break;
        }
        default:{
            alert('Please, enter valid currency');
            continue;
        } 
    }

    moneyAmount = prompt('Please, enter the amount of money', 100);

    if(!(moneyAmount.trim() && isFinite(moneyAmount))){
        alert('Please, enter valid number');
        continue;
    }

    transferCurrency = prompt('Please, enter the currency to which you want to transfer (EUR, USD,RUB,BYN,PLN)', 'USD');

    switch(true) {
        case transferCurrency === 'EUR': {
            valTransferCurrency = eur;
            break;
        }
        case transferCurrency === 'USD': {
            valTransferCurrency = usd;
            break;
        }
        case transferCurrency === 'RUB': {
            valTransferCurrency = rub;
            break;
        }
        case transferCurrency === 'BYN': {
            valTransferCurrency = byn;
            break;
        }
        case transferCurrency === 'PLN': {
            valTransferCurrency = pln;
            break;
        }
        default:{
            alert('Please, enter valid currency');
            continue;
        } 
    }

    let newAmount = valCurrCurrency / valTransferCurrency * moneyAmount;

    alert(`${moneyAmount} in ${currentCurrency} will be ${newAmount.toFixed(2)} in ${transferCurrency}`)

    isConverter = confirm("Do you want to continue converting?");
}


