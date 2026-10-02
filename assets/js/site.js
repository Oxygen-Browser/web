/* Oxygen website behaviours. No third-party requests, ever. */
var OXYGEN = {
  // Org and repos. Create `oxygen-browser` in the Oxygen-Browser org
  // and these links go live.
  githubOrg: "https://github.com/Oxygen-Browser",
  browserRepo: "https://github.com/Oxygen-Browser/oxygen-browser",
  releases: "https://github.com/Oxygen-Browser/oxygen-browser/releases",
  patchesDir:
    "https://github.com/Oxygen-Browser/oxygen-browser/tree/main/patches/core",
  version: "0.1",
  firefoxBase: "156"
};

(function () {
  "use strict";
  function wire(sel, url) {
    document.querySelectorAll(sel).forEach(function (a) { a.href = url; });
  }
  wire("[data-releases]", OXYGEN.releases);
  wire("[data-github]", OXYGEN.browserRepo);
  wire("[data-patches]", OXYGEN.patchesDir);

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  var dl = document.querySelector("[data-dl-primary]");
  if (dl) {
    var lang = document.documentElement.lang === "es" ? "es" : "en";
    var p = (navigator.platform || "").toLowerCase();
    var label = lang === "es" ? "Descargar para Windows" : "Download for Windows";
    if (p.indexOf("mac") !== -1) {
      label = (lang === "es" ? "Descargar para macOS" : "Download for macOS") + " (soon)";
    } else if (p.indexOf("linux") !== -1) {
      label = (lang === "es" ? "Descargar para Linux" : "Download for Linux") + " (soon)";
    }
    dl.textContent = label;
  }

  var t = document.querySelector("[data-menu-toggle]");
  var links = document.querySelector("[data-nav-links]");
  if (t && links) {
    t.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }
})();
