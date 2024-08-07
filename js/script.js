// Example of simple JavaScript for future functionality
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Document is ready!');
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

