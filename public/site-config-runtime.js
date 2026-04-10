(function () {
  const STORAGE_KEY = "trillionir.site-config.v1";
  const DEFAULT_AVATAR = "/avatars/default-avatar.svg";
  const PARSE_APP_ID = "WeiPkWXczddKmqvapBdmy29XwG3MmRAxtj95hR2C";
  const PARSE_JS_KEY = "yohJ0A1GGJNOkn5Hlq2sJgtBeoDGQh7fdnziAolf";
  const PARSE_API_URL = "https://parseapi.back4app.com/classes/SiteSettings";
  const GLOBAL_SCOPE = "global";
  let remoteObjectId = null;

  function readDefaultConfig() {
    const el = document.getElementById("site-default-config");
    if (!el || !el.textContent) return null;
    try {
      return JSON.parse(el.textContent);
    } catch (error) {
      console.error("Default config parse failed:", error);
      return null;
    }
  }

  function getStoredConfig() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.error("Local config parse failed:", error);
      return null;
    }
  }

  function saveLocalConfig(config) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }

  function normalizeConfig(config) {
    const defaults = readDefaultConfig();
    if (!defaults || !config || typeof config !== "object") return defaults || config;

    const profileSource = config.profile && typeof config.profile === "object" ? config.profile : {};
    const labelsSource = config.labels && typeof config.labels === "object" ? config.labels : {};

    const normalized = {
      ...defaults,
      ...config,
      profile: {
        ...defaults.profile,
        ...profileSource
      },
      labels: {
        ...defaults.labels,
        ...labelsSource
      }
    };

    normalized.profile.name = toText(normalized.profile.name, defaults.profile.name);
    normalized.profile.role = toText(normalized.profile.role, defaults.profile.role);
    normalized.profile.experienceLevel = toText(normalized.profile.experienceLevel, defaults.profile.experienceLevel);
    normalized.profile.headline = toText(normalized.profile.headline, defaults.profile.headline || "");
    normalized.profile.avatarUrl = toText(normalized.profile.avatarUrl, defaults.profile.avatarUrl || DEFAULT_AVATAR);

    normalized.labels.siteHeader = toText(normalized.labels.siteHeader, defaults.labels.siteHeader);
    normalized.labels.connectTitle = toText(normalized.labels.connectTitle, defaults.labels.connectTitle);
    normalized.labels.projectsTitle = toText(normalized.labels.projectsTitle, defaults.labels.projectsTitle);
    normalized.labels.collaboratorsTitle = toText(normalized.labels.collaboratorsTitle, defaults.labels.collaboratorsTitle);

    normalized.socialLinks =
      Array.isArray(config.socialLinks) && config.socialLinks.length > 0 ? config.socialLinks : defaults.socialLinks;
    normalized.projects =
      Array.isArray(config.projects) && config.projects.length > 0 ? config.projects : defaults.projects;
    normalized.collaborators =
      Array.isArray(config.collaborators) && config.collaborators.length > 0
        ? config.collaborators
        : defaults.collaborators;

    return normalized;
  }

  async function parseRequest(method, url, body) {
    const response = await fetch(url, {
      method,
      headers: {
        "X-Parse-Application-Id": PARSE_APP_ID,
        "X-Parse-JavaScript-Key": PARSE_JS_KEY,
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(`Remote config request failed (${response.status}): ${details || "unknown error"}`);
    }

    return response.json();
  }

  async function getRemoteConfig() {
    const where = encodeURIComponent(JSON.stringify({ scope: GLOBAL_SCOPE }));
    const data = await parseRequest("GET", `${PARSE_API_URL}?where=${where}&limit=1`);
    const first = Array.isArray(data.results) ? data.results[0] : null;
    remoteObjectId = first && first.objectId ? first.objectId : null;
    return first && first.config && typeof first.config === "object" ? first.config : null;
  }

  async function saveRemoteConfig(config) {
    const payload = { scope: GLOBAL_SCOPE, config };

    if (remoteObjectId) {
      await parseRequest("PUT", `${PARSE_API_URL}/${remoteObjectId}`, payload);
      return;
    }

    const where = encodeURIComponent(JSON.stringify({ scope: GLOBAL_SCOPE }));
    const existing = await parseRequest("GET", `${PARSE_API_URL}?where=${where}&limit=1`);
    const first = Array.isArray(existing.results) ? existing.results[0] : null;
    if (first && first.objectId) {
      remoteObjectId = first.objectId;
      await parseRequest("PUT", `${PARSE_API_URL}/${remoteObjectId}`, payload);
      return;
    }

    const created = await parseRequest("POST", PARSE_API_URL, payload);
    remoteObjectId = created.objectId || null;
  }

  function toText(value, fallback) {
    if (typeof value !== "string") return fallback;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : fallback;
  }

  function toSafeUrl(url, fallback) {
    try {
      const parsed = new URL(url);
      if (parsed.protocol === "https:" || parsed.protocol === "mailto:") return url;
      return fallback;
    } catch {
      return fallback;
    }
  }

  function applyLabels(labels) {
    if (!labels || typeof labels !== "object") return;
    const siteHeader = document.getElementById("site-header-title");
    const socialTitle = document.getElementById("social-links-title");
    const projectsTitle = document.getElementById("projects-title");
    const collaboratorsTitle = document.getElementById("collaborators-title");

    if (siteHeader) siteHeader.textContent = toText(labels.siteHeader, "Trillionir Portfolio");
    if (socialTitle) socialTitle.textContent = toText(labels.connectTitle, "Connect");
    if (projectsTitle) projectsTitle.textContent = toText(labels.projectsTitle, "Projects");
    if (collaboratorsTitle) collaboratorsTitle.textContent = toText(labels.collaboratorsTitle, "Other Trillionaires");
  }

  function applyProfile(profile) {
    if (!profile || typeof profile !== "object") return;
    const heroName = document.querySelector("[data-admin-target='hero-name']");
    const heroRole = document.getElementById("hero-role");
    const heroExperience = document.getElementById("hero-experience");
    const heroHeadline = document.getElementById("hero-headline");
    const heroAvatar = document.getElementById("hero-avatar");

    if (heroName) heroName.textContent = toText(profile.name, "Trillionir");
    if (heroRole) heroRole.textContent = toText(profile.role, "Full-Stack + Agentic AI Engineer");
    if (heroExperience) heroExperience.textContent = `Experience: ${toText(profile.experienceLevel, "intermediate")}`;
    if (heroHeadline) heroHeadline.textContent = toText(profile.headline, "");
    if (heroAvatar) heroAvatar.setAttribute("src", toText(profile.avatarUrl, DEFAULT_AVATAR));
  }

  function applySocialLinks(links) {
    const list = document.getElementById("social-links-list");
    if (!list || !Array.isArray(links)) return;
    const ordered = links
      .filter(function (item) {
        return item && item.visible !== false;
      })
      .sort(function (a, b) {
        return Number(a.order || 0) - Number(b.order || 0);
      });

    list.innerHTML = ordered
      .map(function (item) {
        const href = toSafeUrl(item.url, "mailto:hello@example.com");
        const label = toText(item.label, "Link");
        return `
          <li>
            <a href="${href}" target="_blank" rel="noreferrer noopener" class="section-card" style="display:inline-flex;padding:.4rem .8rem;border-radius:999px;">
              ${label}
            </a>
          </li>
        `;
      })
      .join("");
  }

  function applyProjects(projects) {
    const list = document.getElementById("projects-list");
    if (!list || !Array.isArray(projects)) return;
    const ordered = projects.slice().sort(function (a, b) {
      return Number(a.order || 0) - Number(b.order || 0);
    });
    list.innerHTML = ordered
      .map(function (project) {
        const name = toText(project.name, "Untitled Project");
        const summary = toText(project.summary, "");
        const href = toSafeUrl(project.url, "https://example.com");
        const highlight = project.isAgenticAIHighlight
          ? '<p style="margin:.2rem 0 .7rem;"><span style="display:inline-block;background:rgba(34,211,238,.2);color:var(--accent);padding:.2rem .55rem;border-radius:999px;font-size:.85rem;">Agentic AI Highlight</span></p>'
          : "";
        return `
          <article class="section-card project-card" role="listitem" aria-label="Project ${name}">
            <h3 style="margin-top:0;">${name}</h3>
            <p style="color:var(--muted);">${summary}</p>
            ${highlight}
            <a href="${href}" target="_blank" rel="noreferrer noopener">Open project</a>
          </article>
        `;
      })
      .join("");

    if (typeof window.initializeProjectsPager === "function") {
      window.initializeProjectsPager();
    }
  }

  function applyCollaborators(collaborators) {
    const list = document.getElementById("collaborators-list");
    if (!list || !Array.isArray(collaborators)) return;
    const ordered = collaborators.slice().sort(function (a, b) {
      return Number(a.order || 0) - Number(b.order || 0);
    });
    list.innerHTML = ordered
      .map(function (collaborator) {
        const name = toText(collaborator.name, "Unknown");
        const href = toSafeUrl(collaborator.url, "https://example.com");
        const avatar = toText(collaborator.avatarUrl, DEFAULT_AVATAR);
        const placeholder = collaborator.isPlaceholder
          ? '<p style="margin:0;color:var(--muted);">Profile details coming soon</p>'
          : "";
        return `
          <article class="section-card" aria-label="Collaborator ${name}">
            <div style="display:flex;gap:.75rem;align-items:center;">
              <img src="${avatar}" alt="${name} avatar" width="56" height="56" style="border-radius:50%;object-fit:cover;background:#0f172a;" />
              <div>
                <h3 style="margin:.1rem 0;">${name}</h3>
                ${placeholder}
              </div>
            </div>
            <p style="margin:.7rem 0 0;">
              <a href="${href}" target="_blank" rel="noreferrer noopener">Open profile</a>
            </p>
          </article>
        `;
      })
      .join("");
  }

  function applyConfig(config) {
    if (!config || typeof config !== "object") return;
    applyLabels(config.labels);
    applyProfile(config.profile);
    applySocialLinks(config.socialLinks);
    applyProjects(config.projects);
    applyCollaborators(config.collaborators);
  }

  async function resolveConfig() {
    try {
      const remote = await getRemoteConfig();
      if (remote) {
        const normalizedRemote = normalizeConfig(remote);
        saveLocalConfig(normalizedRemote);
        return normalizedRemote;
      }
    } catch (error) {
      console.error("Remote config load failed:", error);
    }

    const local = getStoredConfig();
    if (local) return normalizeConfig(local);
    return normalizeConfig(readDefaultConfig());
  }

  async function saveConfig(config) {
    const normalized = normalizeConfig(config);
    saveLocalConfig(normalized);
    await saveRemoteConfig(normalized);
  }

  async function resetConfig() {
    const defaults = readDefaultConfig();
    window.localStorage.removeItem(STORAGE_KEY);
    if (defaults) {
      saveLocalConfig(defaults);
      await saveRemoteConfig(defaults);
    }
    return defaults;
  }

  window.AdminRuntime = {
    STORAGE_KEY,
    getConfig: resolveConfig,
    saveConfig,
    resetConfig,
    applyConfig,
    readDefaultConfig
  };

  window.addEventListener("DOMContentLoaded", async function () {
    const config = await resolveConfig();
    applyConfig(config);
  });
})();
