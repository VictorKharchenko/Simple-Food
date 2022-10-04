// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Мій js==============================


/* //?Активує усі посилання
let menuLink = document.querySelectorAll(".menu__link");
menuLink.forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		link.classList.remove('link-active');
		e.target.classList.add('link-active');
	});
}); */

//?Активує посилання вибірково
let menuLink = [...document.getElementsByClassName("menu__link")];
for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].addEventListener("click", function (e) {
		e.preventDefault();
		menuLink.forEach(link => link.classList.remove("link-active"));
		e.target.classList.add("link-active");
	});
};



