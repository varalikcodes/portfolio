document.addEventListener("DOMContentLoaded", function () {
  const text = "Varalika Varanasi";
  const typedText = document.getElementById("typed-text");
  let i = 0;

  function typeLetter() {
    if (i < text.length) {
      typedText.textContent += text.charAt(i);
      i++;
      setTimeout(typeLetter, 100);
    }
  }

  typeLetter();

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  // Set default to light
  root.setAttribute('data-theme', 'light');

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  });
});
