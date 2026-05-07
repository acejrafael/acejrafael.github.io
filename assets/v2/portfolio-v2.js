(() => {
  const LINKEDIN_URL = "https://www.linkedin.com/in/jacques-wainright/";
  const LANGUAGES = ["en", "fr", "es"];
  const masterResumeFiles = {
    en: "jacques-wainright-master-resume-en.pdf",
    fr: "jacques-wainright-master-resume-fr.pdf",
    es: "jacques-wainright-master-resume-en.pdf"
  };
  const themeLabels = {
    dark: {
      en: "Switch to light mode",
      fr: "Passer au mode clair",
      es: "Cambiar a modo claro"
    },
    light: {
      en: "Switch to dark mode",
      fr: "Passer au mode sombre",
      es: "Cambiar a modo oscuro"
    }
  };

  const proofItems = [
    {
      name: "Digital Delane",
      logo: "digital-delane.jpg",
      icon: "briefcase",
      en: "Project Manager and Digital Brand Coordinator",
      fr: "Chef de projet et coordinateur de marque numerique",
      es: "Gerente de proyectos y coordinador de marca digital",
      detailEn: "LA-based agency delivery across campaigns, websites, analytics, CRM automation, and AI-supported workflows.",
      detailFr: "Livraison en agence a Los Angeles pour campagnes, sites web, analytique, CRM et workflows appuyes par l IA.",
      detailEs: "Ejecucion para una agencia de Los Angeles en campanas, sitios web, analitica, automatizacion CRM y workflows con apoyo de IA."
    },
    {
      name: "360 Smart Lingo",
      logo: "360-smart-lingo.png",
      icon: "message",
      en: "Qualified Business, Legal, Medical and Court Interpreter",
      fr: "Interprete qualifie affaires, juridique, medical et tribunal",
      es: "Interprete calificado de negocios, legal, medico y corte",
      detailEn: "Live English and Haitian Creole interpretation for courts, hospitals, agencies, and corporate settings.",
      detailFr: "Interpretation en direct anglais et creole haitien pour tribunaux, hopitaux, agences et contextes d affaires.",
      detailEs: "Interpretacion en vivo en ingles y creole haitiano para cortes, hospitales, agencias y entornos corporativos."
    },
    {
      name: "Upwork",
      logo: "upwork.svg",
      icon: "briefcase",
      en: "Management Consultant - Freelance",
      fr: "Consultant en gestion - freelance",
      es: "Consultor de gestion - freelance",
      detailEn: "Remote consulting, website builds, business documents, social media support, and digital procurement.",
      detailFr: "Consultation a distance, creation de sites, documents d affaires, soutien social media et approvisionnement numerique.",
      detailEs: "Consultoria remota, creacion de sitios web, documentos de negocio, apoyo en redes sociales y compras digitales."
    },
    {
      name: "Industries San Miguel d Haiti (ISM)",
      logo: "industries-san-miguel-ism.png",
      icon: "chart",
      en: "Marketing and Sales Coordinator",
      fr: "Coordinateur marketing et ventes",
      es: "Coordinador de marketing y ventas",
      detailEn: "Field marketing, sales support, events, promotional materials, SWOT, and Five Forces analysis.",
      detailFr: "Marketing terrain, soutien ventes, evenements, supports promotionnels, SWOT et analyse des cinq forces.",
      detailEs: "Marketing de campo, apoyo a ventas, eventos, materiales promocionales, analisis FODA y Cinco Fuerzas."
    },
    {
      name: "GRAPNA",
      logo: "grapna.png",
      icon: "briefcase",
      en: "Volunteer Marketing Advisor",
      fr: "Conseiller marketing benevole",
      es: "Asesor voluntario de marketing",
      detailEn: "Marketing support for entrepreneurs, producers, and small business owners.",
      detailFr: "Soutien marketing pour entrepreneurs, producteurs et proprietaires de petites entreprises.",
      detailEs: "Apoyo de marketing para emprendedores, productores y propietarios de pequenos negocios."
    },
    {
      name: "Toastmasters International",
      logo: "toastmasters-international.png",
      icon: "message",
      en: "Leadership and communication development",
      fr: "Developpement du leadership et de la communication",
      es: "Desarrollo de liderazgo y comunicacion",
      detailEn: "Club Breda member focused on public speaking, facilitation, and leadership practice.",
      detailFr: "Membre du Club Breda axe sur prise de parole, facilitation et pratique du leadership.",
      detailEs: "Miembro de Club Breda enfocado en hablar en publico, facilitacion y practica de liderazgo."
    },
    {
      name: "University of the People",
      initials: "UoP",
      icon: "education",
      en: "Master of Business Administration",
      fr: "Master of Business Administration",
      es: "Maestria en Administracion de Empresas",
      detailEn: "MBA, GPA 3.93, California, United States - Remote, 2019-2022.",
      detailFr: "MBA, GPA 3.93, Californie, Etats-Unis - a distance, 2019-2022.",
      detailEs: "MBA, GPA 3.93, California, Estados Unidos - remoto, 2019-2022."
    },
    {
      name: "Pontificia Universidad Catolica Madre y Maestra (PUCMM)",
      initials: "PUCMM",
      icon: "education",
      en: "Bachelor of Business Administration",
      fr: "Licence en administration des affaires",
      es: "Licenciatura en Administracion de Empresas",
      detailEn: "Magna Cum Laude, GPA 3.6, Santiago, Dominican Republic, 2012-2018.",
      detailFr: "Magna Cum Laude, GPA 3.6, Santiago, Republique dominicaine, 2012-2018.",
      detailEs: "Magna Cum Laude, GPA 3.6, Santiago, Republica Dominicana, 2012-2018."
    },
    {
      name: "Abeka Academy High School",
      initials: "AA",
      icon: "education",
      en: "High school diploma",
      fr: "Diplome d etudes secondaires",
      es: "Diploma de secundaria",
      detailEn: "Tampa, Florida. Graduated in 2011.",
      detailFr: "Tampa, Floride. Diplome obtenu en 2011.",
      detailEs: "Tampa, Florida. Graduado en 2011."
    }
  ];

  const templatePacks = [
    {
      icon: "project",
      en: "Project Management",
      fr: "Gestion de projet",
      es: "Gestion de proyectos",
      count: 10,
      valueEn: "Charters, Gantt planning, risk, stakeholders, backlog, and status reporting.",
      valueFr: "Chartes, Gantt, risques, parties prenantes, backlog et rapports de statut.",
      valueEs: "Actas, planificacion Gantt, riesgos, partes interesadas, backlog y reportes de estado.",
      zipEn: "Jax-Portfolio-Project-Management-EN.zip",
      zipFr: "Portfolio-Jax-Gestion-De-Projet-FR.zip"
    },
    {
      icon: "chart",
      en: "Marketing CRM and Campaigns",
      fr: "Marketing CRM et campagnes",
      es: "Marketing CRM y campanas",
      count: 10,
      valueEn: "Marketing plans, personas, paid media, social calendars, and CRM lifecycle.",
      valueFr: "Plans marketing, personas, medias payants, calendriers sociaux et cycle CRM.",
      valueEs: "Planes de marketing, perfiles de cliente, pauta digital, calendarios sociales y ciclo CRM.",
      zipEn: "Jax-Portfolio-Marketing-CRM-Campaigns-EN.zip",
      zipFr: "Portfolio-Jax-Marketing-CRM-Campagnes-FR.zip"
    },
    {
      icon: "automation",
      en: "AI Automation and Workflow Systems",
      fr: "IA, automatisation et flux de travail",
      es: "Automatizacion con IA y sistemas de workflow",
      count: 6,
      valueEn: "CRM reactivation, workflow maps, prompt processes, and AI delivery planning.",
      valueFr: "Reactivation CRM, cartes de flux, processus de prompts et planification IA.",
      valueEs: "Reactivacion CRM, mapas de workflow, procesos de prompts y planificacion de entregas con IA.",
      zipEn: "Jax-Portfolio-AI-Automation-Workflows-EN.zip",
      zipFr: "Portfolio-Jax-IA-Automatisation-Flux-FR.zip"
    }
  ];

  const resumes = [
    {
      en: "Master Resume",
      fr: "CV maitre",
      es: "Curriculum principal",
      valueEn: "Full source-of-truth resume for broad review.",
      valueFr: "CV complet de reference pour une revue globale.",
      valueEs: "Curriculum completo de referencia para revisar el perfil general.",
      fileEn: "jacques-wainright-master-resume-en.pdf",
      fileFr: "jacques-wainright-master-resume-fr.pdf"
    }
  ];

  const resumeButtonLabels = {
    en: { enPdf: "English PDF", frPdf: "French PDF" },
    fr: { enPdf: "PDF anglais", frPdf: "PDF francais" },
    es: { enPdf: "PDF en ingles", frPdf: "PDF en frances" }
  };

  function icon(name, className = "icon") {
    return `<svg class="${className}" aria-hidden="true" focusable="false"><use href="#icon-${name}"></use></svg>`;
  }

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  }

  function localized(item, lang, key = "") {
    if (!key) return item[lang] || item.en;
    const suffix = lang[0].toUpperCase() + lang.slice(1);
    return item[`${key}${suffix}`] || item[`${key}En`];
  }

  function currentLang() {
    return LANGUAGES.includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  }

  function renderProof(lang) {
    document.querySelectorAll("[data-proof-grid]").forEach((container) => {
      container.innerHTML = "";
      proofItems.forEach((item) => {
        const card = document.createElement("article");
        card.className = "proof-card reveal is-visible";
        const visual = item.logo
          ? `<img src="assets/v2/client-logos/${item.logo}" alt="${item.name} logo">`
          : `<span class="initials">${item.initials || initials(item.name)}</span>`;
        card.innerHTML = `
          <div class="proof-visual">${visual}</div>
          <div class="proof-copy">
            <div class="proof-label">${icon(item.icon)}<span>${localized(item, lang)}</span></div>
            <h3>${item.name}</h3>
            <p>${localized(item, lang, "detail")}</p>
          </div>
        `;
        container.appendChild(card);
      });
    });
  }

  function renderTemplates(lang) {
    document.querySelectorAll("[data-template-grid]").forEach((container) => {
      container.innerHTML = "";
      templatePacks.forEach((pack) => {
        const title = localized(pack, lang);
        const value = localized(pack, lang, "value");
        const zip = lang === "fr" ? pack.zipFr : pack.zipEn;
        const card = document.createElement("article");
        card.className = "template-card reveal is-visible";
        card.innerHTML = `
          ${icon(pack.icon, "panel-icon")}
          <p class="kicker">${lang === "fr" ? "Kit recommande" : lang === "es" ? "Kit recomendado" : "Recommended kit"}</p>
          <h3>${title}</h3>
          <p>${value}</p>
          <div class="meta"><span>${pack.count} ${lang === "fr" ? "fichiers" : lang === "es" ? "archivos" : "files"}</span><span>ZIP</span></div>
          <a class="button secondary" href="assets/v2/downloads/${zip}" download>${icon("download")}<span>${lang === "fr" ? "Telecharger" : lang === "es" ? "Descargar" : "Download"}</span></a>
        `;
        container.appendChild(card);
      });
    });
  }

  function renderResumes(lang) {
    document.querySelectorAll("[data-resume-grid]").forEach((container) => {
      container.innerHTML = "";
      resumes.forEach((resume) => {
        const labels = resumeButtonLabels[lang] || resumeButtonLabels.en;
        const card = document.createElement("article");
        card.className = "resume-card reveal is-visible";
        card.innerHTML = `
          ${icon("file", "panel-icon")}
          <h3>${localized(resume, lang)}</h3>
          <p>${localized(resume, lang, "value")}</p>
          <div class="resume-actions">
            <a class="button secondary" href="assets/resumes/${resume.fileEn}" download>${icon("download")}<span>${labels.enPdf}</span></a>
            <a class="button secondary" href="assets/resumes/${resume.fileFr}" download>${icon("download")}<span>${labels.frPdf}</span></a>
          </div>
        `;
        container.appendChild(card);
      });
    });
  }

  function updateMasterResumeLinks(lang) {
    const file = masterResumeFiles[lang] || masterResumeFiles.en;
    document.querySelectorAll("[data-master-resume-link]").forEach((link) => {
      link.href = `assets/resumes/${file}`;
      link.setAttribute("download", "");
    });
  }

  function updateThemeLabel(lang = currentLang()) {
    const activeTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = activeTheme === "dark" ? "dark" : "light";
    const label = themeLabels[nextTheme][lang] || themeLabels[nextTheme].en;
    const button = document.querySelector("[data-theme-toggle]");
    const labelNode = document.querySelector("[data-theme-label]");
    if (!button) return;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    if (labelNode) labelNode.textContent = label;
  }

  function setTheme(theme) {
    const normalized = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = normalized;
    localStorage.setItem("jaxPortfolioTheme", normalized);
    updateThemeLabel();
  }

  function setTextLanguage(lang) {
    const normalized = LANGUAGES.includes(lang) ? lang : "en";
    document.documentElement.lang = normalized;
    document.querySelectorAll("[data-en]").forEach((node) => {
      node.textContent = node.dataset[normalized] || node.dataset.en;
    });
    document.querySelectorAll(".language-toggle button").forEach((button) => {
      const active = button.dataset.lang === normalized;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    updateMasterResumeLinks(normalized);
    updateThemeLabel(normalized);
    renderProof(normalized);
    renderTemplates(normalized);
    renderResumes(normalized);
  }

  function initLanguage() {
    const saved = localStorage.getItem("jaxPortfolioLang") || "en";
    document.querySelectorAll(".language-toggle button").forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.setItem("jaxPortfolioLang", button.dataset.lang);
        setTextLanguage(button.dataset.lang);
      });
    });
    setTextLanguage(LANGUAGES.includes(saved) ? saved : "en");
  }

  function initTheme() {
    const saved = localStorage.getItem("jaxPortfolioTheme") || "dark";
    setTheme(saved === "light" ? "light" : "dark");
    document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      setTheme(next);
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    items.forEach((item, index) => {
      window.setTimeout(() => item.classList.add("is-visible"), Math.min(index * 35, 420));
    });
  }

  function initParallax() {
    const layers = document.querySelectorAll("[data-parallax]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!layers.length || reduce) return;
    let ticking = false;
    const update = () => {
      const y = window.scrollY || 0;
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallax || 0.03);
        layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  initTheme();
  initLanguage();
  initReveal();
  initParallax();
})();
