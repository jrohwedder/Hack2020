/*Creates new sticky on screen*/
function createSticky(){
    var sticky1 = document.createElement("p");
    sticky1.setAttribute("class","sticky_note");
    sticky1.innerHTML="I'm a sticky.<br>Look at me.";
    document.body.appendChild(sticky1);
}