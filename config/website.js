const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Wala - Wala Designs', // Navigation and Site Title
  siteTitleAlt: 'Wala', // Alternative Site title for SEO
  siteTitleShort: 'Wala', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazginly fast websites', // Headline for waladesigns
  siteUrl: 'https://waladesigns.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'Leeland Clenista', // Author for waladesigns

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@changelater', // Twitter Username
  ogSiteName: 'changelater', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
