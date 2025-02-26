document.addEventListener('DOMContentLoaded', function() {
    //clock
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

    //sideMenu
    const menu = document.getElementById('menuButton');
    const menuItems = document.getElementById('menuContainer');

    function toggleMenu() {
        if (menuItems.style.display === 'none') {
            menuItems.style.display = 'flex';
        }else{
            menuItems.style.display = 'none';
        }
    }

    menu.addEventListener('click', toggleMenu);
    menu.addEventListener('click', toggleMenu);

    //themes
    const icon1 = document.getElementById('menuButton');
    const icon2 = document.getElementById('home');
    const icon3 = document.getElementById('token');
    const icon4 = document.getElementById('at');
    const icon5 = document.getElementById('frame');
    const icon6 = document.getElementById('github');

    const lightModeImg = document.getElementById('lightMode');
    const darkModeImg = document.getElementById('darkMode');
    const body = document.body;

    function toggleMode() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            lightModeImg.style.display = 'flex';
            darkModeImg.style.display = 'none';
            icon1.children[0].setAttribute('src', 'Website/Images/Icons/Dark/menu.png');
            icon2.setAttribute('src', 'Website/Images/Icons/Dark/home.png');
            icon3.setAttribute('src', 'Website/Images/Icons/Dark/token.png');
            icon4.setAttribute('src', 'Website/Images/Icons/Dark/at.png');
            icon5.setAttribute('src', 'Website/Images/Icons/Dark/frame.png');
            icon6.setAttribute('src', 'Website/Images/github-mark/github-mark-white.png');
        } else {
            body.classList.add('light-mode');
            lightModeImg.style.display = 'none';
            darkModeImg.style.display = 'flex';
            icon1.children[0].setAttribute('src', 'Website/Images/Icons/Light/menu.png');
            icon2.setAttribute('src', 'Website/Images/Icons/Light/home.png');
            icon3.setAttribute('src', 'Website/Images/Icons/Light/token.png');
            icon4.setAttribute('src', 'Website/Images/Icons/Light/at.png');
            icon5.setAttribute('src', 'Website/Images/Icons/Light/frame.png');
            icon6.setAttribute('src', 'Website/Images/github-mark/github-mark.png');
        }
    }

    darkModeImg.addEventListener('click', toggleMode);
    lightModeImg.addEventListener('click', toggleMode);
});