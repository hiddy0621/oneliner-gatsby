import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  .category-text {
    padding: 0.3em 1em;
    display: inline-block;
    /* position: absolute;
    left: 10px;
    top: 10px; */
    line-height: 1.3;
    font-size: 12px;
    border-radius: 18px;
    font-weight: 600;
    color: #fffffe;
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
      font-size: 9px;
      padding: 0.2em 0.8em;
    }
  }
`;

const categoryLabel = ({ slug, isLink }) => {
  if (!slug) return null;
  return (
    <StaticQuery
      query={categoryQuery}
      render={data => {
        const { categories } = data.site.siteMetadata;
        const categoryObject = categories.find(cat => {
          return cat.slug === slug;
        });
        const categoryName = categoryObject ? categoryObject.name : slug;
        const categoryColor = categoryObject ? categoryObject.color : "#03dac6";
        const content = isLink ? (
          <Link
            to={`/category/${slug}`}
            className="category-text"
            style={{
              background: categoryColor
            }}
          >
            {categoryName}
          </Link>
        ) : (
          <span
            className="category-text"
            style={{
              background: categoryColor
            }}
          >
            {categoryName}
          </span>
        );
        return <Wrapper>{content}</Wrapper>;
      }}
    />
  );
};

const categoryQuery = graphql`
  query categoryQuery {
    site {
      siteMetadata {
        categories {
          name
          slug
          color
        }
      }
    }
  }
`;

export default categoryLabel;
