document.addEventListener('DOMContentLoaded', function() {
    const icon1 = document.getElementById('menu');
    const icon2 = document.getElementById('home');
    const icon3 = document.getElementById('token');
    const icon4 = document.getElementById('at');
    const icon5 = document.getElementById('frame');

    const lightModeImg = document.getElementById('lightMode');
    const darkModeImg = document.getElementById('darkMode');
    const body = document.body;

    function toggleMode() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            lightModeImg.style.display = 'block';
            darkModeImg.style.display = 'none';
            icon1.setAttribute('src', 'Website/Images/Icons/Dark/menu.png');
            icon2.setAttribute('src', 'Website/Images/Icons/Dark/home.png');
            icon3.setAttribute('src', 'Website/Images/Icons/Dark/token.png');
            icon4.setAttribute('src', 'Website/Images/Icons/Dark/at.png');
            icon5.setAttribute('src', 'Website/Images/Icons/Dark/frame.png');
        } else {
            body.classList.add('light-mode');
            lightModeImg.style.display = 'none';
            darkModeImg.style.display = 'block';
            icon1.setAttribute('src', 'Website/Images/Icons/Light/menu.png');
            icon2.setAttribute('src', 'Website/Images/Icons/Light/home.png');
            icon3.setAttribute('src', 'Website/Images/Icons/Light/token.png');
            icon4.setAttribute('src', 'Website/Images/Icons/Light/at.png');
            icon5.setAttribute('src', 'Website/Images/Icons/Light/frame.png');
        }
    }

    darkModeImg.addEventListener('click', toggleMode);
    lightModeImg.addEventListener('click', toggleMode);
});