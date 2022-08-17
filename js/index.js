const burgerMenu = document.querySelector('.header__burger-menu');
const menuList = document.querySelector('.site-menu__list');
const bodyElement = document.querySelector('body');
burgerMenu.addEventListener('click', (e) => {
	burgerMenu.classList.toggle('active');
	menuList.classList.toggle('active');
	bodyElement.classList.toggle('active');
});

const headerElement = document.querySelector('header.header');
window.addEventListener('scroll', (e) => {
	if (scrollY > 0) headerElement.classList.add('scrolled');
	else headerElement.classList.remove('scrolled');
});

const pageTabs = document.querySelectorAll('details[class*="tab"] summary');
pageTabs.forEach(tab => tab.addEventListener('click', tabToggle));

function tabToggle(e) {
	if (e.currentTarget.parentElement.hasAttribute('open')) {
		e.preventDefault();
		return;
	}
	const tabsParent = e.currentTarget.parentElement.parentElement;
	const currentTab = e.currentTarget.parentElement;
	for (detail of tabsParent.children) {
		if (detail === currentTab) continue;
		else detail.removeAttribute('open');
	}
}

const dialogButtons = document.querySelectorAll('[class*="dialog-button"]');
dialogButtons.forEach(dialogButton => {
	dialogButton.addEventListener('click', (e) => {
		e.preventDefault();
	});
});