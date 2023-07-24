function toggle() {
    const button = document.getElementById("navbar");
    if (button.className === "hidden") {
        button.className = "show";
    } 
    else {
        button.className = "hidden";
    }
}