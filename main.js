// Theme toggle, mobile menu, sticky-header shadow, image fallbacks, footer year.
(function () {
  const root = document.documentElement;
  root.classList.add("js");

  // ── Theme (persisted, system preference as default) ──
  const KEY = "theme";
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved) {
    root.setAttribute("data-theme", saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  // ── Mobile menu ──
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    const setOpen = function (open) {
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("open", open);
    };
    menuBtn.addEventListener("click", function () {
      setOpen(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        menuBtn.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) setOpen(false);
    });
  }

  // ── Header shadow once scrolled ──
  const topbar = document.getElementById("topbar");
  if (topbar) {
    const onScroll = function () { topbar.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ── Missing images → fallback (initials avatar / gradient thumbnail) ──
  document.querySelectorAll(".avatar img, .card-thumb img").forEach(function (img) {
    const fail = function () { img.parentElement.classList.add("img-missing"); img.remove(); };
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener("error", fail);
  });

  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
