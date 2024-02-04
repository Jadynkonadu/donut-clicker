// Nav Bar
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Cookie Button
document.getElementById("donut").addEventListener("click", function incrementButton() {
    let value = document.getElementById("increment").innerHTML;
    ++value;
    console.log(value);
    document.getElementById("increment").innerHTML = value;
}); 

// Auto-Clicker Disabler/Enabler
function autoClickerState() {
    const donutCount = parseInt(document.getElementById("increment").textContent);
    const cost = parseInt(document.getElementById("cost").textContent);

    if (donutCount >= cost) {
        document.getElementById("auto").disabled = false;
                document.querySelector("#auto").style.backgroundColor = "sandybrown";
                document.querySelector("#auto").style.boxShadow = "0 9px #7d38008d"; // Enable the button
    } else {
        document.getElementById("auto").disabled = true;
                document.querySelector("#auto").style.backgroundColor = "grey";
        document.querySelector("#auto").style.boxShadow = "0 9px darkgrey"; // Disable the button
    }
}

autoClickerState();

document.getElementById("increment").addEventListener("DOMSubtreeModified", autoClickerState);

// Auto-Clicker Button
document.getElementById("auto").addEventListener("click", function autoIncrement () {
    let number = document.getElementById("increment2").innerHTML;
    let clicker = document.getElementById("increment");
    number++;

    let cost = document.getElementById("cost").innerText;

    let x = cost * (.1);
    let y = +cost ;
    let z = Math.round(x + (y));

    let autoInterval = setInterval(function autoIncrement(){clicker.innerHTML ++}, 1000);

    console.log(number);
    console.log(cost);
    document.getElementById("increment2").innerHTML = number;
    document.getElementById("cost").innerText = z;

    let value = document.getElementById("increment").innerHTML;
    value = document.getElementById("increment").innerHTML - +cost;

    document.getElementById("increment").innerText = value;
    console.log(value);

    if (clicker.innerHTML <=0){
    clicker.innerHTML = 0;
    }

    autoClickerState();
    
// Reset Button//
document.getElementById("start-over").addEventListener("click",
    function resetGame() {
        clearInterval(autoInterval);
    });
});

document.getElementById("start-over").addEventListener("click",
function resetGame() {
    let value1 = document.getElementById("cost").innerText;
    let value2 = document.getElementById("increment2").innerText;
    let value3 = document.getElementById("increment").innerText;

    value1 = 100;
    value2 = 0;
    value3 = 0;

    document.getElementById("cost").innerText = value1;
    document.getElementById("increment2").innerText = value2;
    document.getElementById("increment").innerText = value3;

    clearInterval(autoInterval);
});