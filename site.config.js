const CONFIG = {
  profile: {
    name: "Sudharshan S",
    image: "/madlad.jpg",
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
  blog: {
    title: "Sudharshan's Blog",
    description: "Welcome to my Blog!",
  },

  link: "https://sudharshans2009.vercel.app",
  since: 2024,
  lang: "en-US",
  ogImageGenerateURL: "https://og-image-korean.vercel.app",
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

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
      appid: "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production",
  revalidateTime: 60 * 60 * 6,
}

module.exports = { CONFIG }
