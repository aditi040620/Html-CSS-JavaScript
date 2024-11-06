// Select the menu icon and navbar elements
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle 'active' class on navbar when menu icon is clicked
menu.onclick = () => {
    navbar.classList.toggle('active');
}

// Remove 'active' class from navbar when the window is scrolled
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark mode toggle
let darkmode = document.querySelector('#darkmode');

// Toggle between dark mode and light mode when darkmode icon is clicked
darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        // Switch to dark mode
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        // Switch to light mode
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top', // Animation starts from the top
    distance: '40px', // Distance the elements move
    duration: 2000, // Duration of the animation in milliseconds
    reset: true // Repeat the animation every time the element comes into view
});

// Apply scroll reveal animation to selected elements with a delay between each
sr.reveal(`.hometext,.home-img,.about-img,.about-text,.box,s.box,.btn,.connect-text,.contact-box`, {
    interval: 200 // Delay between animations for each element
})
