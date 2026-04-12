document.querySelectorAll(".contact-buttons a").forEach(button => {
  button.addEventListener("click", () => {
    console.log("Usuario hizo click en contacto");
  });
});