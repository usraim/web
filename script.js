document.addEventListener('DOMContentLoaded', () => {

    const carousel = document.querySelector('.portafolio');

    if (carousel) {
        const cards = carousel.querySelectorAll('.card-carousel');
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');

        let activeIndex = 0;
        let autoplay = true;
        let interval = null;

        function updateCarousel() {
            cards.forEach((card, i) => {
                const offset = i - activeIndex;
                const absOffset = Math.abs(offset);

                card.style.setProperty('--offset', offset);
                card.style.setProperty('--abs-offset', absOffset);
                card.style.zIndex = cards.length - absOffset;
            });
        }

        function next() {
            activeIndex = (activeIndex + 1) % cards.length;
            updateCarousel();
        }

        function prev() {
            activeIndex = (activeIndex - 1 + cards.length) % cards.length;
            updateCarousel();
        }

        function startAutoplay() {
            if (interval) clearInterval(interval);
            interval = setInterval(() => {
                if (autoplay) next();
            }, 3000);
        }

        function stopAutoplay() {
            autoplay = false;
            if (interval) clearInterval(interval);
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                stopAutoplay();
                next();
            });

            prevBtn.addEventListener('click', () => {
                stopAutoplay();
                prev();
            });
        }

        cards.forEach(card => {
            card.addEventListener('click', stopAutoplay);
        });

        
        updateCarousel();
        startAutoplay();
    }

    const botonflotante = document.getElementById('boton-contacto');

    if (botonflotante) {
        botonflotante.addEventListener('click', () => {
            const contacto = document.getElementById('contacto');
            if (contacto) {
                contacto.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    const menu = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');

    if (menu && navLinks) {

        menu.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        window.addEventListener('scroll', () => {
            if (navLinks.classList.contains('active')) {
                menu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    const animaciones = document.querySelectorAll('.animacion');

    if (animaciones.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1
        });

        animaciones.forEach(el => observer.observe(el));
    }

});
