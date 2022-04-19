const colors = ["teal", "cornflowerblue", "purple", "peru"];
const title = document.querySelector("h2");

const superEventHandler = {
	handleOn: function () {
		title.style.color = colors[0];
		title.innerHTML = "The mouse is here!";
	},
	handleLeave: function () {
		title.style.color = colors[1];
		title.innerHTML = "The mouse is gone!";
	},
	handleResize: function () {
		title.style.color = colors[2];
		title.innerHTML = "You just resized!";
	},
	handleMenu: function () {
		title.style.color = colors[3];
		title.innerHTML = "That was a right click!";
	},
};
title.addEventListener("mouseenter", superEventHandler.handleOn);
title.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
title.addEventListener("contextmenu", superEventHandler.handleMenu);
