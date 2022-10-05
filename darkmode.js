let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-button");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    darkModeToggle.classList.remove("icon-sun-icon")
    darkModeToggle.classList.add("icon-moon-icon")
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    darkModeToggle.classList.remove("icon-moon-icon")
    darkModeToggle.classList.add("icon-sun-icon")
    localStorage.setItem("darkMode", null);
}

if(darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", function(){
   darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled") {
    enableDarkMode();
   } else {
    disableDarkMode();
   }
});