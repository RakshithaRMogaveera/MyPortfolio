// ===============================
// TYPING EFFECT
// ===============================

new Typed("#element", {
    strings: [
        "Information Science and Engineering Graduate ",
        "Information Science and Engineering Graduate"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    loop: true
});

// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(255,255,255,.82)";
        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.12)";
        navbar.style.padding = "14px 40px";

    } else {

        navbar.style.background = "rgba(255,255,255,.55)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.08)";
        navbar.style.padding = "16px 40px";

    }

});

// ===============================
// FADE UP ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section,.glass").forEach(el=>{

    el.classList.add("hidden");
    observer.observe(el);

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-180;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});