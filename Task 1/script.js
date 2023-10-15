const button = document.querySelector('.btn');
const buttonIcons = button.querySelectorAll('.btn_icon');

button.addEventListener('click', () => {
    buttonIcons.forEach((btn) => {
        btn.classList.toggle('show');
    })
})
