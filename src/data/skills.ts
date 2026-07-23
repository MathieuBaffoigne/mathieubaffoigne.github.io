// Single source of truth for the skills and certifications shown on the
// skills page, so the FR and EN pages read from the same list instead of
// keeping two hand-maintained copies of the same URLs in sync.
import { techLinks } from "./tech-links";
import type { Lang } from "../i18n/ui";

const skillGroups = [
  { title: "Frontend", skills: ["Angular", "TypeScript"] },
  { title: "Backend", skills: ["Python", "FastAPI", "Django", "Flask", "Chalice", "PostgreSQL", "MySQL"] },
  { title: "Cloud & DevOps", skills: ["AWS (Lambda, API Gateway, DynamoDB)", "Terraform", "Docker", "Git"] },
];

export function getSkillGroups() {
  return skillGroups.map((group) => ({
    ...group,
    skills: group.skills.map((name) => ({ name, url: techLinks[name]?.url, icon: techLinks[name]?.icon })),
  }));
}

interface LocalizedText {
  fr: string;
  en: string;
}

interface CertEntry {
  name: LocalizedText;
  url: LocalizedText | string;
  inProgress?: boolean;
}

interface CertGroup {
  title: LocalizedText;
  certs: CertEntry[];
}

const certGroups: CertGroup[] = [
  {
    title: { fr: "Microsoft", en: "Microsoft" },
    certs: [
      {
        name: { fr: "Azure Fundamentals", en: "Azure Fundamentals" },
        url: {
          fr: "https://learn.microsoft.com/fr-fr/users/mathieubaffoigne-3521/credentials/121f58bc1064d5ec",
          en: "https://learn.microsoft.com/en-us/users/mathieubaffoigne-3521/credentials/121f58bc1064d5ec",
        },
      },
      {
        name: { fr: "Azure AI Fundamentals", en: "Azure AI Fundamentals" },
        url: {
          fr: "https://learn.microsoft.com/fr-fr/users/mathieubaffoigne-3521/credentials/5ee4caae45fe3e77",
          en: "https://learn.microsoft.com/en-us/users/mathieubaffoigne-3521/credentials/5ee4caae45fe3e77",
        },
      },
      {
        name: { fr: "Power BI Data Analyst Associate", en: "Power BI Data Analyst Associate" },
        url: {
          fr: "https://learn.microsoft.com/fr-fr/users/mathieubaffoigne-3521/credentials/54a1bc6f6b9e6df6",
          en: "https://learn.microsoft.com/en-us/users/mathieubaffoigne-3521/credentials/54a1bc6f6b9e6df6",
        },
      },
      {
        name: { fr: "Azure Data Engineer Associate", en: "Azure Data Engineer Associate" },
        url: {
          fr: "https://learn.microsoft.com/fr-fr/users/mathieubaffoigne-3521/credentials/de67580a2617f439",
          en: "https://learn.microsoft.com/en-us/users/mathieubaffoigne-3521/credentials/de67580a2617f439",
        },
      },
    ],
  },
  {
    title: { fr: "AWS", en: "AWS" },
    certs: [
      {
        name: { fr: "Cloud Practitioner", en: "Cloud Practitioner" },
        url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        inProgress: true,
      },
      {
        name: { fr: "Developer - Associate", en: "Developer - Associate" },
        url: "https://aws.amazon.com/certification/certified-developer-associate/",
        inProgress: true,
      },
    ],
  },
  {
    title: { fr: "Docstring.fr", en: "Docstring.fr" },
    certs: [
      {
        name: { fr: "Les bases de Python", en: "Python Fundamentals" },
        url: "https://www.docstring.fr/parcours/les-bases-de-python/certificate/c89676c0-d7ff-43a8-b636-4b35d1224a2d/",
      },
    ],
  },
  {
    title: { fr: "OPQUAST", en: "OPQUAST" },
    certs: [{ name: { fr: "Qualité Web", en: "Web Quality" }, url: "https://directory.opquast.com/fr/certificat/I4C0RB/" }],
  },
  {
    title: { fr: "Simplon", en: "Simplon" },
    certs: [
      {
        name: {
          fr: "Gérer un projet en mobilisant les méthodes Agiles (RS5487)",
          en: "Managing Agile Projects (RS5487)",
        },
        url: "https://www.francecompetences.fr/recherche/rs/5487/",
      },
    ],
  },
  {
    title: { fr: "Anglais", en: "English" },
    certs: [{ name: { fr: "TOEIC", en: "TOEIC" }, url: "https://www.ets.org/toeic.html", inProgress: true }],
  },
];

export function getCertGroups(lang: Lang) {
  return certGroups.map((group) => ({
    title: group.title[lang],
    skills: group.certs.map((cert) => ({
      name: cert.name[lang],
      url: typeof cert.url === "string" ? cert.url : cert.url[lang],
      inProgress: cert.inProgress,
    })),
  }));
}
