import { defaultLang, type Lang, ui } from "./ui";

export function t(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}
