/**
 * @type {import("../config/siteConfig").UserConfig}
 */

const config = {
  title: "Joe's Notes",
  description: "A beautiful site created with Flowershow, showcasing my portfolio.",
  author: "Joe",
  domain: "https://notes.joesmusings.com",
  navbarTitle: {
    text: "Jane's Portfolio",
    logo: "/images/navbar-logo.svg",
  },
  showComments: true, // Enable or disable comments site-wide.
  theme: {
    colorScheme: "light", // Or 'dark' if you prefer a dark theme.
    fontFamily: "Arial, sans-serif",
  },
};

export default config;
