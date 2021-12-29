const siteMetadata = {
  title: 'Ravuthz Blog',
  author: 'Ravuthz',
  headerTitle: 'RavuthzBlog',
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://ravuthz.github.io',
  siteRepo: 'https://github.com/ravuthz/blog',
  // siteRepo: 'https://github.com/ravuthz/ravuthz.github.io/',
  siteLogo: '/static/images/logo.png',
  // image: '/static/images/avatar.png',
  image: 'https://gravatar.com/avatar/3f9ea148ade811b13cc6adac470463d6?s=400&d=robohash&r=x',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ravuthz@gmail.com',
  github: 'https://github.com/ravuthz',
  twitter: 'https://twitter.com/Vutyo',
  facebook: 'https://www.facebook.com/ravuthz',
  youtube: 'https://www.youtube.com/user/MrRavuthz/videos',
  linkedin: 'https://www.linkedin.com/in/vannaravuth-yo',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'dark_dimmed',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
