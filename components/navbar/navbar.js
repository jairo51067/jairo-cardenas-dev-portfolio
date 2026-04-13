// 🌟 Navbar ULTRA PRO - limpio y optimizado

document.addEventListener("moduleLoaded:navbar", () => {

  const toggleBtn = document.getElementById("theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.getElementById("nav-overlay");
  const navbar = document.querySelector(".navbar");

  // =========================
  // 🌗 TEMA (AUTO + MANUAL)
  // =========================
  function getAutoTheme() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark";
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
    applyTheme(savedTheme || getAutoTheme());
  }

  toggleBtn?.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";

    const newTheme = isDark ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });

  // =========================
  // 🔥 SCROLL EFFECT (CORRECTO)
  // =========================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // =========================
  // 📱 MENU MOBILE PRO
  // =========================
  function openMenu() {
    navLinks.classList.add("active");
    overlay.classList.add("active");
    menuToggle.classList.add("active");

    menuToggle.textContent = "✖";

    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.textContent = "☰";

    document.body.style.overflow = "";
  }

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.contains("active") ? closeMenu() : openMenu();
  });

  // cerrar al hacer click en link
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      closeMenu();
    }
  });

  // cerrar con overlay
  overlay?.addEventListener("click", closeMenu);

  // cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // =========================
  // 🚀 INIT
  // =========================
  initTheme();

});