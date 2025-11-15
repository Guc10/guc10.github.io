// File: `static/js/easing.js`
document.addEventListener("DOMContentLoaded", () => {
    const nick_name = document.getElementById("nick_name");
    const burning_ship = document.getElementById("burning_ship");
    const content = document.getElementById("content");

    if (!nick_name || !burning_ship || !content) return;

    // easing function (easeOutCubic)
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    // map global progress (0..1) into an element's local progress using start/duration
    const mapProgress = (global, start, duration) =>
        Math.max(0, Math.min(1, (global - start) / Math.max(0.0001, duration)));

    // Per-element timing: make nick slower (longer duration),
    // make burning_ship and content faster (shorter duration + earlier start)
    const timings = {
        nick: { start: 0.0, duration: 0.9 },          // hides slower (finishes later)
        burning: { start: 0.05, duration: 0.35 },     // enters faster, slightly earlier
        content: { start: 0.0, duration: 0.3 },       // enters fastest and from the start
    };

    let needsUpdate = true;
    let sideOff = 0;
    let nickOff = 0;
    let totalScrollable = 1;

    // set will-change for better GPU performance
    [nick_name, burning_ship, content].forEach((el) => {
        el.style.willChange = "transform, opacity";
        el.style.transform = "translate3d(0,0,0)";
    });

    function recalcSizes() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        // distance to move nick_name up so it leaves the viewport
        nickOff = vh * 1.2 + nick_name.offsetHeight;
        // horizontal distance from off-screen to final position
        sideOff = vw + Math.max(burning_ship.offsetWidth, content.offsetWidth);
        totalScrollable = Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight
        );
        needsUpdate = true;
    }

    function update() {
        if (!needsUpdate) return;
        needsUpdate = false;

        const scrollY = window.scrollY || window.pageYOffset;
        let progress = scrollY / totalScrollable;
        progress = Math.max(0, Math.min(1, progress));

        // compute local eased progress per element
        const nickLocal = easeOut(mapProgress(progress, timings.nick.start, timings.nick.duration));
        const burningLocal = easeOut(mapProgress(progress, timings.burning.start, timings.burning.duration));
        const contentLocal = easeOut(mapProgress(progress, timings.content.start, timings.content.duration));

        // nick_name: move up and fade out (slower)
        const nickY = -nickLocal * nickOff;
        nick_name.style.transform = `translate3d(0, ${nickY}px, 0)`;
        nick_name.style.opacity = `${1 - nickLocal}`;

        // burning_ship: enter from right -> to 0 (faster)
        const burnX = (1 - burningLocal) * sideOff;
        burning_ship.style.transform = `translate3d(${burnX}px, 0, 0)`;
        burning_ship.style.opacity = `${burningLocal}`;

        // content: enter from left -> to 0 (fastest)
        const contentX = -(1 - contentLocal) * sideOff;
        content.style.transform = `translate3d(${contentX}px, 0, 0)`;
        content.style.opacity = `${contentLocal}`;
    }

    // requestAnimationFrame loop to batch updates
    function rafLoop() {
        update();
        requestAnimationFrame(rafLoop);
    }

    // mark update needed on scroll/resize/content changes
    window.addEventListener(
        "scroll",
        () => {
            needsUpdate = true;
        },
        { passive: true }
    );

    window.addEventListener("resize", () => {
        recalcSizes();
    });

    // initial measurements and start loop
    recalcSizes();
    requestAnimationFrame(rafLoop);
});
