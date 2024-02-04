function splat() {
    let sound = new Audio('Splat.mp3');
    sound.play();
}

function createDonutBurglar() {
    const burglar = document.createElement('img');
    const imageSources = ['Burglar1.png', 'Burglar2.png', 'Burglar3.png'];
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    burglar.src = imageSources[randomIndex];
    burglar.style.position = 'absolute';
    burglar.style.width = '75px';
    burglar.style.height = '75px';

    const minDistance = 200;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    let start = burglarPosition(centerX, centerY, minDistance);
    const end = { x: centerX - 50, y: centerY - 50 };
    burglar.style.left = `${start.x}px`;
    burglar.style.top = `${start.y}px`;

    document.body.appendChild(burglar);

    const duration = 7000; 
    const startTime = Date.now();
    let clicked = false;

    burglar.addEventListener('click', () => {
        clicked = true;
        splat();
        document.body.removeChild(burglar);
        scheduleNextBurglar();
    });

    const animateBurglar = () => {
        if (clicked) {
            document.body.removeChild(burglar);
            return;
        }

        const currentTime = Date.now() - startTime;
        const progress = currentTime / duration;

        if (progress >= 1) {
            document.body.removeChild(burglar);
            scheduleNextBurglar();
            return;
        }

        const currentX = start.x + (end.x - start.x) * progress;
        const currentY = start.y + (end.y - start.y) * progress;

        burglar.style.left = `${currentX}px`;
        burglar.style.top = `${currentY}px`;

        const centerDonut = document.getElementById('donut');
        const centerRect = centerDonut.getBoundingClientRect();
        const burglarRect = burglar.getBoundingClientRect();

        if (
            burglarRect.left <= centerRect.right &&
            burglarRect.right >= centerRect.left &&
            burglarRect.top <= centerRect.bottom &&
            burglarRect.bottom >= centerRect.top
        ) {
            const overlapThresholdX = 5;
            const overlapThresholdY = 5; 
        
            if (
                centerRect.left <= burglarRect.right - overlapThresholdX &&
                centerRect.right >= burglarRect.left + overlapThresholdX &&
                centerRect.top <= burglarRect.bottom - overlapThresholdY &&
                centerRect.bottom >= burglarRect.top + overlapThresholdY
            ) {
                const donutCount = parseInt(document.getElementById('increment').innerHTML);
                const stolenCount = Math.floor(donutCount * 0.5);
                document.getElementById('increment').innerHTML = donutCount - stolenCount;
        
                document.body.removeChild(burglar);
                scheduleNextBurglar();
            } else {
                requestAnimationFrame(animateBurglar);
            }
        } else {
            requestAnimationFrame(animateBurglar);
        }
        
    };

    requestAnimationFrame(animateBurglar);
}

function burglarPosition(centerX, centerY, minDistance) {
    let startX, startY;
    do {
        startX = Math.random() * window.innerWidth;
        startY = Math.random() * window.innerHeight;
    } while (
        Math.abs(startX - centerX) < minDistance ||
        Math.abs(startY - centerY) < minDistance
    );
    return { x: startX, y: startY };
}

function scheduleNextBurglar() {
    setTimeout(createDonutBurglar, Math.random() * 30000 + 30000);
}

createDonutBurglar();
