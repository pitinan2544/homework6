document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.btn-minus');
    const plusBtn = document.querySelector('.btn-plus');
    const resetBtn = document.querySelector('.btn-reset');
    const counterNumber = document.querySelector('.counter-number');

    minusBtn.addEventListener('click', function() {
        let currentNumber = parseInt(counterNumber.textContent);
        if (currentNumber > 0) {
            counterNumber.textContent = currentNumber - 1;
        }
    });

    plusBtn.addEventListener('click', function() {
        let currentNumber = parseInt(counterNumber.textContent);
        counterNumber.textContent = currentNumber + 1;
    });

    resetBtn.addEventListener('click', function() {
        counterNumber.textContent = 0;
    });
});