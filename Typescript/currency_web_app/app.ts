const input = document.getElementById('currencyPair') as HTMLInputElement;
const activeCurrency = document.getElementById('activeCurrencyPair') as HTMLInputElement;
const button = document.getElementById('button');



function x (n1: string, n2: string) {
    return n1.toString() + n2.toString();
}

button?.addEventListener('click', function() {
    console.log(x(input.value, activeCurrency.value))
})