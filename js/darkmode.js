window.onload = myFunction;

//runs on load
function myFunction() {
	setThemeOnLoad();
	document.getElementById("a-button-theme").addEventListener("click", toggleTheme);
};

//toggle theme
function toggleTheme() {
	if (window.localStorage.getItem('theme') === "dark") {
		themeLight();
	} else {
		themeDark();
	};
};

//set theme on load
function setThemeOnLoad() {
	if (window.localStorage.getItem('theme') === "dark") {
		themeDark();
	}
};

//light theme
function themeLight() {
	document.querySelector('link[href="../css/dark.css"]').href = "../css/all.css";
	localStorage.setItem('theme','light');
};

//light theme
function themeDark() {
	document.querySelector('link[href="../css/all.css"]').href = "../css/dark.css";
	localStorage.setItem('theme','dark');
};
