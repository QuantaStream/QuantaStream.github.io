(function () {
  const translations = window.quantastreamPageTranslations || {};
  const languageToggle = document.querySelector("[data-lang-toggle]");

  function linkWithLanguage(href, language) {
    if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) {
      return href;
    }
    const baseHref = href.split("?")[0];
    return `${baseHref}?lang=${language}`;
  }

  function setLanguage(language) {
    const nextLanguage = translations[language] ? language : "en";
    const text = translations[nextLanguage];
    document.documentElement.lang = nextLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (text[key]) {
        element.innerHTML = text[key];
      }
    });

    document.querySelectorAll("[data-lang-panel]").forEach((element) => {
      element.hidden = element.getAttribute("data-lang-panel") !== nextLanguage;
    });

    document.querySelectorAll("[data-localized-link]").forEach((link) => {
      link.setAttribute("href", linkWithLanguage(link.getAttribute("href"), nextLanguage));
    });

    if (languageToggle) {
      languageToggle.innerHTML = text.toggleLabel;
      languageToggle.setAttribute("aria-label", text.toggleAria);
      languageToggle.setAttribute("aria-pressed", nextLanguage === "es" ? "true" : "false");
    }

    localStorage.setItem("quantastream-language", nextLanguage);

    if (typeof window.renderPageContent === "function") {
      window.renderPageContent(nextLanguage);
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
      setLanguage(nextLanguage);
    });
  }

  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  setLanguage(translations[requestedLanguage] ? requestedLanguage : (localStorage.getItem("quantastream-language") || "en"));
})();
