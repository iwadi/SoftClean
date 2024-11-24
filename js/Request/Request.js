document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger__Request").addEventListener("click", function() {
    document.querySelector(".header__Request ").classList.toggle("open");
  });
})
  
  
  // Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    // Действие при клике
    document.querySelector(".header__Request").classList.remove("open");
  }
});