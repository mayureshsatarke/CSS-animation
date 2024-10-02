const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        box.style.backgroundColor = randomColor;
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = '#61dafb';
    });
});
