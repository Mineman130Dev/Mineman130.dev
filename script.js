window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 15) { // Change 100 to the scroll point you want
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var navButtons = document.getElementById('nav-buttons');
    navButtons.classList.toggle('show');
});