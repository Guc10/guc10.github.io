document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".btn");
    const descs = document.querySelectorAll(".subtitle");

    function toggleDesc(index, state) {
        const el = descs[index];
        if (!el) return;

        if (state) {
            el.style.marginTop = "0px";
            el.style.opacity = "1";
        } else {
            el.style.marginTop = "-40px";
            el.style.opacity = "0";
        }
    }

    btns.forEach((btn, index) => {
        btn.addEventListener("mouseover", () => toggleDesc(index, true));
        btn.addEventListener("mouseout", () => toggleDesc(index, false));
        btn.addEventListener("click", () => toggleDesc(index, true));
    });
});
