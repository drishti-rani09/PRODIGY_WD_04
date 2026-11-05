const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
navLinks.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click",function(){
        navLinks.classList.remove("active");
    });
});