const panel = document.querySelectorAll('.panel');
panel.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActive();
        panel.classList.add('active');
    });
 });
const removeActive = () => {
    panel.forEach(item => item.classList.remove('active'));
}
removeActive();
