export const languages = { en: "English", tr: "Türkçe" } as const;
export const defaultLang = "en" as const;

export const ui = {
  en: {
    meta: {
      title: "Arda Korkmaz",
      description: "Personal site of Arda Korkmaz.",
    },
    hero: {
      tagline: "Engineer.",
      location: "İzmir, Türkiye",
    },
    sections: {
      about: "About",
      timeline: "Timeline",
      projects: "Projects",
      contact: "Contact",
    },
    about:
      "Computer engineering student in İzmir. Drinking coffee and developing side projects in my spare time.",
    timeline: [
      {
        date: "Sep 2021",
        title: "Yaşar University",
        sub: "B.S. Computer Engineering",
        status: "ongoing",
      },
      {
        date: "Aug 2025 - Sep 2025",
        title: "İYTE",
        sub: "Computer Engineering Intern",
        status: "done",
      },
      { date: "Jun 2026", title: "Graduating", sub: "Expected" },
    ],
    projects: {
      wovo: {
        tagline:
          "Cross-platform desktop app for tracking AI subscription usage, costs, and account state.",
        tech: "Rust · Tauri · Leptos · Tailwind CSS",
      },
      yuscheduler: {
        tagline:
          "Client-side course scheduler that generates conflict-free combinations from preferences.",
        tech: "SvelteKit · TypeScript",
      },
    },
    contact: { github: "GitHub", linkedin: "LinkedIn" },
    switchLang: { label: "TR", aria: "Türkçe versiyona geç" },
    themeAria: "Toggle theme",
    loading: "Loading",
  },
  tr: {
    meta: {
      title: "Arda Korkmaz",
      description: "Arda Korkmaz'ın kişisel sitesi.",
    },
    hero: {
      tagline: "Mühendis.",
      location: "İzmir, Türkiye",
    },
    sections: {
      about: "Hakkında",
      timeline: "Zaman çizelgesi",
      projects: "Projeler",
      contact: "İletişim",
    },
    about:
      "İzmir'de bilgisayar mühendisliği öğrencisiyim. Boş zamanlarımda kahve içip yan projeler geliştiriyorum.",
    timeline: [
      {
        date: "Eyl 2021",
        title: "Yaşar Üniversitesi",
        sub: "Bilgisayar Mühendisliği Lisans",
        status: "ongoing",
      },
      {
        date: "Ağu 2025 - Eyl 2025",
        title: "İYTE",
        sub: "Bilgisayar Mühendisliği Stajyeri",
        status: "done",
      },
      { date: "Haz 2026", title: "Mezuniyet", sub: "Beklenen" },
    ],
    projects: {
      wovo: {
        tagline:
          "AI abonelik kullanımını, maliyetleri ve hesap durumunu takip eden çapraz platform masaüstü uygulaması.",
        tech: "Rust · Tauri · Leptos · Tailwind CSS",
      },
      yuscheduler: {
        tagline:
          "Tercihlerden çakışmasız ders programı kombinasyonları üreten istemci taraflı bir program oluşturma aracı.",
        tech: "SvelteKit · TypeScript",
      },
    },
    contact: { github: "GitHub", linkedin: "LinkedIn" },
    switchLang: { label: "EN", aria: "Switch to English" },
    themeAria: "Temayı değiştir",
    loading: "Yükleniyor",
  },
} as const;

export type Lang = keyof typeof ui;
