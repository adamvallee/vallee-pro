// vallee.pro — progressive enhancement only.
// The site works fully without JS; this adds reveal animations + footer year.

(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact email: assembled at runtime (base64) so harvesting bots
  // can't scrape the address out of the HTML source.
  var emailLink = document.getElementById("contactEmail");
  if (emailLink) {
    var email = atob("YWRhbUB2YWxsZWUucHJv");
    emailLink.href = "mailto:" + email;
    emailLink.textContent = email;
  }

  // Respect reduced motion: if the user prefers it, skip animations entirely.
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches) return;

  // Reveal elements as they scroll into view
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    io.observe(el);
  });
})();