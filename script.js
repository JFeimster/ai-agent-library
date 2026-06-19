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
      } catch (error) {}
    }
    return fallback;
  }

  function unique(values) {
    return [...new Set((values || []).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)));
  }

  function normalizeAgent(agent, index = 0) {
    return {
      name: agent.name || `Agent ${index + 1}`,
      slug: agent.slug || `agent-${index + 1}`,
      category: agent.category || "Uncategorized",
      buyer: agent.buyer || agent.audience || "Builder / operator",
      pain_solved: agent.pain_solved || agent.problem_solved || agent.description || "Reusable AI agent pattern.",
      monetization: agent.monetization || "TBD",
      platform: agent.platform || "Platform TBD",
      status: agent.status || "Draft",
      priority: agent.priority || "Medium",
      tags: agent.tags || [],
      file: agent.file || ""
    };
  }

  function normalizeSkill(skill, index = 0) {
    return {
      name: skill.name || `Skill ${index + 1}`,
      slug: skill.slug || `skill-${index + 1}`,
      category: skill.category || "Uncategorized",
      audience: skill.audience || "Builder / operator",
      problem_solved: skill.problem_solved || skill.description || "Reusable skill pattern.",
      recommended_apps: skill.recommended_apps || skill.apps || [],
      priority: skill.priority || "Medium",
      status: skill.status || "Draft",
      path: skill.path || skill.file || ""
    };
  }

  function setYear() {
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", setYear);

  return { escapeHTML, fetchJSON, unique, normalizeAgent, normalizeSkill, setYear };
})();
