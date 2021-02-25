const menuBtn = document.querySelector('.menu-button');
if (menuBtn !== null) {
    const menuNav = document.querySelector('nav');
    menuBtn.addEventListener('click', () => {
        if (menuBtn.classList.contains('active')) {
            menuBtn.classList.remove('active');
            menuNav.classList.remove('nav-open');
        } else {
            menuBtn.classList.add('active');
            menuNav.classList.add('nav-open');
        }
    })
}

const likeBtn = document.querySelector('.like-btn');
if (likeBtn !== null) {
    likeBtn.addEventListener('click', () => {
        if (likeBtn.classList.contains('icon-heart-empty')) {
            likeBtn.classList.remove('icon-heart-empty');
            likeBtn.classList.add('icon-heart');
        } else if (likeBtn.classList.contains('icon-heart')) {
            likeBtn.classList.remove('icon-heart');
            likeBtn.classList.add('icon-heart-empty');
        }
    })
}

const dropdown = document.querySelectorAll('.dropdown');

function openDropdownMenu(event) {
    const ddMenu = event.target.querySelector('.dropdown-menu');
    ddMenu.classList.add('open');
}

function closeDropdownMenu(event) {
    const ddMenu = event.target.querySelector('.dropdown-menu');
    ddMenu.classList.remove('open');
}

dropdown.forEach(item => {
    item.addEventListener('mouseenter', openDropdownMenu);
    item.addEventListener('mouseleave', closeDropdownMenu);
})