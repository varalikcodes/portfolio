// ===== ENHANCED PROJECTS SECTION - ADD TO YOUR SCRIPT.JS =====

// Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

  // Only add filter functionality if filter buttons exist
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projects.forEach((project, index) => {
          if (filter === 'all' || project.dataset.category === filter) {
            project.classList.remove('hidden');
            // Stagger the re-animation
            project.style.animation = `projectLoad 0.6s ease forwards`;
            project.style.animationDelay = `${index * 0.1}s`;
          } else {
            project.classList.add('hidden');
          }
        });
      });
    });
  }

  // Enhanced project interactions
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      project.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    project.addEventListener('mouseleave', () => {
      project.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Your existing typing effect code...
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

  // Your existing theme toggle code...
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  root.setAttribute('data-theme', 'light');
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  });
});



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
