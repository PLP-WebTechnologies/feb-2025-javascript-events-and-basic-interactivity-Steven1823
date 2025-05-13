// Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
  const btn = document.getElementById("clickBtn");
  btn.textContent = "Clicked!";
  btn.style.backgroundColor = "green";
});

// Hover Effects
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightblue";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "white";
});

// Keypress Detection
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Secret Double-Click
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("Secret double-click activated!");
});

// Toggle Tab Content
function toggleTab() {
  const content = document.getElementById("tabContent");
  content.style.display = content.style.display === "none" ? "block" : "none";
}

// Slideshow
const images = [
  "https://via.placeholder.com/200?text=Image+1",
  "https://via.placeholder.com/200?text=Image+2",
  "https://via.placeholder.com/200?text=Image+3"
];
let current = 0;
function nextImage() {
  current = (current + 1) % images.length;
  document.getElementById("galleryImage").src = images[current];
}

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("formMsg");

  if (!email.includes("@")) {
    msg.textContent = "Invalid email format!";
    return;
  }

  if (password.length < 8) {
    msg.textContent = "Password must be at least 8 characters!";
    return;
  }

  msg.textContent = "Form submitted successfully!";
});

// Real-Time Password Feedback
document.getElementById("password").addEventListener("input", (e) => {
  const msg = document.getElementById("formMsg");
  msg.textContent = e.target.value.length < 8 ? "Weak password" : "Good password";
});
