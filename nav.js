(() => {
  const items = [
    ["Home", "index.html", ["", "/", "index.html"]],
    ["Build", "build-console.html", ["build-console.html"]],
    ["Agents", "agent-catalog.html", ["agent-catalog.html", "agent-workbench.html"]],
    ["Skills", "skill-catalog.html", ["skill-catalog.html", "skill-builder.html", "top-skills.html", "skill-categories.html"]],
    ["Registries", "registry-console.html", ["registry-console.html"]],
    ["Platforms", "platforms.html", ["platforms.html"]],
    ["Knowledge", "knowledge-bases.html", ["knowledge-bases.html"]],
    ["Portfolio", "portfolio.html", ["portfolio.html"]],
    ["Search", "search.html", ["search.html"]]
  ];

  function escapeText(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    }[char]));
  }

  function currentPage() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function addStyles() {
    if (document.getElementById("build-first-nav-style")) return;
    const style = document.createElement("style");
    style.id = "build-first-nav-style";
    style.textContent = ".nav-links a.nav-build{background:var(--accent);border-color:var(--accent);color:#111}.nav-links a.nav-build:hover,.nav-links a.nav-build[aria-current='page']{background:var(--accent);border-color:var(--accent);color:#111}.nav-links a.nav-build::before{content:'⚡';margin-right:.25rem}";
    document.head.appendChild(style);
  }

  function renderNav() {
    const current = currentPage();
    document.querySelectorAll(".nav-links, .site-nav").forEach((nav) => {
      nav.classList.add("nav-links");
      nav.innerHTML = items.map(([label, href, aliases]) => {
        const active = aliases.includes(current) ? " aria-current=\"page\"" : "";
        const klass = label === "Build" ? " class=\"nav-build\"" : "";
        return `<a href=\"${href}\"${klass}${active}>${escapeText(label)}</a>`;
      }).join("");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    addStyles();
    renderNav();
  });
})();
