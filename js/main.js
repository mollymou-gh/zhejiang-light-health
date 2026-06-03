// ===== 中英双语切换 =====
(function () {
  var KEY = 'zlh-lang';
  var current = localStorage.getItem(KEY) || 'zh';

  function apply(lang) {
    document.documentElement.lang = (lang === 'en') ? 'en' : 'zh';
    document.querySelectorAll('[data-zh]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val == null) return;
      // <title> and <meta> need attribute/text handling
      if (el.tagName === 'META') { el.setAttribute('content', val); return; }
      el.textContent = val;
    });
    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = (lang === 'en') ? '中文' : 'EN';
    localStorage.setItem(KEY, lang);
    current = lang;
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(current);

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        apply(current === 'zh' ? 'en' : 'zh');
      });
    }

    // ===== 移动端菜单 =====
    var menuBtn = document.getElementById('menuToggle');
    var links = document.getElementById('navLinks');
    if (menuBtn && links) {
      menuBtn.addEventListener('click', function () {
        links.classList.toggle('open');
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { links.classList.remove('open'); });
      });
    }

    // ===== 年份 =====
    var y = document.getElementById('year');
    if (y) y.textContent = '2026';
  });
})();
