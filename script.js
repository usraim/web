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


