
/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));

    });

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            navMenu.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }

    });

}

/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* =========================
   NAVIGATION ACTIVE STATE
========================= */

const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const currentId = entry.target.id;

                    navItems.forEach(function (link) {

                        const isActive =
                            link.getAttribute("href") === "#" + currentId;

                        link.classList.toggle("active", isActive);

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });

}
