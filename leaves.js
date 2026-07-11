// Falling Gold Flakes

const leafContainer = document.createElement("div");
leafContainer.className = "leaf-container";
document.body.appendChild(leafContainer);

function createLeaf() {

    const leaf = document.createElement("div");
    leaf.className = "leaf";

    // Random horizontal position
    leaf.style.left = Math.random() * 100 + "vw";

    // Random falling speed (6–12 seconds)
    leaf.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    // Random opacity
    leaf.style.opacity =
        0.4 + Math.random() * 0.6;

    // Random size
    const scale = 0.4 + Math.random() * 3;
    leaf.style.transform = `scale(${scale})`;

    // Slight random delay so they don't all move together
    leaf.style.animationDelay =
        Math.random() * 2 + "s";

    leafContainer.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 12000);
}

// Create a new gold flake every 500ms
setInterval(createLeaf, 500);