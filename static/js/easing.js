document.addEventListener("DOMContentLoaded", () => {
    const nick_name = document.getElementById("nick_name");
    const burning_ship = document.getElementById("burning_ship");
    const content = document.getElementById("content");

    let scrollProgress = 0;

    const isBetween = (x, min, max) => x >= min && x <= max;

    const ranges = {
        nick: { start: 0, end: 0.35, progress: 0 },
        burning: { start: 0.45, end: 0.75, progress: 0 },
        cont: { start: 0.15, end: 0.55, progress: 0 },
    };

    function getScrollProgress() {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        return maxScroll === 0 ? 1 : window.scrollY / maxScroll;
    }

    function updateProgress() {
        for (let key in ranges) {
            const range = ranges[key];
            if (isBetween(scrollProgress, range.start, range.end)) {
                range.progress = (scrollProgress - range.start) / (range.end - range.start);
            } else if (scrollProgress < range.start) {
                range.progress = 0;
            } else {
                range.progress = 1;
            }
        }
    }

    function animateOutToTop(elem, progress) {
        const translateY = -200 * progress;
        elem.style.transform = `translateY(${translateY}px)`;
        elem.style.opacity = 1 - progress;
    }

    function animateInFromLeft(elem, progress) {
        const translateX = -100 * (1 - progress);
        elem.style.transform = `translateX(${translateX}px)`;
        elem.style.opacity = progress;
    }

    function animateInFromRight(elem, progress) {
        const translateX = 100 * (1 - progress);
        elem.style.transform = `translateX(${translateX}px)`;
        elem.style.opacity = progress;
    }

    function updatePage() {
        animateOutToTop(nick_name, ranges.nick.progress);
        animateInFromLeft(content, ranges.cont.progress);
        animateInFromRight(burning_ship, ranges.burning.progress);
    }

    function initPage() {
        scrollProgress = getScrollProgress();
        updateProgress();
        updatePage();
    }

    [nick_name, burning_ship, content].forEach(elem => {
        elem.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
    });

    initPage();

    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                scrollProgress = getScrollProgress();
                updateProgress();
                updatePage();
                ticking = false;
            });
            ticking = true;
        }
    });
});