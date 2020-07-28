let hamburgerIcon = document.querySelector('.hamburger_menu');
let closeHamburgerModal = document.querySelector('.close_modal');
let hamburgerModal = document.querySelector('.hamburger_modal');
let phoneModalIcon = document.querySelector('.phone_quicklinks');

hamburgerIcon.addEventListener('click', () => {
	// Position Modal Off-screen
	hamburgerModal.style.top = 0;
})

closeHamburgerModal.addEventListener('click', () => {
	hamburgerModal.style.top = '-100vh';
})

phoneModalIcon.addEventListener('click', () => {
	console.log('Did you call me?')
})