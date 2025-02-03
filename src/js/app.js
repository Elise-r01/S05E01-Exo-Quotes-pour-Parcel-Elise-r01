const btn = document.getElementById('author-btn');
btn.addEventListener('click', () => {
    const author = document.getElementById('author-name');
    author.classList.remove('off');
    author.classList.add('on');
    btn.classList.add('off');
});