const starRating = document.querySelector('.star-rating');
const radios = starRating.querySelectorAll('input');
const stars = starRating.querySelectorAll('i');

radios.forEach((radio, index) => {
    radio.addEventListener('mouseover', () => {
        highlightStars(index + 1);
    });

    radio.addEventListener('mouseout', () => {
        const checkedRadio = starRating.querySelector('input:checked');
        if (checkedRadio) {
            highlightStars(parseInt(checkedRadio.value));
        } else {
            highlightStars(0);
        }
    });

    radio.addEventListener('click', () => {
        highlightStars(index + 1);
    });
});

function highlightStars(rating) {
    stars.forEach((star, index) => {
        star.style.opacity = index < rating ? '1' : '0';
    });
}

highlightStars(starRating.querySelector('input:checked')?.value || 0);  

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comment = document.getElementById('comment').value;

    const newFeedback = document.createElement('div');
    newFeedback.className = 'feedback-item';
    newFeedback.innerHTML = `
        <h3>${name}</h3>
        <div class="rating">${'⭐'.repeat(rating)}</div>
        <p>${comment}</p>
        <div class="shop-response">
            <strong>Louyi:</strong> Cảm ơn bạn đã gửi đánh giá. Chúng tôi rất trân trọng phản hồi của bạn và sẽ tiếp tục cải thiện dịch vụ.
        </div>
    `;

    document.getElementById('feedbackList').prepend(newFeedback);
    document.getElementById('feedbackForm').reset();
    highlightStars(0);
});