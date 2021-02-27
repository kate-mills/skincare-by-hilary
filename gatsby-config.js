const siteUrl = `https://skincare-by-hilary.netlify.app` // change to .com url
const netlifyUrl = `https://skincare-by-hilary.netlify.app`
const companyName = `Skincare By Hilary`
const description = `${companyName} - Schedule Now! Hilary's treatments include makeup, eyelash extensions, waxing, tinting, & facial spa treatments in Napa, CA.`

module.exports = {
  siteMetadata: {
    author: `kate-mills`,
    altUrl: `${netlifyUrl}`,
    dateModified: `${new Date().toISOString()}`,
    image: `/images/default-image.jpg`, // ./static/images/
    siteUrl: `${siteUrl}`,
    title: `${companyName}`,
    titleTemplate: `%s | ${companyName}`,
    twitterUsername: `@gatsbyjs`,

    organization: {
      address: {
        name: `${companyName}`,
        street: `555 Example st.`,
        city: `Napa`,
        state: `CA`,
        zip: `94558`,
        country: `USA`,
      },
      description: `${description}`,
      email: `mailto:skinandmakeup@yahoo.com`,
      displayEmail: {
        prefix: `skinandmakeup`,
        suffix: `@yahoo`,
        ext: `.com`,
      },
      geo: {
        lat: 38.298606261163506,
        long: -122.29030346027331,
      },
      logo: `${siteUrl}/images/logo.png`, // ./static/images/
      name: `${companyName}`,
      phone: `+1-707-315-3329`,
      displayPhone: `(707) 315-3329`,
      priceRange: `$$$`,
      otherUrls: [
        `https://www.facebook.com/pages/Hilary-Molloy-skin-artistry-renewal/286199431401479`,
        `http://www.yelp.com/biz/hilary-molloy-napa`,
        `https://instagram.com/itshilarymolloy`,
      ],
      url: `${siteUrl}`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Skincare By Hilary`,
        short_name: `Hilary Molloy`,
        start_url: `/`,
        description: `${description}`,
        background_color: `#ffb1b1`,
        theme_color: `#ffb1b1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${siteUrl}`,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  flags: { DEV_SSR: false }
}
