function createCrumb(x, y, imageSources) {
    const crumb = document.createElement('img');
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    crumb.src = imageSources[randomIndex];
    crumb.style.position = 'absolute';
    crumb.style.width = '35px';
    crumb.style.height = '35px';
    crumb.style.opacity = '0.8';
    crumb.style.animation = 'flyAway 1s ease-in-out';
    crumb.style.pointerEvents = 'none';

    crumb.style.left = `${x + 600}px`;
    crumb.style.top = `${y + 250}px`;

    document.body.appendChild(crumb);

    setTimeout(() => {
        crumb.style.opacity = '0';
        crumb.style.transform = `translateY(-50px) scale(0.5)`;
    }, 0);
}

const imageSources = ['Donut1.png', 'Donut2.png', 'Donut3.png'];

document.getElementById('donut').addEventListener('click', function (event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (let i = 0; i < 10; i++) {
        createCrumb(x, y, imageSources);
    }
});
