/* ── 1. Toggle del menú mobile ─────────────────────────── */
(function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMobile');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── 2. Carruseles ─────────────────────────────────────── */
(function () {
  function initCarousel(root, opts) {
    var track = root.querySelector(opts.track);
    var slides = root.querySelectorAll(opts.slide);
    var prevBtn = root.querySelector(opts.prev);
    var nextBtn = root.querySelector(opts.next);
    var dots = root.querySelectorAll(opts.dot);
    if (!track || !slides.length) return;

    var count = slides.length;
    var activeIndex = 0;

    function goTo(index) {
      var clamped = Math.max(0, Math.min(count - 1, index));

      var slideWidth = track.clientWidth || track.offsetWidth;
      track.scrollTo({ left: clamped * slideWidth, behavior: 'smooth' });
      activeIndex = clamped;
      updateDots();
    }

    function updateDots() {
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === activeIndex);
      });
      if (prevBtn) prevBtn.style.visibility = activeIndex === 0 ? 'hidden' : 'visible';
      if (nextBtn) nextBtn.style.visibility = activeIndex === count - 1 ? 'hidden' : 'visible';
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        goTo(activeIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        goTo(activeIndex + 1);
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
      });
    });

    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(activeIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(activeIndex - 1);
      }
    });

    /* Sincronizar índice cuando el usuario arrastra con touch */
    var scrollTimer;
    track.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        var slideWidth = track.clientWidth || track.offsetWidth;
        if (slideWidth) {
          activeIndex = Math.round(track.scrollLeft / slideWidth);
          updateDots();
        }
      }, 80);
    });

    updateDots();
  }

  function initAll() {
    document.querySelectorAll('.room-carousel').forEach(function (root) {
      initCarousel(root, {
        track: '.room-carousel-track',
        slide: '.room-carousel-slide',
        prev: '.room-carousel-arrow--prev',
        next: '.room-carousel-arrow--next',
        dot: '.room-carousel-dot',
      });
    });
    document.querySelectorAll('.frases-carousel').forEach(function (root) {
      initCarousel(root, {
        track: '.frases-carousel-track',
        slide: '.frases-carousel-slide',
        prev: '.frases-carousel-arrow--prev',
        next: '.frases-carousel-arrow--next',
        dot: '.frases-carousel-dot',
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      requestAnimationFrame(initAll);
    });
  } else {
    requestAnimationFrame(initAll);
  }
})();

/* ── 3. Tracking GA4 ────────────────────────────────────── */
(function () {
  document.querySelectorAll('[href*="wa.me"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
          event_category: 'contacto',
          event_label: btn.textContent.trim().slice(0, 40),
        });
      }
    });
  });

  document.querySelectorAll('[href*=".pdf"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'menu_descarga', {
          event_category: 'restaurante',
          event_label: 'PDF menu',
        });
      }
    });
  });
})();

/* ── 4. Video: lazy load por IntersectionObserver (solo desktop ≥ 768px) ─────── */
(function () {
  var video = document.getElementById('heroVideo');
  if (!video) return;
  if (window.innerWidth < 768) return; /* no cargar en mobile */

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var source = document.createElement('source');
          source.src = '/img/video-dron.mp4';
          source.type = 'video/mp4';
          video.appendChild(source);
          video.load();
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' }); /* empieza a cargar 200px antes de que sea visible */
    observer.observe(video);
  } else {
    /* Fallback para navegadores sin IntersectionObserver */
    var source = document.createElement('source');
    source.src = '/img/video-dron.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    video.load();
  }
})();
