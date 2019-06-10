function showselection() {

    console.log("hi");
    document.getElementById("sel").style.display = "block";
  
  }
  
  var mousein = 0;
  
  function showselection1() {
      var sel = document.getElementById("sel");
      if (mousein == 0) {
          sel.style.display = "block";
          mousein = 1;
          console.log(mousein);
      }
  
      else {
          sel.style.display = "none";
          mousein = 0;
          console.log(mousein);
      }
     
      
  }

function hideselection() {
    if (mousein == 0){
    console.log("bye");
    document.getElementById("sel").style.display = "none";
  
  }
}