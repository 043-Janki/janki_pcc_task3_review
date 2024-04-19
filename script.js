document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.choose');
    const submitButton = document.querySelector('.submit-button');

    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('active'));

            star.classList.add('active');
            selectedRating = parseInt(star.id);
        });
    });

    submitButton.addEventListener('click', () => {
        if (selectedRating === 0) {
            alert('Please select a rating before submitting.');
        } else {
            const feedbackContainer = document.querySelector('.submit-feedback');
            feedbackContainer.style.display = 'block';
            console.log(selectedRating);
            const message = document.querySelector('.message-1');
            message.textContent = `You selected ${selectedRating} out of 5`;
        }
        let box = document.querySelector(".box");
        let submitFeedback = document.querySelector(".submit-feedback");
        box.classList.add("hidden");
        submitFeedback.classList.remove("hidden");
    });
});


