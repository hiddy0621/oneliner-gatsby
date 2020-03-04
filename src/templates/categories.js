import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import CategoryMenu from "../components/CategoryMenu";
import CategoryJsonLd from "../components/json/CategoryJsonLd";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 0.2em 0 0.5em;
  font-size: 32px;
  /* color: white; */
  color: ${props => props.theme.colors.background};
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 1px;
  background: #082d30;
  /* text-shadow: 0px 1px 3px rgba(250,250,250,0.95); */
  /* text-shadow:   9px 9px 18px #0e1011, 
             -9px -9px 18px #383e43; */
  text-shadow: 1px 2px 3px #141618, 0px 1px 3px #383943;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

class CategoryTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const { location } = this.props;
    // get Category name from category slug
    const categorySlug = pageContext.category;
    const categoryObject = data.site.siteMetadata.categories.find(cat => {
      return cat.slug === categorySlug;
    });
    // use slug when name doesn't exist
    const categoryName = categoryObject ? categoryObject.name : categorySlug;

    return (
      <Layout location={this.props.location} title={categoryName}>
        <SEO title={categoryName} />
        <CategoryJsonLd
          categorySlug={categorySlug}
          categoryName={categoryName}
        />
        <CategoryMenu location={location} />
        <Heading>{categoryName}</Heading>
        {posts.map(({ node }) => {
          return <PostCard key={node.fields.slug} node={node} />;
        })}
      </Layout>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query BlogPostByCategory($category: String) {
    site {
      siteMetadata {
        categories {
          name
          slug
          color
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            emoji
            category
          }
        }
      }
    }
  }
`;
