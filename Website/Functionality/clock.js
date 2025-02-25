document.addEventListener('DOMContentLoaded', function() {
    const clockElement = document.getElementById('clock');
    setInterval(() => {
        const now = new Date();
        let miliseconds = now.getMilliseconds();
        if (miliseconds < 10) {
            miliseconds = '00' + miliseconds;
        } else if (miliseconds < 100) {
            miliseconds = '0' + miliseconds;
        }
        clockElement.textContent = now.toLocaleTimeString() + ':' + miliseconds;
    }, 1);
});