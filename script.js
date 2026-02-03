let yesScale = 1;
let noScale = 1;
let escapeCount = 0;
let noClicks = 0;

const messages = [
    "T’es vraiment sûre ? 😏",
    "Réfléchis encore un peu… 😌",
    "Annaaaa 😭",
    "Mon cœur souffre là 💔",
    "Bon… tu forces 😤"
];

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageDiv = document.getElementById("message");
const imageBox = document.getElementById("imageBox");
const finalMessage = document.getElementById("finalMessage");

/* Bouton NON qui fuit (3 fois max) */
noBtn.addEventListener("mouseenter", () => {
    if (escapeCount < 3) {
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;
        escapeCount++;
    }
});

/* Clic sur NON */
noBtn.addEventListener("click", () => {
    noClicks++;

    yesScale += 0.18;
    noScale -= 0.15;
    if (noScale < 0.4) noScale = 0.4;

    yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;

    messageDiv.textContent = messages[Math.min(noClicks - 1, messages.length - 1)];
    imageBox.style.display = "block";

    if (noClicks === 1) {
        imageBox.innerHTML = `<img src="redbull.webp">`;
    } 
    else if (noClicks === 2) {
        imageBox.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOuLLWwC_ioS5zi2ZYs2gPbEinOu3tzCu6Q&s">`;
    } 
    else if (noClicks === 3) {
        imageBox.innerHTML = `<img src="https://mairiedemontdelansles2alpes.fr/wp-content/uploads/sites/312/2019/04/9-1.jpg">`;
    } 
    else if (noClicks === 4) {
        imageBox.innerHTML = `<img src="https://bourgogne-infos.com/medias/92660/dijon-inauguration-du-jardin-du-port-du-canal-de-bourgogne-222381.jpg">`;
    } 
    else if (noClicks === 5) {
        imageBox.innerHTML = `<img src="https://media.tenor.com/LGXVwQg0cb0AAAAM/%EB%AA%A8%EC%B0%8C%EB%83%A5.gif">`;
    } 
    else if (noClicks === 6) {
        imageBox.innerHTML = `<img src="https://media.tenor.com/5zwROJPEmi8AAAAM/goma-happy.gif">`;
    } 
    else if (noClicks === 7) {
        imageBox.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZzv0QI0lm0NO5M0yw7vUWRRTJTZus4sPDw&s">`;
    } 
    else if (noClicks >= 8) {
        imageBox.innerHTML = `<img src="https://media.tenor.com/qCrUcEMGsZcAAAAM/peach-goma-goma-peach.gif">`;
    }
});

/* Clic sur OUI */
yesBtn.addEventListener("click", () => {
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    messageDiv.style.display = "none";

    imageBox.style.display = "block";
    imageBox.innerHTML = `
        <img src="https://media.tenor.com/IZlrX-EVOvwAAAAM/r%26m.gif" alt="love">
    `;

    finalMessage.style.display = "block";
    finalMessage.innerHTML = "Je savais que tu dirais OUI 💖";

    explodeHearts();
});

/* Explosion de cœurs */
function explodeHearts() {
    for (let i = 0; i < 45; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = (16 + Math.random() * 22) + "px";
        heart.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
        heart.style.setProperty("--y", (Math.random() * -400) + "px");
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1200);
    }
}
