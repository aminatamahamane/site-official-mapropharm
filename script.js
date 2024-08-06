document.addEventListener('DOMContentLoaded', function () {
    // Gestion du formulaire de contact
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Message envoyé !');
    });

    // Animation de défilement des partenaires
    const partnerSlider = document.querySelector('.partners-slider');
    const partnerImages = partnerSlider.querySelectorAll('img');
    let currentPartnerIndex = 0;

    function showNextPartnerImage() {
        partnerImages[currentPartnerIndex].classList.remove('visible');
        currentPartnerIndex = (currentPartnerIndex + 1) % partnerImages.length;
        partnerImages[currentPartnerIndex].classList.add('visible');
    }

    setInterval(showNextPartnerImage, 5000); // Change image every 5 seconds


    // Menu hamburger
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    document.getElementById('next').addEventListener('click', showNextSlide);
    document.getElementById('prev').addEventListener('click', showPrevSlide);

    // Optionnel : ajoutez une fonction pour faire défiler automatiquement les images
    setInterval(showNextSlide, 5000); // Change toutes les 5 secondes
});
// script.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    const slideInterval = 5000; // Temps de défilement en millisecondes

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    }

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    // Défilement automatique
    setInterval(nextSlide, slideInterval);

    // Afficher la première diapositive
    showSlide(currentIndex);
});
