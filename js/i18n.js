/* ─────────────────────────────────────────────────────────────────────────
   W1@Bangkoknoi — i18n Engine
   Usage: switchLang('en' | 'th' | 'zh')
   Persists choice in localStorage under key 'w1_lang'
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  var LANG_KEY = 'w1_lang';
  var currentLang = localStorage.getItem(LANG_KEY) || 'en';

  /* Elements whose text content we translate */
  var SELECTOR = [
    'h1', 'h2', 'h3', 'h4', 'h5',
    '.eyebrow-tag', '.section-tag',
    '.nav-links a',
    'button:not(.nav-hamburger):not(.lang-btn)',
    '.btn-gold', '.btn-outline-white', '.btn-white',
    '.btn-wc', '.btn-wc-outline',
    '.footer-nav a', '.footer-brand h3',
    '.room-book', '.room-enquire',
    /* Body text */
    'p',
    'label', 'option',
    'td', 'th'
  ].join(', ');

  /* Normalise whitespace for reliable key lookup */
  function normalise(str) {
    return str.replace(/\s+/g, ' ').trim();
  }

  /* Apply a language to the page */
  function applyLang(lang) {
    var dict = (lang !== 'en' && window.W1Translations)
      ? window.W1Translations[lang] || {}
      : null;

    document.querySelectorAll(SELECTOR).forEach(function (el) {
      /* Skip elements that are purely icons / have no visible text */
      var text = normalise(el.textContent);
      if (!text) return;

      /* Store the original innerHTML once */
      if (!el.hasAttribute('data-i18n-orig')) {
        el.setAttribute('data-i18n-orig', el.innerHTML);
        el.setAttribute('data-i18n-key', text);
      }

      var key = el.getAttribute('data-i18n-key');

      if (lang === 'en') {
        el.innerHTML = el.getAttribute('data-i18n-orig');
      } else if (dict && dict[key]) {
        el.innerHTML = dict[key];
      }
      /* If no translation found, leave the element as-is (English fallback) */
    });

    /* Update switcher button active states */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    /* Update html[lang] attribute */
    document.documentElement.lang =
      lang === 'zh' ? 'zh-CN' : lang;

    localStorage.setItem(LANG_KEY, lang);
    currentLang = lang;
  }

  /* Public API */
  window.switchLang = applyLang;

  /* Init on DOM ready */
  document.addEventListener('DOMContentLoaded', function () {
    /* Set active button on load */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active',
        btn.getAttribute('data-lang') === currentLang);
    });
    /* Apply saved language if not English */
    if (currentLang !== 'en') {
      applyLang(currentLang);
    }
  });
})();
