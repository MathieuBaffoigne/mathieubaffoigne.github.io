export const languages = {
  fr: "Français",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "fr";

export const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.journey": "Parcours",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.home.href": "/",
    "nav.projects.href": "/projets",
    "nav.skills.href": "/competences",
    "nav.journey.href": "/parcours",
    "nav.blog.href": "/blog",
    "nav.contact.href": "/contact",
    "footer.built": "Construit avec Astro & Tailwind CSS.",
    "card.demo": "Démo",
    "card.code": "Code",
    "card.inProgress": "En cours",
    "lang.switchTo": "English",
    "lang.toggleLabel": "Passer en anglais",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.journey": "Journey",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.home.href": "/en",
    "nav.projects.href": "/en/projects",
    "nav.skills.href": "/en/skills",
    "nav.journey.href": "/en/journey",
    "nav.blog.href": "/en/blog",
    "nav.contact.href": "/en/contact",
    "footer.built": "Built with Astro & Tailwind CSS.",
    "card.demo": "Demo",
    "card.code": "Code",
    "card.inProgress": "In progress",
    "lang.switchTo": "Français",
    "lang.toggleLabel": "Switch to French",
  },
} as const;

function resolveLang(lang: string | undefined): Lang {
  return lang === "en" ? "en" : defaultLang;
}

export function useTranslations(lang: string | undefined) {
  const resolved = resolveLang(lang);
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[resolved][key] ?? ui[defaultLang][key];
  };
}

const NAV_SLOTS = ["home", "projects", "skills", "journey", "blog", "contact"] as const;

export const navItems = (lang: string | undefined) => {
  const t = useTranslations(lang);
  return NAV_SLOTS.map((slot) => ({
    href: t(`nav.${slot}.href` as const),
    label: t(`nav.${slot}` as const),
  }));
};
