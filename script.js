// Show the bottom Call / WhatsApp bar once the hero order block scroll out of view.
(function () {
  var dock = document.getElementById('dock');
  var hero = document.querySelector('.hero .order-rows');
  if (!dock || !hero) return;
  document.documentElement.classList.add('js');
  if (!('IntersectionObserver' in window)) { dock.classList.add('show'); return; }
  new IntersectionObserver(function (entries) {
    dock.classList.toggle('show', !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0);
  }).observe(hero);
})();
