document.addEventListener("moduleLoaded:hero", () => {
  console.log("✅ Hero cargado");

  const modal = document.getElementById("cvModal");
  const overlay = document.getElementById("modalOverlay");

  if (!modal || !overlay) {
    console.error("❌ Modal no encontrado en el DOM");
    return;
  }

  function openModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const target = e.target;

    // ✅ Abrir modal
    if (target.closest(".js-cv-trigger")) {
      e.preventDefault();
      console.log("🟢 Abrir modal");
      openModal();
      return;
    }

    // ✅ Cerrar modal
    if (
      target.id === "closeModal" ||
      target.id === "modalOverlay"
    ) {
      console.log("🔴 Cerrar modal");
      closeModal();
      return;
    }
  });

  // ✅ Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});