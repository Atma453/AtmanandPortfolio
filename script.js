// Dark / Light toggle
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("mode");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("mode", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("mode", "light");
  }
});

// Theme Accent Colors
function setAccent(color) {
  let value = "#6d28d9";
  if (color === "blue") value = "#2563eb";
  if (color === "green") value = "#16a34a";
  if (color === "red") value = "#dc2626";

  document.documentElement.style.setProperty("--accent", value);
  localStorage.setItem("accent", value);
}

const savedAccent = localStorage.getItem("accent");
if (savedAccent) {
  document.documentElement.style.setProperty("--accent", savedAccent);
}

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
