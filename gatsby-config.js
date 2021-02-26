const siteUrl = `https://gatsby-seo-business-starter.netlify.app` // change to .com url
const netlifyUrl = `https://gatsby-seo-business-starter.netlify.app`
const companyName = `Gatsby SEO Business Starter`
const description = `${companyName} - Kick off your next, great Gatsby project with this seo business (with postal address) starter. Just put your info in siteMetadata.`

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
        city: `City`,
        state: `CA`,
        zip: `99999`,
        country: `USA`,
      },
      description: `${description}`,
      email: `mailto:customerservice@example.com`,
      displayEmail: {
        prefix: `customerservice`,
        suffix: `@example`,
        ext: `.com`,
      },
      geo: {
        lat: 38.329239,
        long: -122.295921,
      },
      logo: `${siteUrl}/images/logo.png`, // ./static/images/
      name: `${companyName}`,
      phone: `+1-555-555-5555`,
      displayPhone: `(555) 555-5555`,
      priceRange: `$$$`,
      otherUrls: [
        `https://www.facebook.com/example`,
        `https://instagram.com/example`,
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
        name: `gatsby-seo-business-starter`,
        short_name: `Seo Business`,
        start_url: `/`,
        description: `${description}`,
        background_color: `#ffb1b1`,
        theme_color: `#ffb1b1`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
}
