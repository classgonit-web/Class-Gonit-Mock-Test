
// CLASS GONIT WEBSITE

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Class Gonit!");

    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener("click", function(event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
