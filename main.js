
    const navLink = document.querySelectorAll('.nav ul a');
    navLink.forEach(function(e) {
        e.addEventListener('click', function(c) {
            c.preventDefault();
            document.querySelector(c.target.hash).scrollIntoView({behavior: "smooth"});
        });
    });
