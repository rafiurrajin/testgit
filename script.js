const pi = 3.1416;
const e = 2.7;
const phi = 1.57;
const b = document.body;
let q = 0;

setInterval(() => {
    const c = q % 255;
    b.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
    q += 10
}, 100);
