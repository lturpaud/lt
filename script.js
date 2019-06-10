
var mousestick = 0;

//show on mouseover
function showselection() {
  document.getElementById("sel").classList.remove("selectionopen");
  console.log("hi");
  document.getElementById("sel").classList.add("selectionopen");
  document.getElementById("sel").style.display = "block";
  mousestick = 1;
  setTimeout(function() {
      console.log("yep")
      document.getElementById("sel").classList.remove("selectionopen");
  }, 2100);
  

}

var mousein = 0;

//show/hide on click
function showselection1() {
    var sel = document.getElementById("sel");
    if (mousein == 0) {
        sel.classList.add("selectionopen");
        sel.style.display = "block";
        mousein = 1;
        mousestick = 1;
        console.log(mousein);
        setTimeout(function() {
            document.getElementById("sel").classList.remove("selectionopen");
        }, 2100);
    }

    else {
        sel.classList.add("selectionclose");
        sel.style.display = "none";
        mousein = 0;
        mousestick = 0;
        setTimeout(function() {
            document.getElementById("sel").classList.remove("selectionclose");
        }, 2100);
        console.log(mousein);
    }
   
    
}

/*function hideselection1() {
    document.getElementById("sel").style.display = "none";
    mousein = 0;
    console.log(mousein);
}*/


//hide on mouseout of menu if not stuck
function hideselection() {
    var mouseposx = event.clientX;
    //var mouseposy = event.clientY;
    if (mousein == 0 && mouseposx > 100){
    console.log("bye");
    document.getElementById("sel").classList.add("selectionclose");
    document.getElementById("sel").style.display = "none";
    mousestick = 0;
    setTimeout(function() {
        document.getElementById("sel").classList.remove("selectionclose");
    }, 2100);
  }
}


//hide on mouseout of selection if not stuck
function hideselection2() {
    if (event.clientY > 78 && mousein == 0) {
        document.getElementById("sel").classList.add("selectionclose");
        document.getElementById("sel").style.display = "none";
        setTimeout(function() {
            document.getElementById("sel").classList.remove("selectionclose");
        }, 2100);
    }
}

//var navbar = document.getElementById("titbann").style.height;
//function navbarscroll() {
    
  //  if ()
//}

