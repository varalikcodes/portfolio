document.addEventListener("DOMContentLoaded", function () {
  const text = "Varalika Varanasi";
  const typedText = document.getElementById("typed-text");
  let i = 0;

  function typeLetter() {
    if (i < text.length) {
      typedText.textContent += text.charAt(i);
      i++;
      setTimeout(typeLetter, 100); // speed
    }
  }

  typeLetter();
});
