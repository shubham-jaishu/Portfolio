

/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()
    //service-id, template-id, #form, publickey
    emailjs.sendForm('service_rnz3k4h', 'template_yvyj7cc', '#contact-form', 'H4c9cM88cW6iQaCSB').then(() => {
        contactMessage.textContent = 'Message Sent Successfully ✅'
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message Not Sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, { delay: 600 })
sr.reveal(`.home__scroll`, { delay: 800 })
sr.reveal(`.work__card, .services__card`, { interval: 100 })
sr.reveal(`.about__content`, { origin: "right" })
sr.reveal(`.about__img`, { origin: "left" })

document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.typed-out');
    let index = 0;
    let isDeleting = false;

    function typeWriterEffect() {
        const currentText = texts[index];
        const nextText = texts[(index + 1) % texts.length];

        if (!isDeleting) {
            // Start typing animation
            currentText.classList.remove('hidden');
            currentText.style.animation = 'typing 1s steps(100, end) forwards';

            setTimeout(() => {
                isDeleting = true;

                // Start deleting animation after typing
                currentText.style.animation = 'deleting 1s steps(100, end) forwards';

                setTimeout(() => {
                    // Hide current text and show next text
                    currentText.classList.add('hidden');
                    nextText.classList.remove('hidden');

                    // Reset animations and flags
                    currentText.style.animation = '';
                    nextText.style.animation = 'typing 1s steps(100, end) forwards';
                    isDeleting = false;

                    // Update index for next iteration
                    index = (index + 1) % texts.length;
                }, 1000); // Wait for deleting animation to complete
            }, 1000); // Wait before starting deleting animation
        }
    }

    // Start the typing effect
    setInterval(typeWriterEffect, 2000); // Adjust timing as needed
});
