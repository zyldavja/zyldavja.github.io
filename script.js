// --- Helper: log propre ---
const log = (...a) => console.log("[lang]", ...a);

// --- Textes dans les 3 langues ---
const T = {
  syl: {
    siteTitle:"Влада Краљевине Зылдавыa",
    siteSubtitle:"Краљевина Зылдавыa — Државни портал",
    heroTitle:"Комюнике офицял",
    heroLead:"Добро пожаловать на совместный портал Монархии и Правительства Зылдавыa. Здесь вы найдёте официальные объявления, услуги для граждан и тексты на трёх языках.",
    ctaCit:"Грађанске услуге",
    ctaGaz:"Краљевски гласник",
    ctaGov:"Влада",
    royalLabel:"Краљевски дом",
    royalTitle:"Порука Његовог Величанства",
    royalLink:"Прочитај поруку",
    govNewsTitle:"Вести Владе",
    royalNewsTitle:"Вести Краљевског дома",
    servicesTitle:"Услуге за грађане",
    cardIDTitle:"Лична карта",
    cardIDDesc:"Поднесите захтев или обновите националну карту (CR80).",
    cardIDCTA:"Поднеси захтев",
    naturalTitle:"Натурализација",
    naturalDesc:"Приступите званичном обрасцу Краљевине (PDF + онлајн).",
    naturalCTA:"Попунити образац",
    gazetteTitle:"Краљевски гласник",
    gazetteDesc:"Читајте указе и саопштења министарстава и двора.",
    gazetteCTA:"Отвори",
    govTitle:"Састав Владе",
    erikaRole:"Генерална директорка Националне службе за држављанство",
    fatherRole:"Министар спољних послова",
    footerNote:"© Влада Краљевине Зылдавыa — 2025 • Пародијски сајт, омаж Ержеу."
  },
  fr: {
    siteTitle:"Gouvernement du Royaume de Syldavie",
    siteSubtitle:"Краљевина Зылдавыa — Portail de l'État",
    heroTitle:"Communiqué officiel",
    heroLead:"Bienvenue sur le portail conjoint Monarchie & Gouvernement du Royaume de Syldavie. Informations officielles, démarches et annonces en trois langues.",
    ctaCit:"Démarches citoyennes",
    ctaGaz:"Gazette officielle",
    ctaGov:"Le Gouvernement",
    royalLabel:"Maison royale",
    royalTitle:"Message de Sa Majesté",
    royalLink:"Lire le message",
    govNewsTitle:"Actualités du Gouvernement",
    royalNewsTitle:"Bulletins de la Maison Royale",
    servicesTitle:"Services aux citoyens",
    cardIDTitle:"Carte d’identité",
    cardIDDesc:"Demander ou renouveler une carte nationale (format CR80).",
    cardIDCTA:"Demander",
    naturalTitle:"Naturalisation",
    naturalDesc:"Accéder au formulaire officiel du Royaume (PDF + en ligne).",
    naturalCTA:"Remplir le formulaire",
    gazetteTitle:"Gazette officielle",
    gazetteDesc:"Lire les décrets et communiqués ministériels et royaux.",
    gazetteCTA:"Accéder",
    govTitle:"Composition du Gouvernement",
    erikaRole:"Directrice générale de l’Office national de la citoyenneté",
    fatherRole:"Ministre des Affaires étrangères",
    footerNote:"© Gouvernement du Royaume de Syldavie — 2025 • Site parodique, hommage à Hergé."
  },
  en: {
    siteTitle:"Government of the Kingdom of Syldavia",
    siteSubtitle:"Kraljevina Zyldavja — State Portal",
    heroTitle:"Official communiqué",
    heroLead:"Welcome to the joint Monarchy & Government portal of the Kingdom of Syldavia. Official information, citizen services and announcements in three languages.",
    ctaCit:"Citizen services",
    ctaGaz:"Official gazette",
    ctaGov:"The Government",
    royalLabel:"Royal Household",
    royalTitle:"Message from His Majesty",
    royalLink:"Read the message",
    govNewsTitle:"Government news",
    royalNewsTitle:"Royal Household bulletins",
    servicesTitle:"Services",
    cardIDTitle:"Identity card",
    cardIDDesc:"Apply for or renew a national card (CR80 format).",
    cardIDCTA:"Apply",
    naturalTitle:"Naturalisation",
    naturalDesc:"Access the Kingdom’s official application (PDF + online).",
    naturalCTA:"Open form",
    gazetteTitle:"Official gazette",
    gazetteDesc:"Read decrees and ministerial & royal communiqués.",
    gazetteCTA:"Open",
    govTitle:"Government composition",
    erikaRole:"Director-General, National Office of Citizenship",
    fatherRole:"Minister of Foreign Affairs",
    footerNote:"© Government of the Kingdom of Syldavia — 2025 • Parody site, a tribute to Hergé."
  }
};

// --- Quand le DOM est prêt, on branche tout ---
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  const els = {
    siteTitle: $("siteTitle"),
    siteSubtitle: $("siteSubtitle"),
    heroTitle: $("heroTitle"),
    heroLead: $("heroLead"),
    ctaCitizenship: $("ctaCitizenship"),
    ctaGazette: $("ctaGazette"),
    ctaGovernment: $("ctaGovernment"),
    royalLabel: $("royalLabel"),
    royalTitle: $("royalTitle"),
    royalLink: $("royalLink"),
    govNewsTitle: $("govNewsTitle"),
    royalNewsTitle: $("royalNewsTitle"),
    servicesTitle: $("servicesTitle"),
    cardIDTitle: $("cardIDTitle"),
    cardIDDesc: $("cardIDDesc"),
    cardIDCTA: $("cardIDCTA"),
    naturalTitle: $("naturalTitle"),
    naturalDesc: $("naturalDesc"),
    naturalCTA: $("naturalCTA"),
    gazetteTitle: $("gazetteTitle"),
    gazetteDesc: $("gazetteDesc"),
    gazetteCTA: $("gazetteCTA"),
    govTitle: $("govTitle"),
    erikaRole: $("erikaRole"),
    fatherRole: $("fatherRole"),
    footerNote: $("footerNote"),
    btnSyl: $("lang-syl"),
    btnFr: $("lang-fr"),
    btnEn: $("lang-en"),
    footSyl: $("footSyl"),
    footFr: $("footFr"),
    footEn: $("footEn"),
  };

  function apply(L){
    els.siteTitle && (els.siteTitle.textContent = L.siteTitle);
    els.siteSubtitle && (els.siteSubtitle.textContent = L.siteSubtitle);
    els.heroTitle && (els.heroTitle.textContent = L.heroTitle);
    els.heroLead && (els.heroLead.textContent = L.heroLead);
    els.ctaCitizenship && (els.ctaCitizenship.textContent = L.ctaCit);
    els.ctaGazette && (els.ctaGazette.textContent = L.ctaGaz);
    els.ctaGovernment && (els.ctaGovernment.textContent = L.ctaGov);
    els.royalLabel && (els.royalLabel.textContent = L.royalLabel);
    els.royalTitle && (els.royalTitle.textContent = L.royalTitle);
    els.royalLink && (els.royalLink.textContent = L.royalLink);
    els.govNewsTitle && (els.govNewsTitle.textContent = L.govNewsTitle);
    els.royalNewsTitle && (els.royalNewsTitle.textContent = L.royalNewsTitle);
    els.servicesTitle && (els.servicesTitle.textContent = L.servicesTitle);
    els.cardIDTitle && (els.cardIDTitle.textContent = L.cardIDTitle);
    els.cardIDDesc && (els.cardIDDesc.textContent = L.cardIDDesc);
    els.cardIDCTA && (els.cardIDCTA.textContent = L.cardIDCTA);
    els.naturalTitle && (els.naturalTitle.textContent = L.naturalTitle);
    els.naturalDesc && (els.naturalDesc.textContent = L.naturalDesc);
    els.naturalCTA && (els.naturalCTA.textContent = L.naturalCTA);
    els.gazetteTitle && (els.gazetteTitle.textContent = L.gazetteTitle);
    els.gazetteDesc && (els.gazetteDesc.textContent = L.gazetteDesc);
    els.gazetteCTA && (els.gazetteCTA.textContent = L.gazetteCTA);
    els.govTitle && (els.govTitle.textContent = L.govTitle);
    els.erikaRole && (els.erikaRole.textContent = L.erikaRole);
    els.fatherRole && (els.fatherRole.textContent = L.fatherRole);
    els.footerNote && (els.footerNote.textContent = L.footerNote);
  }

  function setLang(code){
    const L = T[code] || T.fr;

    // Texte
    apply(L);

    // Boutons header visuels
    document.querySelectorAll('.langs button').forEach(b=>b.setAttribute('aria-pressed','false'));
    const active = $("lang-"+code);
    if (active) active.setAttribute('aria-pressed','true');

    // html lang
    document.documentElement.setAttribute('lang', code === 'syl' ? 'sr' : code);

    // mémoriser
    try { localStorage.setItem('lang', code); } catch(e){}
    log("lang switched →", code);
  }

  // Clicks header
  els.btnSyl && (els.btnSyl.onclick = ()=> setLang('syl'));
  els.btnFr  && (els.btnFr.onclick  = ()=> setLang('fr'));
  els.btnEn  && (els.btnEn.onclick  = ()=> setLang('en'));

  // Clicks footer
  els.footSyl && (els.footSyl.onclick = (e)=>{ e.preventDefault(); setLang('syl'); });
  els.footFr  && (els.footFr.onclick  = (e)=>{ e.preventDefault(); setLang('fr');  });
  els.footEn  && (els.footEn.onclick  = (e)=>{ e.preventDefault(); setLang('en');  });

  // Initialisation
  const fromHash = location.hash.replace('#','');
  const fromStore = (()=>{ try { return localStorage.getItem('lang'); } catch(e){ return null; } })();
  const initial = ['syl','fr','en'].includes(fromHash) ? fromHash : (fromStore || 'fr');
  setLang(initial);
});