function showselection() {
  var str,
element = document.getElementById('q');
if (element != null) {
    str = element.value;
    console.log("good");
}
else {
    str = null;
    console.log("bad");
}
  console.log("hi");
  document.getElementById("q").style.display = "block";
}