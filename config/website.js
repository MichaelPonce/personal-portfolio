const meta = {
  // Metadata
  siteTitle: 'Michael Ponce - Developer',
  siteDescription:
    'Michael Ponce - Developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Michael Ponce',
  siteShortName: 'Michael Ponce',
  siteUrl: 'https://michaelponce.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@michaelponce',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'michaelponce',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
