
// 🌟 Navbar.js - Versión PRO optimizada

document.addEventListener("moduleLoaded:navbar", () => {

  const toggleBtn = document.getElementById("theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-link");

  // =========================
  // 🌗 THEME SYSTEM (AUTO + MANUAL)
  // =========================

  function getAutoTheme() {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 18) ? "light" : "dark";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (toggleBtn) toggleBtn.textContent = "🌙";
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme(getAutoTheme());
    }
  }

  toggleBtn?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      applyTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      applyTheme("dark");
    }
  });

  // =========================
  // 📱 MOBILE MENU
  // =========================

  menuToggle?.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });

  // Cerrar menú al hacer click en link
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navLinksContainer.classList.remove("active");
    }
  });

  // =========================
  // 🔥 SCROLL SPY (ACTIVE LINKS)
  // =========================

  function initScrollSpy() {
    const sections = document.querySelectorAll("main section[id]");

    function onScroll() {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", onScroll);

    // Ejecutar una vez al inicio
    onScroll();
  }

  // =========================
  // 🚀 INIT
  // =========================

  initTheme();
  initScrollSpy();

});