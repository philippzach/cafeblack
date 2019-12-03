module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Cafe Bar Black 1966', // Navigation and Site Title
  titleAlt: 'Cafe Bar Black 1966', // Title for JSONLD
  description:
    'Unser Café Black ist seit dem Erbauungsjahr 1966 eine Institution an der Färberstrasse im Zürcher Seefeld',
  headline: 'Café Black in Zürich', // Headline for schema.org JSONLD
  url: 'https://black1966.ch', // Domain of your site. No trailing slash!
  siteLanguage: 'de', // Language Tag on <html> element
  logo: '/logos/banner.png', // Used for SEO
  ogLanguage: 'de_DE', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Cafe Black1966', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Cafe Black1966', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@cafeblack1966', // Twitter Username
  facebook: 'cafeblack1966', // Facebook Site Name
  googleAnalyticsID: 'UA-153854830-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
