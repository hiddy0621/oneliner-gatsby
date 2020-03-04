import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, title, category }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const defaultTitle = "Oneliner | 学び・デザイン・Web制作・暮らしのお役立ちマガジン";
        const ogp = `${category}_ogp.png` || "ogp.png"
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            defaultTitle={defaultTitle}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: title || defaultTitle
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:image`,
                // content: `${data.site.siteMetadata.siteUrl}/images/.png`
                content: `${data.site.siteMetadata.siteUrl}/images/${ogp}`
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              },
              {
                // name: `google-site-verification`,
                // content: `tPbbYBIkS-hMJ6JCXihoxuipkMX5q1QnyQ-6R_kvkYs`
              }
            ].concat(meta)}
          />
        );
      }}
    />
  );
};

SEO.defaultProps = {
  lang: `ja`,
  meta: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  //categoryを追加
  category: PropTypes.string
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
  }
`;
