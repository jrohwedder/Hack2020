/* globals */
var hiddenTabHt = "46";
var shownTabHt = "900";
var hiddenBoardHt = "0"
var shownBoardHt = "860";

/**@author Elise */
function showWidget() {
  /*alert(document.getElementById("footer").clientHeight);*/
  if (document.getElementById("footer").clientHeight == hiddenTabHt) {
    document.getElementById("footer").style.height = shownTabHt+"px";
  } else {
    document.getElementById("footer").style.height = hiddenTabHt+"px";
  }
}

/** @author Elise */
function showWhiteboard() {
  /*alert(document.getElementById("whiteboard").clientHeight);*/
  if (document.getElementById("whiteboard").clientHeight == hiddenBoardHt) {
    document.getElementById("whiteboard").style.height = shownBoardHt+"px";
  } else {
    document.getElementById("whiteboard").style.height = hiddenBoardHt+"px";
  }
}
/** @author Ross */
/*Creates new sticky on screen*/
function createSticky(){
    var sticky1 = document.createElement("p");
    sticky1.setAttribute("class","sticky_note");
    sticky1.innerHTML="<div id='one' class='note' ondrop='drop(event)' ondragover='allowDrop(event)'><p class='title'>Monday</p><p class='content'><ul><li>Task One</li>		<li>Task Two</li></ul></p></div><div id='two' class='note' draggable='true'ondragstart='drag(event)'><p class='title'>Tuesday</p><p class='content'>	<ul><li>Task One</li><li>Task Two</li></ul></p></div></div>";
    document.body.appendChild(sticky1);
}
/** @author J-Man */
function allowDrop(ev) {
	ev.preventDefault();
}

/** @author J-Man */
function drag(ev) {
	ev.dataTransfer.setData("Text", ev.target.id);
}

/** @author J-Man */
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}
