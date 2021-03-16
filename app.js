function showMenu() {
    let hiddenNav = document.getElementsByClassName("hamburger-menu").item(0);
    let body = document.getElementsByTagName("body").item(0);
    hiddenNav.classList.remove("hide");
    hiddenNav.classList.remove("fade-right");
};
function hideMenu () {
    let hiddenNav = document.getElementsByClassName("hamburger-menu").item(0);
    let body = document.getElementsByTagName("body").item(0);
    hiddenNav.classList.add("fade-right");
    setTimeout(() => {
      hiddenNav.classList.add("hide");
    }, 350);
};