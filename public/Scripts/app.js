/* app.css - Nhat Phuc Nguyen - 301157980 - September/28/2022 */
(function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const titleName = document.querySelector("title").textContent.trim();    
    // Switch the active mode between links
    function activeNavLink() {
        navLinks.forEach(navLink => {
            if (navLink.textContent.trim() === titleName) {
                navLink.classList.add("active");
            }
        });
    }    
    window.addEventListener("load", activeNavLink());
}());