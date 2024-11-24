document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger__service").addEventListener("click", function() {
        document.querySelector(".header__service ").classList.toggle("open");
    });
})


  // Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.querySelector(".header__service").classList.remove("open");
    }
});