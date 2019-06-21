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

function scrollm(){
	document.getElementById("m").scrollIntoView();
	window.scrollBy(0, -50);
}

function scrolln(){
	document.getElementById("n").scrollIntoView();
	window.scrollBy(0, -50);
}

function scrollo(){
	document.getElementById("o").scrollIntoView();
	window.scrollBy(0, -50);
}

function scrollp(){
	document.getElementById("p").scrollIntoView();
	window.scrollBy(0, -50);
}

function scrollpoetbook(){
	document.getElementById("poetbook").scrollIntoView();
	window.scrollBy(0, -50);
}
