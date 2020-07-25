let hamburgerIcon = document.querySelector('.hamburger_menu');
let closeHamburgerModal = document.querySelector('.close_modal');
let hamburgerModal = document.querySelector('.hamburger_modal');

hamburgerIcon.addEventListener('click', () => {
	console.log('Click me again');
	// Position Modal Off-screen
	hamburgerModal.style.top = 0;
})

closeHamburgerModal.addEventListener('click', () => {
	hamburgerModal.style.top = '-100vh';
})