var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["yellow", "skyblue", "pink", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);
