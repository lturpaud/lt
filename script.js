function opaquenavbar(){
	var winpos = document.getElementById("titbann").clientHeight;
	if (.75 * winpos < window.pageYOffset) {
		document.getElementById("navvbar").classList.add("navbarscroll");
	}
	else if (.75 * winpos >= window.pageYOffset) {
		document.getElementById("navvbar").classList.remove("navbarscroll");
	}
}

window.onscroll = function(){opaquenavbar()};
