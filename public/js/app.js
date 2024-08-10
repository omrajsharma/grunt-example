console.log('JavaScript is loaded.');

// Simple event listener for the button
document.getElementById('showAlert').addEventListener('click', function() {
    alert('Button clicked!');
});

// Dynamic content manipulation
document.addEventListener('DOMContentLoaded', function() {
    const services = ['Consulting', 'Support', 'Training'];
    const servicesList = document.querySelector('main section ul');

    services.forEach(function(service) {
        const li = document.createElement('li');
        li.textContent = service;
        servicesList.appendChild(li);
    });
});

// More JavaScript logic for demonstration
function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

setTimeout(function() {
    changeBackground('#e3e3e3');
}, 3000);
