module.exports = {
  siteMetadata: {
    title: "Matthys.dev",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ["UCO0X5b0mQ4eIHitXHXSFUyw"],
        apiKey: "AIzaSyDpMe_M0rCcJL67y_5LKK7cdYdOhC-Qzdo", // Optional for public requests
        maxVideos: 50, // Defaults to 50
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto Mono"],
      },
    },

    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
  ],
};
