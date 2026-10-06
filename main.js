document.querySelectorAll('.accordion').forEach(item => {
    const question = item.querySelector('.accordion__question');
    const answer = item.querySelector('.accordion__answer');

    question.addEventListener('click', () => {
        const isOpen = item.classList.toggle('active');
        answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : null;
    });
});