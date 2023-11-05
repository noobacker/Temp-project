let drawerOpen = false;

function toggleDrawer() {
    const leftContainer = document.getElementById("left-container");
    const rightContainer = document.getElementById("right-container");

    if (drawerOpen) {
        leftContainer.classList.remove("drawer-open");
        rightContainer.style.width = "80%";
    } else {
        leftContainer.classList.add("drawer-open");
        rightContainer.style.width = "100%";
    }

    drawerOpen = !drawerOpen;
}
