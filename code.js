// document.addEventListener('DOMContentLoaded', function() {
//     let loanAmountInput = document.getElementById('loan-amount-input');
//     let loanAmountSlider = document.getElementById('loan-amount-slider');
//     let loanAmountError = document.getElementById('loan-amount-error');
//     let loanDurationInput = document.getElementById('loan-duration-input');
//     let loanDurationSlider = document.getElementById('loan-duration-slider');
//     let loanDurationError = document.getElementById('loan-duration-error');
//     let submitButton = document.getElementById('submit-button');

//     loanAmountInput.addEventListener('input', function() {
//         loanAmountSlider.value = loanAmountInput.value;
//         checkFormValidity();
//     });

//     loanAmountSlider.addEventListener('input', function() {
//         loanAmountInput.value = loanAmountSlider.value;
//         checkFormValidity();
//     });

//     loanDurationInput.addEventListener('input', function() {
//         loanDurationSlider.value = loanDurationInput.value;
//         checkFormValidity();
//     });

//     loanDurationSlider.addEventListener('input', function() {
//         loanDurationInput.value = loanDurationSlider.value;
//         checkFormValidity();
//     });

//     function checkFormValidity() {
//         if (loanAmountInput.validity.valid && loanDurationInput.validity.valid) {
//             loanAmountError.style.display = 'none';
//             loanDurationError.style.display = 'none';
//             submitButton.disabled = false;
//         } else {
//             if (!loanAmountInput.validity.valid) {
//                 loanAmountError.style.display = 'block';
//             } else {
//                 loanAmountError.style.display = 'none';
//             }
//             if (!loanDurationInput.validity.valid) {
//                 loanDurationError.style.display = 'block';
//             } else {
//                 loanDurationError.style.display = 'none';
//             }
//             submitButton.disabled = true;
//         }
//     }

//     document.getElementById('loan-form').addEventListener('submit', function(e) {
//         e.preventDefault();
//         let amount = parseInt(loanAmountInput.value);
//         let duration = parseInt(loanDurationInput.value);
//         let dailyPayment = ((amount + (amount * (2.2/100) * duration)) / duration).toFixed(2);
//         let totalPayment = (amount + (amount * (2.2/100) * duration)).toFixed(2);
//         document.getElementById('daily-payment').value = dailyPayment + ' грн';
//         document.getElementById('total-payment').value = totalPayment + ' грн';
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    let loanAmountInput = document.getElementById('loan-amount-input');
    let loanAmountSlider = document.getElementById('loan-amount-slider');
    let loanAmountError = document.getElementById('loan-amount-error');
    let loanDurationInput = document.getElementById('loan-duration-input');
    let loanDurationSlider = document.getElementById('loan-duration-slider');
    let loanDurationError = document.getElementById('loan-duration-error');
    let submitButton = document.getElementById('submit-button');
    let dailyPaymentOutput = document.getElementById('daily-payment');
    let totalPaymentOutput = document.getElementById('total-payment');

    // Відновлення значень полів з локального сховища при завантаженні сторінки
    if (localStorage.getItem('loanAmount')) {
        loanAmountInput.value = localStorage.getItem('loanAmount');
        loanAmountSlider.value = localStorage.getItem('loanAmount');
    }

    if (localStorage.getItem('loanDuration')) {
        loanDurationInput.value = localStorage.getItem('loanDuration');
        loanDurationSlider.value = localStorage.getItem('loanDuration');
    }

    function calculatePayments() {
        let amount = parseInt(loanAmountInput.value);
        let duration = parseInt(loanDurationInput.value);

        if (isNaN(amount) || isNaN(duration) || amount < 1000 || amount > 50000 || duration < 7 || duration > 60) {
            dailyPaymentOutput.value = '';
            totalPaymentOutput.value = '';
            submitButton.disabled = true;
            if (isNaN(amount) || amount < 1000 || amount > 50000) {
                loanAmountError.innerText = 'Сума кредиту повинна бути від 1000 до 50000 грн';
                loanAmountError.style.display = 'block';
                loanAmountInput.value = '1000'; // Встановлення мінімального значення
                loanAmountSlider.value = '1000'; // Встановлення мінімального значення
            } else {
                loanAmountError.style.display = 'none';
            }
            if (isNaN(duration) || duration < 7 || duration > 60) {
                loanDurationError.innerText = 'Період погашення повинен бути від 7 до 60 днів';
                loanDurationError.style.display = 'block';
                loanDurationInput.value = '7'; // Встановлення мінімального значення
                loanDurationSlider.value = '7'; // Встановлення мінімального значення
            } else {
                loanDurationError.style.display = 'none';
            }
            return;
        }

        let dailyPayment = ((amount + (amount * (2.2/100) * duration)) / duration).toFixed(2);
        let totalPayment = (dailyPayment * duration).toFixed(2);
        dailyPaymentOutput.value = dailyPayment + ' грн';
        totalPaymentOutput.value = totalPayment + ' грн';

        // Збереження значень полів в локальному сховищі
        localStorage.setItem('loanAmount', loanAmountInput.value);
        localStorage.setItem('loanDuration', loanDurationInput.value);

        submitButton.disabled = false;
        loanAmountError.style.display = 'none';
        loanDurationError.style.display = 'none';
    }

    loanAmountInput.addEventListener('input', function() {
        loanAmountSlider.value = loanAmountInput.value;
        calculatePayments();
    });

    loanAmountSlider.addEventListener('input', function() {
        loanAmountInput.value = loanAmountSlider.value;
        calculatePayments();
    });

    loanDurationInput.addEventListener('input', function() {
        loanDurationSlider.value = loanDurationInput.value;
        calculatePayments();
    });

    loanDurationSlider.addEventListener('input', function() {
        loanDurationInput.value = loanDurationSlider.value;
        calculatePayments();
    });

    document.getElementById('loan-form').addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePayments();
    });

    // Розрахунок при завантаженні сторінки
    calculatePayments();
});














