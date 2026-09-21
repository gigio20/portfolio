/* Único movimiento del sitio: reveal al entrar en viewport.
   Sin dependencias. Respeta prefers-reduced-motion. */

(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  items.forEach(el => io.observe(el));
})();
