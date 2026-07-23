import {
  siAngular,
  siTypescript,
  siPython,
  siFastapi,
  siDjango,
  siFlask,
  siPostgresql,
  siMysql,
  siTerraform,
  siDocker,
  siGit,
  siAstro,
  siTailwindcss,
} from "simple-icons";

// Single source of truth for "official site / docs" links per technology,
// shared by the skills page and project stack tags so the same tech always
// points to the same place. Icons come straight from Simple Icons — rendered
// in currentColor to stay on-palette — instead of hand-copied path data, so
// they stay in sync with upstream brand updates.
export interface TechLink {
  url: string;
  icon?: string;
}

export const techLinks: Record<string, TechLink> = {
  Angular: { url: "https://angular.dev", icon: siAngular.path },
  TypeScript: { url: "https://www.typescriptlang.org", icon: siTypescript.path },
  Python: { url: "https://www.python.org", icon: siPython.path },
  FastAPI: { url: "https://fastapi.tiangolo.com", icon: siFastapi.path },
  Django: { url: "https://www.djangoproject.com", icon: siDjango.path },
  Flask: { url: "https://flask.palletsprojects.com", icon: siFlask.path },
  Chalice: { url: "https://aws.github.io/chalice/" },
  PostgreSQL: { url: "https://www.postgresql.org", icon: siPostgresql.path },
  MySQL: { url: "https://www.mysql.com", icon: siMysql.path },
  "AWS (Lambda, API Gateway, DynamoDB)": { url: "https://aws.amazon.com" },
  Terraform: { url: "https://www.terraform.io", icon: siTerraform.path },
  Docker: { url: "https://www.docker.com", icon: siDocker.path },
  Git: { url: "https://git-scm.com", icon: siGit.path },
  Astro: { url: "https://astro.build", icon: siAstro.path },
  "Tailwind CSS": { url: "https://tailwindcss.com", icon: siTailwindcss.path },
};
