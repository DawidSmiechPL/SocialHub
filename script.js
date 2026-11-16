(() => {
  "use strict";
  const data = window.socialHubConfig || {};
  const name = typeof data.name === "string" && data.name.trim() ? data.name.trim() : "SocialHub";
  const description = typeof data.description === "string" ? data.description : "";
  document.getElementById("profile-name").textContent = name;
  document.getElementById("profile-description").textContent = description;
  document.title = name + " — SocialHub";

  const avatar = document.getElementById("avatar");
  const initials = name.split(/\s+/u).slice(0, 2).map(part => part[0] || "").join("").toLocaleUpperCase("pl");
  avatar.textContent = initials || "SH";
  if (typeof data.avatarUrl === "string" && data.avatarUrl.trim()) {
    try {
      const url = new URL(data.avatarUrl);
      if (url.protocol === "https:") {
        const img = document.createElement("img");
        img.src = url.href;
        img.alt = "";
        img.onerror = () => img.remove();
        avatar.appendChild(img);
      }
    } catch (_) { /* Niepoprawny URL avatara — pozostają inicjały. */ }
  }

  const list = document.getElementById("links");
  for (const item of Array.isArray(data.links) ? data.links : []) {
    if (!item || typeof item.label !== "string" || typeof item.url !== "string" || !item.label.trim()) continue;
    const target = item.url.trim();
    let allowed = false;
    try {
      const url = new URL(target);
      allowed = ["https:", "http:", "mailto:"].includes(url.protocol);
    } catch (_) { /* Pomiń błędny URL. */ }
    if (!allowed) continue;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = target;
    a.textContent = item.label.trim();
    if (/^https?:/i.test(target)) a.rel = "noopener noreferrer";
    li.appendChild(a);
    list.appendChild(li);
  }
})();
