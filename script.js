document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessages = document.getElementById('formMessages');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formMessages.textContent = 'Message sent successfully!';
                formMessages.style.color = 'green';
                form.reset();
            } else {
                formMessages.textContent = 'An error occurred. Please try again.';
                formMessages.style.color = 'red';
            }
        })
        .catch(error => {
            formMessages.textContent = 'An error occurred. Please try again.';
            formMessages.style.color = 'red';
        });
    });
});
