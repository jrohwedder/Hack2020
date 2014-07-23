/*Creates new sticky on screen*/
function createSticky(){
    var sticky1 = document.createElement('p');
    sticky1.innerHTML="I'm a sticky.<br>Look at me.";
    document.getElement("body").appendChild(sticky1);
}