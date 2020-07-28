let hamburgerIcon = document.querySelector('.hamburger_menu');
let closeHamburgerModal = document.querySelector('.hamburger_modal_close');
let hamburgerModal = document.querySelector('.hamburger_modal');
let phoneModalIcon = document.querySelector('.phone_quicklinks');
let phoneModal = document.querySelector('.phone_modal');
let closePhoneModal = document.querySelector('.phone_close_modal');

hamburgerIcon.addEventListener('click', () => {
	// Position Modal Off-screen
	hamburgerModal.style.top = 0;
})

closeHamburgerModal.addEventListener('click', () => {
	hamburgerModal.style.top = '-100vh';
})

phoneModalIcon.addEventListener('click', () => {
	phoneModal.style.right = 0;
})

closePhoneModal.addEventListener('click', () => {
	phoneModal.style.right = '-400px';
})