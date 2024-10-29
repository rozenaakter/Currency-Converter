function convertCurrency() {
    const amount = document.getElementById('amount').value
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Exchange rates that i can update this;

    const exchangeRates = {
        USD : 1,
        BDT : 120
    };

    if (amount === '' || amount <= 0){
        alert('Please Enter a valid amount');
        return;
    }

    // conversion formula
    let convertedAmount ;
    if(fromCurrency === toCurrency) {
        convertedAmount = amount
    } else {
        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];
        convertedAmount = (amount / fromRate) * toRate;
    }

    document.getElementById('result').textContent = `converted amount : ${convertedAmount.toFixed(2)} ${toCurrency}`;



}