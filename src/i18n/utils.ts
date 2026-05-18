import { ui, defaultLang, type Lang } from "./ui";

export function t(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}
