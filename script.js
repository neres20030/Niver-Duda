function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img"); 
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/WhatsApp Image 2024-10-13 at 2.53.26 PM.png");
    } else {
        img.setAttribute("src", "./assets/WhatsApp Image 2024-10-13 at 2.53.26 PM.png");
    }
}
