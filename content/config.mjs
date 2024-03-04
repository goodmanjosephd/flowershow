/**
 * @type {import("../config/siteConfig").UserConfig}
 */

const config = {
  title: "Joe's Musings",
  description: "",
  showEditLink: false,
  showToc: true,
  showSidebar: true,
  showLinkPreviews: true,
  author: "Joe",
  domain: "notes.joesmusings.com",
  // Google analytics key e.g. G-XXXX
  analytics: "G-JBTN66TFEH",
  // content source directory for markdown files
  // DO NOT CHANGE THIS VALUE
  // if you have your notes in another (external) directory,
  // /content dir should be a symlink to that directory
  content: "content",
  avatarPlaceholder: "/_flowershow/avatarplaceholder.png",
  contentExclude: [],
  contentInclude: [],
  blogDir: "blog",
  peopleDir: "people",
  // Theme
  theme: {
    default: "dark",
    toggleIcon: "/_flowershow/theme-button.svg",
  },
  navLinks: [
    // { href: '/about', name: 'About' },
  ],
};

export default config;
