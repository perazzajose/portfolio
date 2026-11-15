// Menú en celular
const boton = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

boton.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  boton.setAttribute('aria-expanded', abierto);
  boton.textContent = abierto ? 'Cerrar' : 'Menú';
});

menu.addEventListener('click', (e) => {
  if (e.target.closest('a') && menu.classList.contains('abierto')) boton.click();
});

// Marca en el menú la sección que se está viendo
const enlaces = [...menu.querySelectorAll('a')];
const secciones = enlaces.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      enlaces.forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  secciones.forEach((s) => obs.observe(s));
}

// Año del pie
document.getElementById('anio').textContent = new Date().getFullYear();
