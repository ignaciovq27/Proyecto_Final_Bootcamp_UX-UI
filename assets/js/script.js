// CODIGO PARA FUNCIONAMIENTO DE MODAL EN GALERIA
const imageContainers = document.querySelectorAll('.image-container');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close');

imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        const image = container.querySelector('img');
        modalImage.src = image.src;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});