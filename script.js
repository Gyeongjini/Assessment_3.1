// Map each button to your local image path + caption.
// Adjust extensions if your files are .jpg instead of .jpeg.
const IMAGES = {
  bagel: {
    src: "images/IMG_bagel.jpeg",
    credit: "Photo: Bagel (Updated)",
    alt: "A bagel"
  },
  doll: {
    src: "images/IMG_doll.JPG", // you said this one is capital JPG
    credit: "Photo: Doll",
    alt: "A doll"
  },
  Icecream: {
    src: "images/IMG_Icecream.jpeg",
    credit: "Photo: Ice Cream",
    alt: "Ice cream"
  },
  kangaroo: {
    src: "images/IMG_kangaroo.jpeg",
    credit: "Photo: Kangaroo",
    alt: "A kangaroo"
  },
  sky: {
    src: "images/IMG_sky.jpeg",
    credit: "Photo: Sky",
    alt: "The sky"
  }
};

const imgEl = document.getElementById("displayImg");
const creditEl = document.getElementById("imgCredit");
const buttons = document.querySelectorAll(".imgBtn");
const toggleBtn = document.getElementById("toggleThemeBtn");
const root = document.documentElement;

function setImage(key) {
  const item = IMAGES[key];
  if (!item) return;
  imgEl.src = item.src;
  imgEl.alt = item.alt;
  creditEl.textContent = item.credit;
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-key");
    setImage(key);
  });
});

function toggleTheme() {
  const current = root.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  toggleBtn.setAttribute("aria-pressed", String(next === "dark"));
}

toggleBtn.addEventListener("click", toggleTheme);

// Show a default image on load 
setImage("bagel");