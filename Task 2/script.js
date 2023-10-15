const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const width = window.screen.width;
    const height = window.screen.height;
    alert(`Ширина вашего экрана: ${width}px, высота: ${height}px`);
})
