var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const jasdf = [0, 1, 2];

function render() {
    canvas.width = document.getElementById('width').value;
    canvas.height = document.getElementById('height').value;
    let sum = `(256 ** ${alpha ? '4' : '3'}) ** (${canvas.width} * ${canvas.height})`;
    let useAlpha = document.getElementById('alpha').checked;
    document.getElementById('possibilities').innerHTML = `${sum} = ${eval(sum)}`;
    
    let imageData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
        jasdf.forEach(j => imageData.data[i+j] = Math.floor(Math.random() * 256));
        imageData.data[i+3] = useAlpha ? Math.floor(Math.random() * 256) : 255;
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData);
}