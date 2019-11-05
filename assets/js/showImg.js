/** *************************************************
 *                SOLUTION N° 1
 ***************************************************** */
const $fullContainer = document.getElementById("myImg");

function showImageMode1() {
  var proprieteBalise = event.target;
  var path = proprieteBalise.getAttribute("src");
  $fullContainer.setAttribute("src", path);
}

/** *************************************************
 *                SOLUTION N° 2
 ***************************************************** */
function showImageMode2(myEvent) {
  var path = myEvent.getAttribute("src");
  $fullContainer.setAttribute("src", path);
}
