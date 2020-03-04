import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import twemoji from "twemoji";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import CategoryLabel from "../components/CategoryLabel";
import PostJsonLd from "../components/json/PostJsonLd";
import RelatedPosts from "../components/RelatedPosts";
import ShareButtons from "../components/ShareButtons";
// import FollowBudge from "../components/FollowBudge";

import postSyntaxHighlightStyle from "../styles/postSyntaxHighlight";
import postContentStyle from "../styles/postContent";
import postCustomBlockStyle from "../styles/postCustomBlock";

const Content = styled.section`
  position: relative;
  background: #fff;
  overflow: hidden;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  background: ${props => props.theme.colors.background};
  /* &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    z-index: 5;
  }
  &:before {
    top: 0;
    left: 0;
    border-top: 20px solid ${props => props.theme.colors.background};
    border-right: 20px solid transparent;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 20px solid ${props => props.theme.colors.background};
    border-left: 20px solid transparent;
  } */
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 0 -${props => props.theme.sideSpace.small};
    &:before,
    &:after {
      content: none;
    }
    border-radius: 0
  }
`;

const HeroImage = styled.p`
  position: relative;
  text-align: center;
  background: ${props => props.theme.colors.whitesmoke};
  background-repeat: repeat;
  background-size: 400px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .emoji {
    background: transparent;
    width: 120px;
    height: 120px;
    padding: 14px;
    box-shadow:  5px 5px 10px #b9b8ba, 
             -5px -5px 10px #ffffff;
    border-radius: 12px;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      width: 110px;
      height: 110px;
      padding: 12px;
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    min-height: 200px;
  }
`;

const ContentMain = styled.div`
  /* max-width: 680px; */
  margin: 0 ;
  background: ${props => props.theme.colors.background};
  border-radius: 4px;
  /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.2); */
  /* transform: translate3d(0,-30px,0);
  -webkit-transform: translate3d(0,-30px,0); */
  padding: 1.8em ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 28px ${props => props.theme.sideSpace.contentSmall};
  }
`;

const PostTitle = styled.h1`
  margin: 0.1em 0 0.3em;
  font-size: 1.8em;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 25px;
  }
  color: white;
  font-weight: 600;
  line-height: 1.5;
`;

const PostDate = styled.time`
  display: block;
  color: ${props => props.theme.colors.silver};
  font-size: 0.9em;
  letter-spacing: 0.05em;
`;

const PostContent = styled.div`
  ${postSyntaxHighlightStyle}
  ${postContentStyle}
  ${postCustomBlockStyle}
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { relatedPosts, slug } = this.props.pageContext;
    const { title, description, date, category, emoji } = post.frontmatter;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} description={description || post.excerpt} category={category} />
        <Helmet>
          <link
            rel="canonical"
            href={`https://one-liner.site${this.props.location.pathname}`}
          />
        </Helmet>
        <PostJsonLd
          title={title}
          description={description || post.excerpt}
          date={date}
          url={this.props.location.href}
          categorySlug={category}
        />
        <Content>
          <HeroImage
            dangerouslySetInnerHTML={{
              __html: twemoji.parse(emoji || "😺", {
                folder: "svg",
                ext: ".svg"
              })
            }}
          />
          <ContentMain>
            <PostDate>{date}</PostDate>
            <PostTitle>{title}</PostTitle>
            <CategoryLabel slug={category} isLink="true" />
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* <FollowBudge /> */}
          </ContentMain>
          <aside>
            <ShareButtons slug={slug} title={title} emoji={emoji} />
            <RelatedPosts posts={relatedPosts} />
          </aside>
        </Content>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        date(formatString: "YYYY.MM.DD")
        emoji
        category
      }
    }
  }
`;
