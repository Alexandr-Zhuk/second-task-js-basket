let qty = document.querySelector('.qty');
let qtyValue = qty.innerHTML;
let decr = document.querySelector('.decr');
let incr = document.querySelector('.incr');
let price = document.querySelector('.good-price > input[name="price"]');
let basePrice = 0;
let sum = document.querySelector('.good-sum');
let currency = document.querySelector('.currency');
let basket = {
    '1' : {
        'name' : 'Чашка белая с цветком',
        'quantity' : 1,
        'price' : 0,
    },
    '2' : {
        'name' : 'Чашка черная без никто',
        'quantity' : 1,
        'price' : 0,
    }
};
let currencies = new Map([
    ['uah', '1'],
    ['usd', '40'],
    ['eur', '41']
]);

decr.addEventListener('click', () => {
    if(qty.innerHTML == 0){
        qty.innerHTML = 0;
    }else{
        qty.innerHTML -= 1;
        sum.innerHTML = price.value * qty.innerHTML;
    }
});

incr.addEventListener('click', () => {
    
    qty.innerHTML = Number(qty.innerHTML) + 1;
    sum.innerHTML = price.value * qty.innerHTML;
});

price.addEventListener('blur', () => {
    sum.innerHTML = price.value * qty.innerHTML;
    basePrice = price.value;
});

currency.addEventListener('change', () => {
    
    price.value = basePrice / currencies.get(currency.value)
    sum.innerHTML = price.value * qty.innerHTML;
    
})

console.log(currency.innerHTML);