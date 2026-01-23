const botonflotante = document.getElementById('boton-contacto');
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('nav ul');
const animaciones = document.querySelectorAll('.animacion');//para animaciones

botonflotante.addEventListener('click', () => {
  const contacto = document.getElementById('contacto');
  if (contacto) {
    contacto.scrollIntoView({ behavior: 'smooth' });
  }
});

menu.addEventListener('click', () => {
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

//Animaciones
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.1
});

animaciones.forEach(el => observer.observe(el));

/*Carrusel*/ 
document.addEventListener('DOMContentLoaded', () => {

    const carousel = document.querySelector('.portafolio');
    const cards = carousel.querySelectorAll('.card-carousel');

    let activeIndex = 0;
    let autoplay = true;
    let interval;

    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-btn prev';
    prevBtn.innerHTML = '<img src="icon-prev.png" alt="<">';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-btn next';
    nextBtn.innerHTML = '<img src="icon-next.png" alt=">">';

    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);

    function updateCarousel() {
        cards.forEach((card, i) => {
            const offset = i - activeIndex;
            card.style.setProperty('--offset', offset);
            card.style.setProperty('--abs-offset', Math.abs(offset));
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
        interval = setInterval(() => {
            if (autoplay) next();
        }, 3000);
    }

    function stopAutoplay() {
        autoplay = false;
        clearInterval(interval);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoplay();
        next();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoplay();
        prev();
    });

    cards.forEach(card => {
        card.addEventListener('click', stopAutoplay);
    });

    updateCarousel();
    startAutoplay();
});

