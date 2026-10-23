export const languages = { en: "English", tr: "Türkçe" } as const;
export const defaultLang = "en" as const;

export const ui = {
  en: {
    meta: {
      title: "Arda Korkmaz",
      description:
        "Arda Korkmaz — computer engineer in İzmir, Türkiye. Building desktop apps and web tools with Rust, Tauri, and SvelteKit.",
      ogImage: "/og-image.png",
      ogImageAlt: "Arda Korkmaz — computer engineer in İzmir, Türkiye",
    },
    hero: {
      tagline: "Computer engineer.",
      location: "İzmir, Türkiye",
    },
    sections: {
      about: "About",
      timeline: "Timeline",
      projects: "Projects",
      contact: "Contact",
    },
    about:
      "Computer engineering graduate of Yaşar University. Drinking coffee and developing side projects in my spare time.",
    timeline: [
      {
        date: "Sep 2021 - Jun 2026",
        title: "Yaşar University",
        sub: "B.S. Computer Engineering",
      },
      {
        date: "Aug 2025 - Sep 2025",
        title: "İzmir Institute of Technology (İYTE)",
        sub: "Computer Engineering Intern",
      },
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
    notFound: {
      title: "Page not found",
      message: "This page doesn't exist or has moved.",
      back: "Back to home",
    },
  },
  tr: {
    meta: {
      title: "Arda Korkmaz",
      description:
        "Arda Korkmaz — İzmir'de bilgisayar mühendisi. Rust, Tauri ve SvelteKit ile masaüstü uygulamaları ve web araçları geliştiriyor.",
      ogImage: "/og-image-tr.png",
      ogImageAlt: "Arda Korkmaz — İzmir'de bilgisayar mühendisi",
    },
    hero: {
      tagline: "Bilgisayar mühendisi.",
      location: "İzmir, Türkiye",
    },
    sections: {
      about: "Hakkında",
      timeline: "Zaman çizelgesi",
      projects: "Projeler",
      contact: "İletişim",
    },
    about:
      "Yaşar Üniversitesi Bilgisayar Mühendisliği mezunuyum. Boş zamanlarımda kahve içip yan projeler geliştiriyorum.",
    timeline: [
      {
        date: "Eyl 2021 - Haz 2026",
        title: "Yaşar Üniversitesi",
        sub: "Bilgisayar Mühendisliği Lisans",
      },
      {
        date: "Ağu 2025 - Eyl 2025",
        title: "İYTE",
        sub: "Bilgisayar Mühendisliği Stajyeri",
      },
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
    notFound: {
      title: "Sayfa bulunamadı",
      message: "Bu sayfa mevcut değil veya taşınmış.",
      back: "Ana sayfaya dön",
    },
  },
} as const;

export type Lang = keyof typeof ui;
