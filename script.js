const AILibrary = (() => {
  const escapeHTML = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  async function fetchJSON(paths, fallback = []) {
    for (const path of Array.isArray(paths) ? paths : [paths]) {
      try {
        const response = await fetch(path);

        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        // Try the next path.
      }
    }

    return fallback;
  }

  function normalizeAgent(agent, index = 0) {
    return {
      number: agent.number || agent.id || index + 1,
      name: agent.name || agent.agent || "Untitled Agent",
      category: agent.category || "Uncategorized",
      buyer: agent.buyer || agent.audience || "Unknown",
      pain_solved:
        agent.pain_solved ||
        agent.pain ||
        agent.problem_solved ||
        "Unknown",
      monetization: agent.monetization || "Unknown",
      file: agent.file || agent.path || "#"
    };
  }

  function normalizeSkill(skill, index = 0) {
    return {
      id: skill.id || `skill-${index + 1}`,
      name: skill.name || "Untitled Skill",
      category: skill.category || "Uncategorized",
      audience: skill.audience || "Unknown",
      problem_solved:
        skill.problem_solved ||
        skill.problem ||
        "Unknown",
      recommended_apps:
        skill.recommended_apps ||
        skill.apps ||
        [],
      status: skill.status || "Planned",
      priority: skill.priority || "Medium"
    };
  }

  function unique(values) {
    return [...new Set(values.filter(Boolean))].sort((a, b) =>
      String(a).localeCompare(String(b))
    );
  }

  function setYear() {
    document.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", setYear);

  return {
    escapeHTML,
    fetchJSON,
    normalizeAgent,
    normalizeSkill,
    unique
  };
})();
