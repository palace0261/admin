
  // Fade-up 효과 추가
    document.addEventListener("DOMContentLoaded", function() {
      const sections = document.querySelectorAll(".body_man section");
      sections.forEach(section => section.classList.add("fade-up-section"));

      function onScroll() {
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight - 300) {
            section.classList.add("visible");
          }
        });
      }
      window.addEventListener("scroll", onScroll);
      onScroll();
    });

