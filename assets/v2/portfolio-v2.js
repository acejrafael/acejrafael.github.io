(() => {
  const root = document.documentElement;
  const assetBase = root.dataset.assetBase || "assets/v2/";
  const caseBase = root.dataset.caseBase || "case-studies/";

  const clientData = [
    ["01 - Bike to the Beach", "Bike to the Beach", "bike-to-the-beach.png", "Nonprofit / Events", "OSBL / Événements"],
    ["02 - Black Greeks", "Black Greeks", "black-greeks.png", "Community / Culture", "Communauté / Culture"],
    ["03 - The Black Wall Street", "The Black Wall Street", "black-wall-street.png", "Commerce / Community", "Commerce / Communauté"],
    ["04 - Creative Control Systems", "Creative Control Systems", "creative-control-systems.jpg", "B2B / Systems", "B2B / Systèmes"],
    ["05 - Digital Delane", "Digital Delane", "digital-delane.jpg", "Internal Agency", "Agence interne"],
    ["06 - Dime Bags", "Dime Bags", "dime-bags.jpg", "Consumer Brand", "Marque grand public"],
    ["07 - Ding Tea", "Ding Tea", "ding-tea.png", "Food / Franchise", "Restauration / Franchise"],
    ["08 - Festival Noire", "Festival Noire", "", "Internal Brand", "Marque interne"],
    ["09 - Find Your Crew", "Find Your Crew", "find-your-crew.webp", "App / Community", "Application / Communauté"],
    ["10 - Functn", "Functn", "functn.png", "Internal Product", "Produit interne"],
    ["11 - Game Network", "Game Network", "game-network.png", "Entertainment / App", "Divertissement / Application"],
    ["12 - HUPNC Center", "HUPNC Center", "", "Healthcare / Community", "Santé / Communauté"],
    ["13 - Jazz Hands for Autism", "Jazz Hands for Autism", "jazz-hands-for-autism.png", "Nonprofit / Arts", "OSBL / Arts"],
    ["14 - Juntae Delane", "Juntae Delane", "juntae-delane.jpg", "Personal Brand", "Marque personnelle"],
    ["15 - Los Angeles Jaw Surgery", "Los Angeles Jaw Surgery", "los-angeles-jaw-surgery.png", "Healthcare", "Santé"],
    ["16 - Lamar Lyons", "Lamar Lyons", "", "Personal Brand", "Marque personnelle"],
    ["17 - Law School Expert", "Law School Expert", "law-school-expert.png", "Education / Advisory", "Éducation / Conseil"],
    ["18 - Live Younger", "Live Younger", "live-younger.png", "Wellness", "Bien-être"],
    ["19 - National Recovery Associations (NRA)", "National Recovery Associations", "", "Recovery / Services", "Recouvrement / Services"],
    ["20 - Ostreon Inheritance", "Ostreon Inheritance", "ostreon-inheritance.png", "Technology", "Technologie"],
    ["21 - Prometheus", "Prometheus", "", "Technology", "Technologie"],
    ["22 - Ready to Publish Translations", "Ready to Publish Translations", "ready-to-publish-translations.jpg", "Translation", "Traduction"],
    ["23 - Sereen Hair", "Sereen Hair", "sereen-hair.png", "Beauty / Ecommerce", "Beauté / Ecommerce"],
    ["24 - Science on the Court (SOTC)", "Science on the Court", "science-on-the-court.png", "Education / Sports", "Éducation / Sport"],
    ["25 - SynthMinds (Practical AI)", "SynthMinds", "synthminds.png", "AI / Product", "IA / Produit"],
    ["26 - The Other Side Therapy", "The Other Side Therapy", "the-other-side-therapy.png", "Healthcare", "Santé"],
    ["27 - University of La Verne", "University of La Verne", "", "Higher Education", "Enseignement supérieur"],
    ["28 - Upsurge CRM", "Upsurge CRM", "upsurge-crm.png", "Internal Tool", "Outil interne"],
    ["29 - Vidality", "Vidality", "", "Health Tech / CRM", "Health tech / CRM"],
    ["30 - WOW Media Networks", "WOW Media Networks", "wow-media-networks.ico", "Media", "Média"]
  ].map(([folder, name, logo, en, fr]) => ({ folder, name, logo, en, fr }));

  const downloadPacks = [
    ["Core Client Template Kit", "Kit principal de modèles client", 9, "Discovery, kickoff, proposal, budget, reporting, and operations.", "Découverte, lancement, proposition, budget, reporting et opérations.", "Jax-Portfolio-Core-Client-Template-Kit-EN.zip", "Portfolio-Jax-Kit-Principal-FR.zip"],
    ["Project Management", "Gestion de projet", 10, "Charters, Gantt planning, risk, stakeholders, backlog, and status reporting.", "Chartes, Gantt, risques, parties prenantes, backlog et rapports de statut.", "Jax-Portfolio-Project-Management-EN.zip", "Portfolio-Jax-Gestion-De-Projet-FR.zip"],
    ["Marketing CRM and Campaigns", "Marketing CRM et campagnes", 10, "Marketing plans, personas, paid media, social calendars, and CRM lifecycle.", "Plans marketing, personas, médias payants, calendriers sociaux et cycle CRM.", "Jax-Portfolio-Marketing-CRM-Campaigns-EN.zip", "Portfolio-Jax-Marketing-CRM-Campagnes-FR.zip"],
    ["Analytics Reporting and Audits", "Analytique, rapports et audits", 9, "Campaign tagging, A/B testing, KPI planning, ROI reviews, and SEO actions.", "Balisage de campagnes, tests A/B, KPI, ROI et actions SEO.", "Jax-Portfolio-Analytics-Reporting-Audits-EN.zip", "Portfolio-Jax-Analytique-Rapports-Audits-FR.zip"],
    ["Sales and Client Communication", "Propositions et communication client", 9, "Outreach, proposals, review requests, sponsorship, and client brief structure.", "Prospection, propositions, demandes d'avis, commandites et briefs client.", "Jax-Portfolio-Sales-Client-Communication-EN.zip", "Portfolio-Jax-Propositions-Communication-FR.zip"],
    ["Strategy Operations and Finance", "Stratégie, opérations et finance", 10, "Business plans, roadmaps, requirements, budgets, SWOT, and SOPs.", "Plans d'affaires, roadmaps, exigences, budgets, SWOT et SOP.", "Jax-Portfolio-Strategy-Operations-Finance-EN.zip", "Portfolio-Jax-Strategie-Operations-Finance-FR.zip"],
    ["AI Automation and Workflow Systems", "IA, automatisation et flux de travail", 6, "CRM reactivation, workflow maps, prompt processes, and AI delivery planning.", "Réactivation CRM, cartes de flux, processus de prompts et planification IA.", "Jax-Portfolio-AI-Automation-Workflows-EN.zip", "Portfolio-Jax-IA-Automatisation-Flux-FR.zip"]
  ].map(([en, fr, count, valueEn, valueFr, zipEn, zipFr]) => ({ en, fr, count, valueEn, valueFr, zipEn, zipFr }));

  const gameMessages = {
    en: ["Scope creep avoided.", "Stakeholder aligned.", "Inbox under control.", "Automation shipped.", "Risk logged early.", "Demo booked."],
    fr: ["Périmètre protégé.", "Parties prenantes alignées.", "Boîte de réception maîtrisée.", "Automatisation livrée.", "Risque noté à temps.", "Démo planifiée."]
  };

  function initials(name) {
    return name.replace(/\([^)]*\)/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  }

  function slugifyFolder(folder) {
    return folder
      .toLowerCase()
      .replace(/^\d+\s*-\s*/, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function caseHref(folder) {
    return `${caseBase}${slugifyFolder(folder)}/`;
  }

  function setTextLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-en]").forEach((node) => {
      node.textContent = node.dataset[lang] || node.dataset.en;
    });
    document.querySelectorAll("[data-label-en]").forEach((node) => {
      node.setAttribute("aria-label", node.dataset[`label${lang === "fr" ? "Fr" : "En"}`] || node.dataset.labelEn);
    });
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
        card.innerHTML = `
          <p class="kicker">${lang === "fr" ? "Package" : "Package"}</p>
          <h3>${title}</h3>
          <p>${value}</p>
          <div class="meta"><span>${pack.count} ${lang === "fr" ? "fichiers" : "files"}</span><span>ZIP</span></div>
          <a class="button secondary" href="${assetBase}downloads/${zip}" download>${lang === "fr" ? "Télécharger" : "Download"}</a>
        `;
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
        card.href = caseHref(client.folder);
        const category = lang === "fr" ? client.fr : client.en;
        const visual = client.logo
          ? `<img src="${assetBase}client-logos/${client.logo}" alt="${client.name} logo">`
          : `<span class="initials">${initials(client.name)}</span>`;
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.16 });
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
  }

  function initParallax() {
    const layers = document.querySelectorAll("[data-parallax]");
    if (!layers.length) return;
    const update = () => {
      const y = window.scrollY || 0;
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallax || 0.12);
        layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    update();
    window.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  }

  function initFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    const chips = document.querySelectorAll(".proof-chip");
    if (!buttons.length || !chips.length) return;
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        const filter = button.dataset.filter;
        chips.forEach((chip) => {
          chip.hidden = filter !== "all" && chip.dataset.group !== filter;
        });
      });
    });
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
    let accumulator = 0;
    const state = {
      mode: "idle",
      snake: [],
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      reward: { x: 13, y: 9 },
      score: 0,
      high: Number(sessionStorage.getItem("jaxPortfolioHighScore") || 0),
      message: ""
    };

    function reset() {
      state.mode = "running";
      state.snake = [{ x: 6, y: 9 }, { x: 5, y: 9 }, { x: 4, y: 9 }];
      state.dir = { x: 1, y: 0 };
      state.nextDir = { x: 1, y: 0 };
      state.score = 0;
      state.message = lang === "fr" ? "Ramassez les preuves sans toucher les murs." : "Collect proof without hitting the walls.";
      placeReward();
      draw();
      renderStats();
    }

    function placeReward() {
      let reward;
      do {
        reward = { x: Math.floor(Math.random() * cells), y: Math.floor(Math.random() * cells) };
      } while (state.snake.some((part) => part.x === reward.x && part.y === reward.y));
      state.reward = reward;
    }

    function setDirection(x, y) {
      if (state.dir.x + x === 0 && state.dir.y + y === 0) return;
      state.nextDir = { x, y };
    }

    function update(dt) {
      if (state.mode !== "running") return;
      accumulator += dt;
      if (accumulator < .115) return;
      accumulator = 0;
      state.dir = state.nextDir;
      const head = state.snake[0];
      const next = { x: head.x + state.dir.x, y: head.y + state.dir.y };
      const hitWall = next.x < 0 || next.x >= cells || next.y < 0 || next.y >= cells;
      const hitSelf = state.snake.some((part) => part.x === next.x && part.y === next.y);
      if (hitWall || hitSelf) {
        state.mode = "over";
        state.message = lang === "fr" ? "Projet bloqué. Relancez la partie." : "Project blocked. Start again.";
        renderStats();
        draw();
        return;
      }
      state.snake.unshift(next);
      if (next.x === state.reward.x && next.y === state.reward.y) {
        state.score += 1;
        if (state.score > state.high) {
          state.high = state.score;
          sessionStorage.setItem("jaxPortfolioHighScore", String(state.high));
        }
        const messages = gameMessages[lang] || gameMessages.en;
        state.message = messages[state.score % messages.length];
        placeReward();
      } else {
        state.snake.pop();
      }
      renderStats();
      draw();
    }

    function renderStats() {
      scoreNode.textContent = String(state.score);
      highNode.textContent = String(state.high);
      messageNode.textContent = state.message;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--paper-2") || "#fffaf0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(32,35,31,.08)";
      for (let i = 0; i <= cells; i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * size, 0);
        ctx.lineTo(i * size, canvas.height);
        ctx.moveTo(0, i * size);
        ctx.lineTo(canvas.width, i * size);
        ctx.stroke();
      }
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--accent-2") || "#f0b14a";
      ctx.beginPath();
      ctx.roundRect(state.reward.x * size + 5, state.reward.y * size + 5, size - 10, size - 10, 6);
      ctx.fill();
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--ink") || "#20231f";
      state.snake.forEach((part, index) => {
        ctx.globalAlpha = index === 0 ? 1 : .78;
        ctx.beginPath();
        ctx.roundRect(part.x * size + 3, part.y * size + 3, size - 6, size - 6, 7);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      if (state.mode === "idle") {
        ctx.fillStyle = "rgba(32,35,31,.72)";
        ctx.font = "14px system-ui";
        ctx.textAlign = "center";
        ctx.fillText(lang === "fr" ? "Cliquez sur démarrer" : "Click start", canvas.width / 2, canvas.height / 2);
      }
    }

    startButton.addEventListener("click", reset);
    window.addEventListener("keydown", (event) => {
      const keys = {
        ArrowUp: [0, -1], w: [0, -1], W: [0, -1],
        ArrowDown: [0, 1], s: [0, 1], S: [0, 1],
        ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0],
        ArrowRight: [1, 0], d: [1, 0], D: [1, 0]
      };
      if (keys[event.key]) {
        event.preventDefault();
        setDirection(...keys[event.key]);
      }
      if (event.key === "f" && document.fullscreenEnabled) {
        if (document.fullscreenElement) document.exitFullscreen();
        else game.requestFullscreen().catch(() => {});
      }
    });
    document.addEventListener("portfolio-language", (event) => {
      lang = event.detail.lang;
      if (state.mode === "idle") state.message = "";
      renderStats();
      draw();
    });
    function frame(timestamp) {
      if (!frame.last) frame.last = timestamp;
      const dt = Math.min(.25, (timestamp - frame.last) / 1000);
      frame.last = timestamp;
      update(dt);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
    window.advanceTime = (ms) => {
      const steps = Math.max(1, Math.round(ms / (1000 / 60)));
      for (let i = 0; i < steps; i += 1) update(1 / 60);
      draw();
    };
    window.render_game_to_text = () => JSON.stringify({
      coordinateSystem: "grid origin top-left; x increases right; y increases down",
      mode: state.mode,
      score: state.score,
      high: state.high,
      head: state.snake[0] || null,
      reward: state.reward,
      direction: state.dir,
      message: state.message
    });
    draw();
    renderStats();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function roundRect(x, y, w, h, r) {
        const radius = Math.min(r, w / 2, h / 2);
        this.moveTo(x + radius, y);
        this.arcTo(x + w, y, x + w, y + h, radius);
        this.arcTo(x + w, y + h, x, y + h, radius);
        this.arcTo(x, y + h, x, y, radius);
        this.arcTo(x, y, x + w, y, radius);
      };
    }
    initLanguage();
    initReveal();
    initParallax();
    initFilters();
    initGame();
  });
})();
