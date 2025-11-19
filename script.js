// Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

// Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

// Animate stats on scroll
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.prop-card, .step-card, .transform-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });

    document.addEventListener("DOMContentLoaded", () => {
  const ctaForm = document.getElementById("ctaForm");
  const detailsWrapper = document.getElementById("detailsFormWrapper");
  const detailsForm = document.getElementById("detailsForm");

  if (ctaForm && detailsWrapper) {
    ctaForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // (Optional) you could store the email somewhere here
      // const email = ctaForm.querySelector('input[name="email"]').value;

      // Show step 2
      detailsWrapper.classList.remove("hidden");
      detailsWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (detailsForm) {
    detailsForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // For now just show a demo message.
      // Later this could POST to your server / Google Forms.
      alert("🎉 Thanks! Your box reservation has been recorded (demo).");

      // Optional: reset forms
      // ctaForm.reset();
      // detailsForm.reset();
      // detailsWrapper.classList.add("hidden");
    });
  }
});
