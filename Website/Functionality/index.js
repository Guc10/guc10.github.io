function startClock() {
    const clockElement = document.getElementById('clock');
    setInterval(() => {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString() + ':' + now.getMilliseconds();
    }, 1);
}

document.addEventListener('DOMContentLoaded', startClock);