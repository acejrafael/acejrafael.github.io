(() => {
  const root = document.documentElement;
  const assetBase = root.dataset.assetBase || "assets/v2/";
  const caseBase = root.dataset.caseBase || "case-studies/";
  const clientData = [
    { folder: "01 - Bike to the Beach", name: "Bike to the Beach", logo: "bike-to-the-beach.png", en: "Nonprofit / Events", fr: "OSBL / Evenements" },
    { folder: "02 - Black Greeks", name: "Black Greeks", logo: "black-greeks.png", en: "Community / Culture", fr: "Communaute / Culture" },
    { folder: "03 - The Black Wall Street", name: "The Black Wall Street", logo: "black-wall-street.png", en: "Commerce / Community", fr: "Commerce / Communaute" },
    { folder: "04 - Creative Control Systems", name: "Creative Control Systems", logo: "creative-control-systems.jpg", en: "B2B / Systems", fr: "B2B / Systemes" },
    { folder: "05 - Digital Delane", name: "Digital Delane", logo: "digital-delane.jpg", en: "Internal Agency", fr: "Agence interne" },
    { folder: "06 - Dime Bags", name: "Dime Bags", logo: "dime-bags.jpg", en: "Consumer Brand", fr: "Marque grand public" },
    { folder: "07 - Ding Tea", name: "Ding Tea", logo: "ding-tea.png", en: "Food / Franchise", fr: "Restauration / Franchise" },
    { folder: "08 - Festival Noire", name: "Festival Noire", logo: "", en: "Internal Brand", fr: "Marque interne" },
    { folder: "09 - Find Your Crew", name: "Find Your Crew", logo: "find-your-crew.webp", en: "App / Community", fr: "Application / Communaute" },
    { folder: "10 - Functn", name: "Functn", logo: "functn.png", en: "Internal Product", fr: "Produit interne" },
    { folder: "11 - Game Network", name: "Game Network", logo: "game-network.png", en: "Entertainment / App", fr: "Divertissement / Application" },
    { folder: "12 - HUPNC Center", name: "HUPNC Center", logo: "", en: "Healthcare / Community", fr: "Sante / Communaute" },
    { folder: "13 - Jazz Hands for Autism", name: "Jazz Hands for Autism", logo: "jazz-hands-for-autism.png", en: "Nonprofit / Arts", fr: "OSBL / Arts" },
    { folder: "14 - Juntae Delane", name: "Juntae Delane", logo: "juntae-delane.jpg", en: "Personal Brand", fr: "Marque personnelle" },
    { folder: "15 - Los Angeles Jaw Surgery", name: "Los Angeles Jaw Surgery", logo: "los-angeles-jaw-surgery.png", en: "Healthcare", fr: "Sante" },
    { folder: "16 - Lamar Lyons", name: "Lamar Lyons", logo: "", en: "Personal Brand", fr: "Marque personnelle" },
    { folder: "17 - Law School Expert", name: "Law School Expert", logo: "law-school-expert.png", en: "Education / Advisory", fr: "Education / Conseil" },
    { folder: "18 - Live Younger", name: "Live Younger", logo: "live-younger.png", en: "Wellness", fr: "Bien-etre" },
    { folder: "19 - National Recovery Associations (NRA)", name: "National Recovery Associations", logo: "", en: "Recovery / Services", fr: "Recouvrement / Services" },
    { folder: "20 - Ostreon Inheritance", name: "Ostreon Inheritance", logo: "ostreon-inheritance.png", en: "Technology", fr: "Technologie" },
    { folder: "21 - Prometheus", name: "Prometheus", logo: "", en: "Technology", fr: "Technologie" },
    { folder: "22 - Ready to Publish Translations", name: "Ready to Publish Translations", logo: "ready-to-publish-translations.jpg", en: "Translation", fr: "Traduction" },
    { folder: "23 - Sereen Hair", name: "Sereen Hair", logo: "sereen-hair.png", en: "Beauty / Ecommerce", fr: "Beaute / Ecommerce" },
    { folder: "24 - Science on the Court (SOTC)", name: "Science on the Court", logo: "science-on-the-court.png", en: "Education / Sports", fr: "Education / Sport" },
    { folder: "25 - SynthMinds (Practical AI)", name: "SynthMinds", logo: "synthminds.png", en: "AI / Product", fr: "IA / Produit" },
    { folder: "26 - The Other Side Therapy", name: "The Other Side Therapy", logo: "the-other-side-therapy.png", en: "Healthcare", fr: "Sante" },
    { folder: "27 - University of La Verne", name: "University of La Verne", logo: "", en: "Higher Education", fr: "Enseignement superieur" },
    { folder: "28 - Upsurge CRM", name: "Upsurge CRM", logo: "upsurge-crm.png", en: "Internal Tool", fr: "Outil interne" },
    { folder: "29 - Vidality", name: "Vidality", logo: "", en: "Health Tech / CRM", fr: "Health tech / CRM" },
    { folder: "30 - WOW Media Networks", name: "WOW Media Networks", logo: "wow-media-networks.ico", en: "Media", fr: "Media" }
  ];
  const downloadPacks = [
    { en: "Core Client Template Kit", fr: "Kit principal de modeles client", count: 9, valueEn: "Discovery, kickoff, proposal, budget, reporting, and operations.", valueFr: "Decouverte, lancement, proposition, budget, reporting et operations.", zipEn: "Jax-Portfolio-Core-Client-Template-Kit-EN.zip", zipFr: "Portfolio-Jax-Kit-Principal-FR.zip" },
    { en: "Project Management", fr: "Gestion de projet", count: 10, valueEn: "Charters, Gantt planning, risk, stakeholders, backlog, and status reporting.", valueFr: "Chartes, Gantt, risques, parties prenantes, backlog et rapports de statut.", zipEn: "Jax-Portfolio-Project-Management-EN.zip", zipFr: "Portfolio-Jax-Gestion-De-Projet-FR.zip" },
    { en: "Marketing CRM and Campaigns", fr: "Marketing CRM et campagnes", count: 10, valueEn: "Marketing plans, personas, paid media, social calendars, and CRM lifecycle.", valueFr: "Plans marketing, personas, medias payants, calendriers sociaux et cycle CRM.", zipEn: "Jax-Portfolio-Marketing-CRM-Campaigns-EN.zip", zipFr: "Portfolio-Jax-Marketing-CRM-Campagnes-FR.zip" },
    { en: "Analytics Reporting and Audits", fr: "Analytique, rapports et audits", count: 9, valueEn: "Campaign tagging, A/B testing, KPI planning, ROI reviews, and SEO actions.", valueFr: "Balisage de campagnes, tests A/B, KPI, ROI et actions SEO.", zipEn: "Jax-Portfolio-Analytics-Reporting-Audits-EN.zip", zipFr: "Portfolio-Jax-Analytique-Rapports-Audits-FR.zip" },
    { en: "Sales and Client Communication", fr: "Propositions et communication client", count: 9, valueEn: "Outreach, proposals, review requests, sponsorship, and client brief structure.", valueFr: "Prospection, propositions, demandes d avis, commandites et briefs client.", zipEn: "Jax-Portfolio-Sales-Client-Communication-EN.zip", zipFr: "Portfolio-Jax-Propositions-Communication-FR.zip" },
    { en: "Strategy Operations and Finance", fr: "Strategie, operations et finance", count: 10, valueEn: "Business plans, roadmaps, requirements, budgets, SWOT, and SOPs.", valueFr: "Plans d affaires, roadmaps, exigences, budgets, SWOT et SOP.", zipEn: "Jax-Portfolio-Strategy-Operations-Finance-EN.zip", zipFr: "Portfolio-Jax-Strategie-Operations-Finance-FR.zip" },
    { en: "AI Automation and Workflow Systems", fr: "IA, automatisation et flux de travail", count: 6, valueEn: "CRM reactivation, workflow maps, prompt processes, and AI delivery planning.", valueFr: "Reactivation CRM, cartes de flux, processus de prompts et planification IA.", zipEn: "Jax-Portfolio-AI-Automation-Workflows-EN.zip", zipFr: "Portfolio-Jax-IA-Automatisation-Flux-FR.zip" }
  ];
  const gameMessages = {
    en: ["Scope creep avoided.", "Stakeholder aligned.", "Inbox under control.", "Automation shipped.", "Risk logged early.", "Demo booked."],
    fr: ["Perimetre protege.", "Parties prenantes alignees.", "Reception maitrisee.", "Automatisation livree.", "Risque note a temps.", "Demo planifiee."]
  };
  function slugifyFolder(folder) {
    return folder.toLowerCase().replace(/^\d+\s*-\s*/, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  function initials(name) {
    return name.replace(/\([^)]*\)/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  }
  function setTextLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-en]").forEach((node) => { node.textContent = node.dataset[lang] || node.dataset.en; });
    document.querySelectorAll(".language-toggle button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === lang);
      button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
    });
    renderDownloads(lang);
    renderClientLogos(lang);
    document.dispatchEvent(new CustomEvent("portfolio-language", { detail: { lang } }));
  }
  function renderDownloads(lang) {
    document.querySelectorAll("[data-downloads]").forEach((container) => {
      container.innerHTML = "";
      downloadPacks.forEach((pack) => {
        const title = lang === "fr" ? pack.fr : pack.en;
        const value = lang === "fr" ? pack.valueFr : pack.valueEn;
        const zip = lang === "fr" ? pack.zipFr : pack.zipEn;
        const card = document.createElement("article");
        card.className = "download-card reveal is-visible";
        card.innerHTML = `<p class="kicker">${lang === "fr" ? "Package" : "Package"}</p><h3>${title}</h3><p>${value}</p><div class="meta"><span>${pack.count} ${lang === "fr" ? "fichiers" : "files"}</span><span>ZIP</span></div><a class="button secondary" href="${assetBase}downloads/${zip}" download>${lang === "fr" ? "Telecharger" : "Download"}</a>`;
        container.appendChild(card);
      });
    });
  }
  function renderClientLogos(lang) {
    document.querySelectorAll("[data-client-logos]").forEach((container) => {
      container.innerHTML = "";
      clientData.forEach((client) => {
        const card = document.createElement("a");
        card.className = "logo-card reveal is-visible";
        card.href = `${caseBase}${slugifyFolder(client.folder)}/`;
        const category = lang === "fr" ? client.fr : client.en;
        const visual = client.logo ? `<img src="${assetBase}client-logos/${client.logo}" alt="${client.name} logo">` : `<span class="initials">${initials(client.name)}</span>`;
        card.innerHTML = `${visual}<span>${client.name}<br>${category}</span>`;
        container.appendChild(card);
      });
    });
  }
  function initLanguage() {
    const saved = localStorage.getItem("jaxPortfolioLang") || "en";
    document.querySelectorAll(".language-toggle button").forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.setItem("jaxPortfolioLang", button.dataset.lang);
        setTextLanguage(button.dataset.lang);
      });
    });
    setTextLanguage(saved === "fr" ? "fr" : "en");
  }
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }
  function initParallax() {
    const layers = document.querySelectorAll("[data-parallax]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!layers.length || reduce) return;
    const update = () => {
      const y = window.scrollY || 0;
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallax || 0.08);
        layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    update();
    window.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  }
  function initGame() {
    const game = document.querySelector("[data-game]");
    if (!game) return;
    const canvas = game.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const startButton = game.querySelector("[data-game-start]");
    const scoreNode = game.querySelector("[data-game-score]");
    const highNode = game.querySelector("[data-game-high]");
    const messageNode = game.querySelector("[data-game-message]");
    const cells = 18;
    const size = canvas.width / cells;
    let lang = localStorage.getItem("jaxPortfolioLang") || "en";
    const state = { mode: "idle", snake: [], dir: { x: 1, y: 0 }, nextDir: { x: 1, y: 0 }, reward: { x: 13, y: 9 }, score: 0, high: Number(sessionStorage.getItem("jaxPortfolioHighScore") || 0), last: 0 };
    function placeReward() {
      let reward;
      do { reward = { x: Math.floor(Math.random() * cells), y: Math.floor(Math.random() * cells) }; } while (state.snake.some((part) => part.x === reward.x && part.y === reward.y));
      state.reward = reward;
    }
    function draw() {
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--game-bg").trim() || "#111";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#14b8a6";
      ctx.fillRect(state.reward.x * size + 3, state.reward.y * size + 3, size - 6, size - 6);
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--accent-2").trim() || "#f59e0b";
      state.snake.forEach((part, i) => { ctx.globalAlpha = i ? 0.78 : 1; ctx.fillRect(part.x * size + 2, part.y * size + 2, size - 4, size - 4); });
      ctx.globalAlpha = 1;
    }
    function renderStats(message) {
      scoreNode.textContent = state.score;
      highNode.textContent = state.high;
      if (message) messageNode.textContent = message;
    }
    function reset() {
      state.mode = "running"; state.snake = [{ x: 6, y: 9 }, { x: 5, y: 9 }, { x: 4, y: 9 }]; state.dir = { x: 1, y: 0 }; state.nextDir = { x: 1, y: 0 }; state.score = 0; state.last = performance.now(); placeReward(); draw(); renderStats(lang === "fr" ? "Collectez les preuves sans toucher les murs." : "Collect proof without hitting the walls.");
    }
    function step(now) {
      if (state.mode !== "running") return;
      if (now - state.last < 115) { requestAnimationFrame(step); return; }
      state.last = now; state.dir = state.nextDir;
      const head = { x: state.snake[0].x + state.dir.x, y: state.snake[0].y + state.dir.y };
      const hit = head.x < 0 || head.x >= cells || head.y < 0 || head.y >= cells || state.snake.some((part) => part.x === head.x && part.y === head.y);
      if (hit) { state.mode = "idle"; renderStats(lang === "fr" ? "Blocage rencontre. Relancez la livraison." : "Blocker hit. Restart delivery."); draw(); return; }
      state.snake.unshift(head);
      if (head.x === state.reward.x && head.y === state.reward.y) {
        state.score += 1; state.high = Math.max(state.high, state.score); sessionStorage.setItem("jaxPortfolioHighScore", String(state.high));
        const messages = gameMessages[lang] || gameMessages.en;
        renderStats(messages[state.score % messages.length]); placeReward();
      } else { state.snake.pop(); renderStats(); }
      draw(); requestAnimationFrame(step);
    }
    function setDir(x, y) { if (state.dir.x + x === 0 && state.dir.y + y === 0) return; state.nextDir = { x, y }; }
    document.addEventListener("keydown", (event) => {
      if (["ArrowUp", "w", "W"].includes(event.key)) setDir(0, -1);
      if (["ArrowDown", "s", "S"].includes(event.key)) setDir(0, 1);
      if (["ArrowLeft", "a", "A"].includes(event.key)) setDir(-1, 0);
      if (["ArrowRight", "d", "D"].includes(event.key)) setDir(1, 0);
      if (event.key === "f" || event.key === "F") canvas.requestFullscreen?.();
    });
    startButton.addEventListener("click", () => { reset(); requestAnimationFrame(step); });
    document.addEventListener("portfolio-language", (event) => { lang = event.detail.lang; });
    reset(); state.mode = "idle";
  }
  initLanguage();
  initReveal();
  initParallax();
  initGame();
})();
