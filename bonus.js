function createFloatingDonut(imageSource, cookieValue) {
    const image = document.createElement("img");
    image.src = imageSource;
    image.style.position = "absolute";
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    image.style.left = randomX + "px";
    image.style.top = randomY + "px";

    image.addEventListener("click", function () {
        let donutCount = parseInt(document.getElementById("increment").innerHTML);
        donutCount += cookieValue;
        document.getElementById("increment").innerHTML = donutCount;

        // Play the sound
        sound2();

        document.body.removeChild(image);
    });

    image.addEventListener("mouseover", function () {
        image.style.transform = "scale(1.1)";
    });

    image.addEventListener("mouseout", function () {
        image.style.transform = "scale(1)";
    });

    image.style.width = "100px";
    image.style.height = "100px";

    document.body.appendChild(image);

    // Remove the image after 10 seconds
    setTimeout(function () {
        document.body.removeChild(image);
    }, 10000);

    // Animation
    image.style.animation = "floatAnimation 3s infinite ease-in-out";
    image.style.animation = 'rotateDonut 5s linear infinite';
}

function bonusTimer() {
    return Math.random() * (30000 - 15000) + 15000;
}
function bonusTimer2() {
    return Math.random() * (60000 - 30000) + 30000;
}

function bonusDonut() {
    setInterval(function () {
        const randomIndex = Math.floor(Math.random() * 3);
        const imageSources = ["Donut1.png", "Donut2.png", "Donut3.png"];
        const imageSource = imageSources[randomIndex];
        createFloatingDonut(imageSource, 100);
    }, bonusTimer());

    setInterval(function () {
        createFloatingDonut("GoldenDonut.png", 1000);
    }, bonusTimer2());
}

// Start generating images when the page is loaded
window.onload = bonusDonut;

// Sound
function sound2() {
    let sound = new Audio("Twinkle.mp3");
    sound.play();
}
