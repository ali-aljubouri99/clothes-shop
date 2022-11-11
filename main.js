let minu = document.getElementById("minu")
let nav = document.getElementsByTagName("nav")[0];
let exit = document.getElementById("exit");

minu.onclick = function() {
    nav.style.cssText = "display: block";
}

exit.onclick = function() {
    nav.style.cssText = "display: hidden";
}