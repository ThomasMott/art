function openModal(n) {
	var x = document.getElementById(`p${n}-js`);
	var y= document.getElementById(`p${n}-img-js`);
	var z = sessionStorage.getItem(n);

	for ( i = 2; i <= 6; i++ ) {
		document.getElementById(`p${i}-js`).removeAttribute('style');
		document.getElementById(`p${i}-img-js`).removeAttribute('style');
		sessionStorage.clear();
	}

	if (z == "false" || z === null) {
		x.style.display = "flex";
		y.style.opacity = 1;
		y.style.filter = "none";
		sessionStorage.setItem(n, true);
	}
}
