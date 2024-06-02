document.addEventListener('DOMContentLoaded', function () {
    const comments = document.querySelectorAll('.comments-item');
    const indicators = document.querySelectorAll('.comments-inner-bar img');

    let currentIndex = 0;

    function showComment(index) {
        comments.forEach((comment, i) => {
            comment.classList.remove('active');
            indicators[i].classList.remove('active');
        });
        comments[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showComment(index);
        });
    });

    // Initial display
    showComment(currentIndex);
});
