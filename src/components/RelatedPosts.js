import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import twemoji from "twemoji";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.whitesmoke};
  padding: 2em ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`;

const PostCardWrapper = styled.div`
  .post-card-link {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    padding: 15px;
    background: ${props => props.theme.colors.whitesmoke};
    border-radius: 5px;
    color: ${props => props.theme.colors.blackLight};
    box-shadow:  5px 5px 13px #bdbdbe, 
             -5px -5px 13px #ffffff;
    /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
    /* &:hover {
      background: #e0ebf1;
    } */
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      &:hover p img {
        animation: ringring 2.25s linear infinite 100ms;
      }
      @keyframes ringring {
        0% {  transform: scale(1) }
        6.25% {  transform:scale(.95)}
        9.25% {  transform:scale(.9) }
        15.5% {  transform:scale(.9) }
        19.5% {  transform:scale(1) rotate(4deg) }
        25% {  transform:scale(1.05) rotate(-4deg) }
        31.25% {  transform:scale(1.05) rotate(4deg) }
        37.5% {  transform:scale(1.05) rotate(-4deg) }
        43.75% {  transform:scale(1.05) rotate(4deg) }
        50% {  transform:scale(1) rotate(0) }
        100% {  transform:scale(1) rotate(0) }
      }
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      padding: 10px;
    }
  }
`;
const PostCardEmoji = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.whitesmoke};
  box-shadow:  inset 5px 5px 10px #abaaac, 
            inset -5px -5px 10px #ffffff;
  border-radius: 4px;
  font-size: 50px;
  img {
    width: 55px;
    height: 55px;
  }
`;
const PostCardContent = styled.div`
  width: calc(100% - 80px);
  padding-left: 15px;
  h5 {
    font-size: 1.1em;
    font-weight: 600;
    line-height: 1.45;
  }
  time {
    display: block;
    margin-bottom: 0.1em;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    color: ${props => props.theme.colors.silver};
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding-left: 15px;
    h5 {
      font-size: 1em;
    }
  }
`;

const RelatedPostCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug;
  const emoji = twemoji.parse(node.frontmatter.emoji || "🐱", {
    folder: "svg",
    ext: ".svg"
  });

  return (
    <PostCardWrapper>
      <Link to={node.fields.slug} className="post-card-link">
        <PostCardEmoji dangerouslySetInnerHTML={{ __html: emoji }} />
        <PostCardContent>
          <h5>{title}</h5>
          <time>{node.frontmatter.date}</time>
        </PostCardContent>
      </Link>
    </PostCardWrapper>
  );
};

const RelatedPosts = ({ posts }) => {
  if (!posts.length) return null;
  let content = [];

  posts.forEach(post => {
    content.push(
      <RelatedPostCard key={post.node.fields.slug} node={post.node} />
    );
  });
  return <Wrapper>{content}</Wrapper>;
};

export default RelatedPosts;
