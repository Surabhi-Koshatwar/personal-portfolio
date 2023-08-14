function start() {
    const header = document.querySelector('.navbar');

    window.onscroll = function() {
        var top = window.scrollY;
        if (top >= 100) {
            header.classList.add('navbarDark');
        } else {
            header.classList.remove('navbarDark');
        }
    }
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarSupportedContent')

    navLinks.forEach((l) => {
        l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
    })

    function FadeInReveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }

            // } else {
            //     reveals[i].classList.remove("active");
            // }
        }
    }

    window.addEventListener("scroll", FadeInReveal);
}