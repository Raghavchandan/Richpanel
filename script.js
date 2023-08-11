// script.js
const switchToggle = document.getElementById('switchToggle');

switchToggle.addEventListener('change', function() {
    if (this.checked) {
        window.location.href = 'yearly plan.html';
    } else {
        window.location.href = 'monthly plans.html';
    }
});
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', function() {
    window.location.href = 'payment.html';
});
