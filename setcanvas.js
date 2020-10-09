const loadImageIntoCanvas = (url, ctx) => {
    const img = new Image();
    img.src = url;
    img.onload = () => ctx.drawImage(img, 0, 0);
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
loadImageIntoCanvas('image.png', ctx);