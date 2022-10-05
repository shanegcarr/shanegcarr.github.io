let menuOpen = "closed";
sessionStorage.setItem("menuOpen", "closed");
const menuToggle = document.querySelector(".menu-button");
const navBar = document.querySelector("#navbar");
//const windowFull = document.getElementById("tester");

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

 //windowFull.addEventListener("click", function() {
//    console.log("big chungus");
// });

document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('navbar');
    
    if (!box.contains(event.target) && !menuToggle.contains(event.target)) {
      //box.style.display = 'none';
      closeMenu();
    }
  });