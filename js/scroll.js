        document.addEventListener("DOMContentLoaded", function() {
            const sections = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll(".navigation li a");

            function changeActiveLink() {
                let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

                sections.forEach((section, index) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(link => {
                            link.classList.remove("active");
                        });
                        navLinks[index].classList.add("active");
                    }
                });
            }

            window.addEventListener("scroll", changeActiveLink);
        });
