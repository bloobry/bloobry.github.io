document.querySelector(".about-btn").addEventListener("click", function () {
    let section = document.querySelector(".about-page");
    let visibleFbPage = Array.from(document.querySelectorAll(".fb-container"))
        .find(container => window.getComputedStyle(container).display !== "none")
        ?.querySelector(".fb-page");

    let rectangle = document.querySelector(".rectangle");
    let aboutText = document.querySelector(".about-text");

    if (!visibleFbPage) return;

    if (section.classList.contains("expanded")) {
        section.classList.remove("expanded");
        section.classList.add("collapsed");

        visibleFbPage.style.opacity = "0";
        visibleFbPage.style.visibility = "hidden";
        visibleFbPage.style.pointerEvents = "none";
        setTimeout(() => {
            visibleFbPage.style.display = "none";
        }, 50);

        if (rectangle) {
            rectangle.style.opacity = "0";
            rectangle.style.visibility = "hidden";
        }

        if (aboutText) {
            aboutText.style.opacity = "0";
            aboutText.style.visibility = "hidden";
        }

    } else {
        section.classList.remove("collapsed");
        section.classList.add("expanded");

        visibleFbPage.style.display = "block";
        setTimeout(() => {
            visibleFbPage.style.opacity = "1";
            visibleFbPage.style.visibility = "visible";
            visibleFbPage.style.pointerEvents = "auto";
        }, 10);

        if (rectangle) {
            rectangle.style.opacity = "1";
            rectangle.style.visibility = "visible";
        }

        if (aboutText) {
            aboutText.style.opacity = "1";
            aboutText.style.visibility = "visible";
        }
    }
});
