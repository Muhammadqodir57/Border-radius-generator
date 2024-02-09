const box = document.getElementById('box');
const tl = document.getElementById('tl');
const tr = document.getElementById('tr');
const bl = document.getElementById('bl');
const br = document.getElementById('br');

const tlValue = document.getElementById('tl-value');
const trValue = document.getElementById('tr-value');
const blValue = document.getElementById('bl-value');
const brValue = document.getElementById('br-value');

function updateBorderRadius() {
    const topLeft = tl.value + 'px';
    const topRight = tr.value + 'px';
    const bottomLeft = bl.value + 'px';
    const bottomRight = br.value + 'px';
    const borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    box.style.borderRadius = borderRadius;

    tlValue.value = tl.value;
    trValue.value = tr.value;
    blValue.value = bl.value;
    brValue.value = br.value;
}

tl.addEventListener('input', updateBorderRadius);
tr.addEventListener('input', updateBorderRadius);
bl.addEventListener('input', updateBorderRadius);
br.addEventListener('input', updateBorderRadius);