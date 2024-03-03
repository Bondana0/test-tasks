document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        loanAmountInput: document.getElementById('loan-amount-input'),
        loanAmountSlider: document.getElementById('loan-amount-slider'),
        loanAmountError: document.getElementById('loan-amount-error'),
        loanDurationInput: document.getElementById('loan-duration-input'),
        loanDurationSlider: document.getElementById('loan-duration-slider'),
        loanDurationError: document.getElementById('loan-duration-error'),
        submitButton: document.getElementById('submit-button'),
        dailyPaymentOutput: document.getElementById('daily-payment'),
        totalPaymentOutput: document.getElementById('total-payment')
    };

    function restoreFromLocalStorage() {
        Object.keys(elements).forEach(key => {
            if (localStorage.getItem(key)) {
                elements[key].value = localStorage.getItem(key);
            }
        });
    }

    function updateLocalStorage() {
        Object.keys(elements).forEach(key => {
            localStorage.setItem(key, elements[key].value);
        });
    }

    function showError(element, message) {
        element.innerText = message;
        element.style.display = 'block';
    }

    function validateInputs() {
        const amount = parseInt(elements.loanAmountInput.value);
        const duration = parseInt(elements.loanDurationInput.value);

        if (isNaN(amount) || amount < 1000 || amount > 50000) {
            showError(elements.loanAmountError, 'Сума кредиту повинна бути від 1000 до 50000 грн');
            elements.loanAmountInput.value = '1000';
            elements.loanAmountSlider.value = '1000';
            return false;
        }

        if (isNaN(duration) || duration < 7 || duration > 60) {
            showError(elements.loanDurationError, 'Період погашення повинен бути від 7 до 60 днів');
            elements.loanDurationInput.value = '7';
            elements.loanDurationSlider.value = '7';
            return false;
        }

        return true;
    }

    function calculatePayments() {
        if (!validateInputs()) {
            elements.dailyPaymentOutput.value = '';
            elements.totalPaymentOutput.value = '';
            elements.submitButton.disabled = true;
            return;
        }

        const amount = parseInt(elements.loanAmountInput.value);
        const duration = parseInt(elements.loanDurationInput.value);

        const dailyPayment = ((amount + (amount * (2.2 / 100) * duration)) / duration).toFixed(2);
        const totalPayment = (dailyPayment * duration).toFixed(2);
        elements.dailyPaymentOutput.value = dailyPayment + ' грн';
        elements.totalPaymentOutput.value = totalPayment + ' грн';

        updateLocalStorage();

        elements.submitButton.disabled = false;
        elements.loanAmountError.style.display = 'none';
        elements.loanDurationError.style.display = 'none';
    }

    ['loanAmount', 'loanDuration'].forEach(key => {
        elements[key + 'Input'].addEventListener('input', function() {
            elements[key + 'Slider'].value = elements[key + 'Input'].value;
            calculatePayments();
        });

        elements[key + 'Slider'].addEventListener('input', function() {
            elements[key + 'Input'].value = elements[key + 'Slider'].value;
            calculatePayments();
        });
    });

    document.getElementById('loan-form').addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePayments();
    });

    restoreFromLocalStorage();
    calculatePayments();
});