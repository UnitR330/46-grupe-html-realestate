const images = document.querySelectorAll('.img_style2');

function toggleImageBlur(clickedImage) {
    images.forEach(image => {
        if (image !== clickedImage) {
            image.classList.remove('blur');
        } else {
            image.classList.add('blur');
        }
    });
}
 