module.exports = {
  siteMetadata: {
    title: `Oneliner`,
    author: `ベーだー`,
    description: `Design, Art, Travel and Things`,
    siteUrl: `https://one-liner.site`,
    social: {
      twitter: `wo_oneliner`
    },
    categories: [
      {
        name: "LEARN",
        slug: "self",
        color: "#c99c32"
      },
      {
        name: "DESIGN",
        slug: "design",
        color: "#cd7672"
      },
      {
        name: "DEV.",
        slug: "dev",
        color: "#138086"
      },
      {
        name: "LIFE",
        slug: "life",
        color: "#cd7672"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 650,
              height: 365
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          // 文字化けするため使わない
          // {
          //   resolve: `gatsby-remark-twemoji-shortcut`,
          //   options: {
          //     classname: "twemoji"
          //   }
          // },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                simple: {
                  classes: "simple",
                  title: "optional"
                },
                info: {
                  classes: "info",
                  title: "optional"
                },
                alert: {
                  classes: "alert",
                  title: "optional"
                },
                notice: {
                  classes: "notice",
                  title: "optional"
                },
                imageSmall: {
                  classes: "image-small"
                },
                imageMedium: {
                  classes: "image-medium"
                }
              }
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              noInlineHighlight: false
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/svg/categories`,
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oneliner | Design, Art, Travel & Things`,
        short_name: `Oneliner`,
        start_url: `/`,
        background_color: `rgb(23, 25, 30)`,
        theme_color: `#e4b50c`,
        display: `minimal-ui`,
        icon: `content/assets/avatar.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: "UA-134661352-1"
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
};
