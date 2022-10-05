let menuOpen = "closed";
sessionStorage.setItem("menuOpen", "closed");
const menuToggle = document.querySelector(".menu-button");
const navBar = document.querySelector("#navbar");

const openMenu = () => {
    navBar.classList.add("navbar-open");
    menuToggle.classList.add("opener")
    sessionStorage.setItem("menuOpen", "open");
}

const closeMenu = () => {
    navBar.classList.remove("navbar-open")
    menuToggle.classList.remove("opener")
    sessionStorage.setItem("menuOpen", "closed");
}

menuToggle.addEventListener("click", function(){
    menuOpen = sessionStorage.getItem("menuOpen");
     if(menuOpen !== "open") {
     openMenu();
    } else {
     closeMenu();
    }
 });