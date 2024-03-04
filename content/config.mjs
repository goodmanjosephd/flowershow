/**
 * @type {import("../config/siteConfig").UserConfig}
 */

const config = {
  title: "My Flowershow Site",
  description: "A beautiful site created with Flowershow, showcasing my portfolio.",
  author: "Jane Doe",
  domain: "https://janedoe.com",
  logo: "/images/site-logo.svg",
  navbarTitle: {
    text: "Jane's Portfolio",
    logo: "/images/navbar-logo.svg",
  },
  showComments: false, // Enable or disable comments site-wide.
  analyticsConfig: {
    googleAnalyticsKey: "UA-XXXXX-Y",
  },
  theme: {
    colorScheme: "light", // Or 'dark' if you prefer a dark theme.
    fontFamily: "Arial, sans-serif",
  },
  social: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourgithubusername",
    linkedin: "https://www.linkedin.com/in/yourlinkedinprofile/",
  },
};

export default config;
