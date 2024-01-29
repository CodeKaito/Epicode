const hambMenu = document.getElementById('hamb-menu');

let status = false; // Terrá traccia dello stato del menu (false = chiuso)

hambMenu.addEventListener('click', (e) => {
    if (!status) {
        e.target.classList.remove('open', 'closing');
        e.target.offsetWidth;
        e.target.classList.add('open');
        status = true;
    } else {
        e.target.classList.remove('open', 'closing');
        e.target.offsetWidth;
        e.target.classList.add('closing', 'open');
        status = false;
    }
});