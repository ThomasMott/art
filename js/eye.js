var ball = document.getElementById("ball");
document.onmousemove = function(){
	var x = event.clientX * 100 / window.innerWidth + "%";
	var y = (event.clientY * 100 / window.innerHeight) + 56 + "%";

	ball.style.left = x;
	ball.style.top = y;
	ball.style.transform = "translate(-"+x+",-"+y+")";
}
