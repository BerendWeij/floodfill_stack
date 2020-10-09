const getColor = (x, y) => ctx.getImageData(x, y, 1, 1).data;

var id = ctx.createImageData(1,1); // only do this once per page


const changeColor = (x, y, [r,g,b,a]) => {
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    ctx.fillRect( x, y, 1, 1 );
};