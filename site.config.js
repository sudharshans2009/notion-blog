const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Sudharshan S",
    image: "/madlad.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Student",
    bio: "Just another programmer.",
    email: "sudharshans2009@gmail.com",
    linkedin: "",
    github: "sudharshans2009",
    instagram: "",
  },
  projects: [
    {
      name: `Notion Blog`,
      href: "https://github.com/sudharshans2009/notion-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Sudharshan's Blog",
    description: "Welcome to my Blog!",
  },

  // CONFIG configration (required)
  link: "https://sudharshans2009.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 3600, // revalidate time for [slug], index
}

module.exports = { CONFIG }
