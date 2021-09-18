window.onbeforeunload = function () {
   window.scrollTo(0, 0);
}

let menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", function() {
   document.querySelector("nav").classList.toggle("expanded");
})