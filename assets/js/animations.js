document.addEventListener("DOMContentLoaded", () => {

  function initReveal() {
    const reveals = document.querySelectorAll(".reveal");

    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.15
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ⏳ Esperar a que TODOS los módulos carguen
  document.addEventListener("moduleLoaded:hero", initReveal);
  document.addEventListener("moduleLoaded:projects", initReveal);
  document.addEventListener("moduleLoaded:about", initReveal);
  document.addEventListener("moduleLoaded:contact", initReveal);

});