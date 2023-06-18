window.onload = init;

function init() {
	createMagic();
	for (let j of document.querySelectorAll('.background-inner')) {j.addEventListener("mouseover", colorMagic)};
}

function createMagic() {

	for (i = 8; i < 92; i += 2) {

		for(j = 12; j <= 88; j += 4) {

			if(( j >= 76 || j <= 24) || ( i >= 68 || i <= 28)) {
				const div = document.createElement("div");
				div.classList.add("background-inner");
				const innerDiv = document.createElement("div");

				div.appendChild(innerDiv);
				innerDiv.classList.add("background-magic");
				innerDiv.classList.add("circle-s");

				div.style.left = `${i}%`;
				div.style.top = `${j}%`;

				document.getElementById("background").appendChild(div);
			}

		}
	}
}

function colorMagic() {
	var magic = this.childNodes[0];
	var color = '#'+Math.floor(Math.random()*16777215).toString(16);
	// var color = '#fccd6b';

	magic.style.backgroundColor = color;
};
