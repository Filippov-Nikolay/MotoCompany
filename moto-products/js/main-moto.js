let order = document.querySelector('.btn');
let bgOrder = document.querySelector('.order');

order.addEventListener('click', function(e) {
    document.querySelector('.order').classList.add('order--active');
    document.body.style.overflow='hidden';
});
bgOrder.addEventListener('click', function(e) {
    if(!e.target.closest('.order form')) {
        document.querySelector('.order').classList.remove('order--active');
        document.body.style.overflow='auto';
    }
});