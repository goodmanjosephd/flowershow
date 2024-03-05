/**
 * @type {import("../config/siteConfig").UserConfig}
 */

const config = {
  title: "Joe's Notes",
  description: "",
  showEditLink: false,
  showToc: true,
  showSidebar: true,
  showLinkPreviews: true,
  showComments: true,
  author: "Joe",
  domain: "https://notes.joesmusings.com",
  // Google analytics key e.g. G-XXXX
  analytics: "G-JBTN66TFEH",
  // content source directory for markdown files
  // DO NOT CHANGE THIS VALUE
  // if you have your notes in another (external) directory,
  // /content dir should be a symlink to that directory
  content: "content",
  avatarPlaceholder: "/_flowershow/avatarplaceholder.png",
  blogDir: "blog",
  peopleDir: "people",
  // Theme
  theme: {
    default: "dark",
    toggleIcon: "/_flowershow/theme-button.svg",
  },
  navLinks: [
    { href: '/', name: 'Home' },
    { href: '/start-here', name: 'Start Here' },
    { href: 'https://joesmusings.com', name: 'Blog' },
    
  ],
   comments: {
    provider: "giscus",
    config: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    },
   },
};

export default config;
