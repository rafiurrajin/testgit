const b = document.body;
let q = 0;

setInterval(() => {
    const c = q % 255;
    b.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
    q += 10
}, 100);