// Falling Emerald Leaves

const leafContainer = document.createElement("div");
leafContainer.className = "leaf-container";
document.body.appendChild(leafContainer);

function createLeaf(){

    const leaf = document.createElement("div");

    leaf.className = "leaf";

    leaf.style.left = Math.random()*100+"vw";

    leaf.style.animationDuration =
        (6+Math.random()*6)+"s";

    leaf.style.opacity =
        0.4+Math.random()*0.6;

    leaf.style.transform =
        `scale(${0.5+Math.random()})`;

    leaf.innerHTML="🍃";

    leafContainer.appendChild(leaf);

    setTimeout(()=>{
        leaf.remove();
    },12000);

}

setInterval(createLeaf,700);