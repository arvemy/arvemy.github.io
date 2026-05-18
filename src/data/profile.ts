export const profile = {
  name: "Arda Korkmaz",
  github: "https://github.com/arvemy",
  githubLabel: "arvemy",
  linkedin: "https://linkedin.com/in/22ardakorkmaz",
  linkedinLabel: "22ardakorkmaz",
};

export const projects = [
  { slug: "wovo", name: "WoVo", url: "https://github.com/arvemy/wovo" },
  { slug: "yuscheduler", name: "YuScheduler", url: "https://github.com/arvemy/yu-scheduler" },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];
