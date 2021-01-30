const menuBtn = document.querySelector('.menu-button');
const menuNav = document.querySelector('.navigation');
menuBtn.addEventListener('click', () => {
	if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active');
        menuNav.classList.remove('nav-open');
	} else {
        menuBtn.classList.add('active');
        menuNav.classList.add('nav-open');
	}
})