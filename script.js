// Gift box popup logic
const giftbox = document.getElementById('giftbox');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close');
giftbox.onclick = () => {
  popup.style.display = 'flex';
  overlay.style.display = 'block';
};
closeBtn.onclick = () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
};
overlay.onclick = () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
};

// Character movement (optional)
const char = document.getElementById('character');
let left = 60, bottom = 85;
document.addEventListener('keydown', e => {
  if(e.key==='ArrowLeft') left -= 18;
  if(e.key==='ArrowRight') left += 18;
  if(e.key==='ArrowUp') bottom += 18;
  if(e.key==='ArrowDown') bottom -= 18;
  char.style.left = left+'px';
  char.style.bottom = bottom+'px';
});
char.onclick = () => alert("Happy Anniversary! You can move me using arrow keys!");
function createFloating(type = "heart") {
  const el = document.createElement("div");
  el.className = "floating";
  el.style.left = Math.random() * window.innerWidth + "px";
  if (type === "heart") {
    el.innerHTML = `<svg viewBox="0 0 32 29" width="30" height="29"><path fill="#fd2c5a" d="M23.6,2c-2.7,0-5.1,1.8-6.1,4.4C16.1,3.8,13.7,2,11,2C6.4,2,2.9,6,4.4,10.2c1.3,3.4,9.3,12.3,11.7,14.7 c0.6,0.6,1.5,0.6,2.1,0c2.3-2.4,10.3-11.3,11.7-14.7C29.1,6,25.6,2,23.6,2z"/></svg>`;
  } else {
    // Rose petal SVG (simple stylized version, replace with your own SVG if preferred)
    el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="8" ry="13" fill="pink"/><path d="M12 12 Q12 7 18 7" stroke="red" stroke-width="2" fill="none"/></svg>`;
  }
  document.getElementById('floating-container').appendChild(el);

  setTimeout(() => el.remove(), 7000); // Remove after animation
}

// Adjust amount and type: floating hearts and petals
setInterval(() => {
  createFloating("heart");
  if (Math.random() > 0.5) createFloating("petal");
}, 800);
