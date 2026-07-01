window.AILibrary = (() => {
  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  async function fetchJSON(paths, fallback = []) {
    const list = Array.isArray(paths) ? paths : [paths];

    for (const path of list) {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (response.ok) return await response.json();
      } catch (error) {
        // Static-first fallback. Missing optional JSON should not kill the page.
      }
    }

    return fallback;
  }

  function unique(values) {
    return [...new Set((values || []).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)));
  }

  function slugify(text) {
    return String(text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function queryParam(name, fallback = "") {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || fallback;
  }

  function normalizePriority(value) {
    const raw = String(value || "Medium").toLowerCase();
    if (raw === "high") return "High";
    if (raw === "low") return "Low";
    return "Medium";
  }

  function normalizeStatus(value) {
    const raw = String(value || "Draft").toLowerCase();
    if (raw === "ready") return "Ready";
    if (raw === "planned") return "Planned";
    if (raw === "needs review" || raw === "needs-review") return "Needs Review";
    if (raw === "published") return "Published";
    return raw ? raw.charAt(0).toUpperCase() + raw.slice(1) : "Draft";
  }

  function normalizeAgent(agent, index = 0) {
    const name = agent.name || `Agent ${index + 1}`;
    const slug = agent.slug || slugify(name) || `agent-${index + 1}`;

    return {
      number: agent.number || index + 1,
      name,
      slug,
      category: agent.category || "Uncategorized",
      buyer: agent.buyer || agent.audience || "Builder / operator",
      pain_solved: agent.pain_solved || agent.problem_solved || agent.description || "Reusable AI agent pattern.",
      monetization: agent.monetization || "TBD",
      platform: agent.platform || "Platform TBD",
      status: normalizeStatus(agent.status || "Draft"),
      priority: normalizePriority(agent.priority || "Medium"),
      tags: agent.tags || [],
      file: agent.file || ""
    };
  }

  function normalizeSkill(skill, index = 0) {
    const name = skill.name || `Skill ${index + 1}`;
    const slug = skill.slug || slugify(name) || `skill-${index + 1}`;

    return {
      name,
      slug,
      category: skill.category || "Uncategorized",
      audience: skill.audience || "Builder / operator",
      problem_solved: skill.problem_solved || skill.description || "Reusable skill pattern.",
      recommended_apps: skill.recommended_apps || skill.apps || [],
      priority: normalizePriority(skill.priority || "Medium"),
      status: normalizeStatus(skill.status || "Draft"),
      path: skill.path || skill.file || `skills/${slug}/SKILL.md`,
      related_agents: skill.related_agents || [],
      related_knowledge_bases: skill.related_knowledge_bases || []
    };
  }

  function priorityWeight(priority) {
    return { High: 1, Medium: 2, Low: 3 }[normalizePriority(priority)] || 99;
  }

  function listLines(items, fallback = "- TBD") {
    const list = (items || []).filter(Boolean);
    if (!list.length) return fallback;
    return list.map((item) => `- ${item}`).join("\n");
  }

  async function copyText(text, button) {
    await navigator.clipboard.writeText(text);

    if (button) {
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = original;
      }, 1200);
    }
  }

  function setYear() {
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", setYear);

  return {
    escapeHTML,
    fetchJSON,
    unique,
    slugify,
    queryParam,
    normalizePriority,
    normalizeStatus,
    normalizeAgent,
    normalizeSkill,
    priorityWeight,
    listLines,
    copyText,
    setYear
  };
})();
