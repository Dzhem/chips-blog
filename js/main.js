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