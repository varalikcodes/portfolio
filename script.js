// ===== SINGLE DOMCONTENTLOADED EVENT LISTENER =====
document.addEventListener("DOMContentLoaded", function () {
  
  // ===== TYPING ANIMATION (ONLY ONCE!) =====
  const text = "Varalika Varanasi";
  const typedText = document.getElementById("typed-text");
  
  if (typedText) {
    typedText.textContent = ""; // Clear any existing content
    let i = 0;
    
    function typeLetter() {
      if (i < text.length) {
        typedText.textContent += text.charAt(i);
        i++;
        setTimeout(typeLetter, 100);
      }
    }
    typeLetter();
  }

  // ===== THEME TOGGLE (ONLY ONCE!) =====
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  
  if (themeToggle) {
    root.setAttribute('data-theme', 'light');
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
    });
  }

  // ===== ENHANCED PROJECTS FILTERING =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

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

  // ===== ENHANCED PROJECT INTERACTIONS =====
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      if (!project.classList.contains('hidden')) {
        project.style.transform = 'translateY(-5px) scale(1.02)';
      }
    });
    
    project.addEventListener('mouseleave', () => {
      if (!project.classList.contains('hidden')) {
        project.style.transform = 'translateY(0) scale(1)';
      }
    });
  });

  // ===== FIXED CREDENTIAL BUTTON =====
  const fixedButton = document.querySelector('.fixed-credential-button');
  if (fixedButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        fixedButton.style.opacity = '1';
        fixedButton.style.pointerEvents = 'auto';
      } else {
        fixedButton.style.opacity = '0';
        fixedButton.style.pointerEvents = 'none';
      }
    });
  }
});
