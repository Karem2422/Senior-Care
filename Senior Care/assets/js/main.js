// Main JS for site interactions: mobile menu, smooth scroll, subscribe validation, reveals
(function () {
  // Mobile menu: Single creation + smooth transitions
  const headerBtn = document.querySelector('header button');
  const desktopNav = document.querySelector('nav');
  let mobileMenuEl = null;

  function createMobileMenu() {
    mobileMenuEl = document.createElement('div');
    // Backdrop: start hidden (opacity-0, pointer-events-none)
    mobileMenuEl.className = 'fixed inset-0 bg-slate-900/95 z-[60] flex items-center justify-center md:hidden opacity-0 pointer-events-none transition-opacity duration-300 backdrop-blur-sm';

    // Prepare nav links for mobile (dark background)
    // Replace dark text with light text for visibility
    let navContent = desktopNav ? desktopNav.innerHTML : '';
    navContent = navContent.replace(/text-slate-600/g, 'text-slate-300');
    navContent = navContent.replace(/hover:text-\[var\(--primary-blue\)\]/g, 'hover:text-white');

    // Inner container: scaling and fading
    mobileMenuEl.innerHTML = `
      <div class="relative transform transition-all duration-300 ease-out scale-90 opacity-0 min-w-[200px] text-center">
        <button aria-label="Close menu" id="mobile-close" class="absolute -top-16 right-0 left-0 mx-auto w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors rounded-full border border-slate-700">
             <span class="material-symbols-outlined text-2xl">close</span>
        </button>
        <nav class="flex flex-col items-center gap-8 text-xl font-medium tracking-wide">
            ${navContent}
        </nav>
      </div>
    `;

    document.body.appendChild(mobileMenuEl);

    // Event listeners
    const closeBtn = mobileMenuEl.querySelector('#mobile-close');
    closeBtn.addEventListener('click', closeMobileMenu);

    // Close when clicking any link
    mobileMenuEl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on backdrop click
    mobileMenuEl.addEventListener('click', (e) => {
      if (e.target === mobileMenuEl) closeMobileMenu();
    });
  }

  function openMobileMenu() {
    if (!mobileMenuEl) createMobileMenu();

    // Use requestAnimationFrame/setTimeout to trigger transition
    requestAnimationFrame(() => {
      setTimeout(() => {
        mobileMenuEl.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenuEl.classList.add('opacity-100', 'pointer-events-auto');

        const content = mobileMenuEl.firstElementChild;
        content.classList.remove('scale-90', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
      }, 10);
    });
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileMenuEl && mobileMenuEl.classList.contains('opacity-100')) {
      mobileMenuEl.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenuEl.classList.add('opacity-0', 'pointer-events-none');

      const content = mobileMenuEl.firstElementChild;
      content.classList.remove('scale-100', 'opacity-100');
      content.classList.add('scale-90', 'opacity-0');

      document.body.style.overflow = '';
    }
  }

  headerBtn?.addEventListener('click', openMobileMenu);

  // Close mobile menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          ev.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          closeMobileMenu();
        }
      }
    });
  });

  // Subscribe form validation (footer)
  const subscribeForm = document.querySelector('footer form');
  function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded shadow-lg z-60';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; }, 2200);
    setTimeout(() => t.remove(), 2600);
  }

  subscribeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = subscribeForm.querySelector('input[type="email"]');
    const email = (input?.value || '').trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      input?.classList.add('ring', 'ring-red-500');
      input?.focus();
      showToast('Please enter a valid email address');
      return;
    }
    input.value = '';
    showToast('Thanks — you are subscribed!');
  });

  // Simple reveal-on-scroll for elements with .reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
    observer.observe(el);
  });

})();
