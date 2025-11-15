document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector("header h1");
    if (!el) return;

    el.style.transition = "0.4s";
    el.addEventListener("mouseover", () => {
        el.style.transform = "scale(1.08)";
    });
    el.addEventListener("mouseout", () => {
        el.style.transform = "scale(1)";
    });
});
