/* globals */
var hiddenTabHt = "46";
var shownTabHt = "900";
var hiddenBoardHt = "0"
var shownBoardHt = "860";

function showWidget() {
  /*alert(document.getElementById("footer").clientHeight);*/
  if (document.getElementById("footer").clientHeight == hiddenTabHt) {
    document.getElementById("footer").style.height = shownTabHt+"px";
  } else {
    document.getElementById("footer").style.height = hiddenTabHt+"px";
  }
}

function showWhiteboard() {
  /*alert(document.getElementById("whiteboard").clientHeight);*/
  if (document.getElementById("whiteboard").clientHeight == hiddenBoardHt) {
    document.getElementById("whiteboard").style.height = shownBoardHt+"px";
  } else {
    document.getElementById("whiteboard").style.height = hiddenBoardHt+"px";
  }
}