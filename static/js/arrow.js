document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("arrow").addEventListener("click", () => {
        const step = 20;
        const interval = 10;

        const id = setInterval(() => {
            const max = document.body.scrollHeight;
            window.scrollBy(0, step);

            if (window.scrollY + window.innerHeight >= max) {
                clearInterval(id);
            }
        }, interval);
    });

})