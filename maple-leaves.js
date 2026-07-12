const container = document.getElementById("leaves-container");

function createMapleLeaf() {
    const leaf = document.createElement("img");
    leaf.src = "images/maple-leaf.png";
    leaf.className = "maple-leaf";

    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.width = (18 + Math.random() * 15) + "px";
    leaf.style.animationDuration = (10 + Math.random() * 5) + "s";

    container.appendChild(leaf);

    setTimeout(() => leaf.remove(), 15000);
}

setInterval(createMapleLeaf, 700);