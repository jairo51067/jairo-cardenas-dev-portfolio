/* This JavaScript code is adding an event listener to the `load` event of the `window` object. When
the window has finished loading (i.e., when all resources have been loaded), the code inside the
arrow function will be executed. */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  loader.style.pointerEvents = "none";
  setTimeout(() => loader.style.display = "none", 500);
});