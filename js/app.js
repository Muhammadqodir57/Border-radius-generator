const elBox = document.getElementById('box');
const topLeft = document.getElementById('tl');
const topRight = document.getElementById('tr');
const bottomLeft = document.getElementById('bl');
const bottomRight = document.getElementById('br');

const topLeftValue = document.getElementById('tl-value');
const topRightValue = document.getElementById('tr-value');
const bottomLeftValue = document.getElementById('bl-value');
const bottomRightValue = document.getElementById('br-value');

function updateBorderRadius() {
    const topLeft = tl.value + 'px';
    const topRight = tr.value + 'px';
    const bottomLeft = bl.value + 'px';
    const bottomRight = br.value + 'px';
    const borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    elBox.style.borderRadius = borderRadius;

    topLeftValue.value = topLeft.value;
    topRightValue.value = topRight.value;
    bottomLeft.value = bottomLeft.value;
    bottomRight.value = borderRadius.value;
}

topLeft.addEventListener('input', updateBorderRadius);
topRight.addEventListener('input', updateBorderRadius);
bottomLeft.addEventListener('input', updateBorderRadius);
bottomRight.addEventListener('input', updateBorderRadius);