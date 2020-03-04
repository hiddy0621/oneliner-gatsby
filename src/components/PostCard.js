import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import twemoji from "twemoji";
import CategoryLabel from "../components/CategoryLabel";

const PostCardWrapper = styled.div`
  .post-card-link {
    display: flex;
    align-items: start;
    padding: 0.53em;
    color: #fffffe;
    margin: 0.65em 0;
    border-radius: 4px;
    box-shadow: inset 5px 5px 2px #1f2325, 
                inset -3px -3px 2px #272b2f;
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
      padding: 0.43em;
    }
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      &:hover p img {
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
        animation: ringring 2.25s linear infinite 100ms;
        opacity: 1;
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
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    &:first-of-type p img {
        animation-name: ringringSp;
        animation-direction: normal;
        animation-duration: 12.25s;
        animation-delay: 2s;
        animation-iteration-count: infinite;
    }
    &:nth-of-type(2) p img, 
    &:nth-of-type(8) p img {
        animation-name: ringringSp;
        animation-direction: normal;
        animation-duration: 12.25s;
        animation-delay: 25s;
        animation-iteration-count: 2;
    }
    &:nth-of-type(7n) p img {
        animation-name: ringringSp;
        animation-direction: normal;
        animation-duration: 12.25s;
        animation-delay: 9s;
        animation-iteration-count: infinite;
    }
    &:nth-of-type(4) p img,
    &:nth-of-type(10n) p img {
        animation-name: ringringSp;
        animation-direction: normal;
        animation-duration: 12.25s;
        animation-delay: 17s;
        animation-iteration-count: infinite;
    }
    &:nth-of-type(9n) p img,
    &:nth-of-type(3) p img {
        animation-name: ringringSp;
        animation-direction: normal;
        animation-duration: 12.25s;
        animation-delay: 4s;
        animation-iteration-count: 2;
    }
    &:nth-of-type(5n) p img {
        animation-name: ringringSp;
        animation-direction: normal;
        animation-duration: 12.25s;
        animation-delay: 28s;
        animation-iteration-count: infinite;
    }
    @keyframes ringringSp {
        0% {  transform: scale(1); filter:grayscale(100%);}
        6% {  transform:scale(1)}
        7.2% {  transform:scale(.95)}
        8% {  transform:scale(.9) }
        9.2% {  transform:scale(.9) }
        10% {  transform:scale(1) rotate(4deg); filter:grayscale(0%); }
        10.8% {  transform:scale(1.05) rotate(-4deg); filter:grayscale(0%); }
        11.65% {  transform:scale(1.05) rotate(4deg); filter:grayscale(0%); }
        12.35% {  transform:scale(1.05) rotate(-4deg); filter:grayscale(0%); }
        13.25% {  transform:scale(1.05) rotate(4deg); filter:grayscale(0%); }
        15% {  transform:scale(1) rotate(0); filter:grayscale(50%); }
        17% {  transform:scale(1) rotate(0); filter:grayscale(100%); }
        100% {  transform:scale(1) rotate(0); filter:grayscale(100%); }
    }
  }
`;
const PostCardEmoji = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 90px;
  height: 90px;
  background: linear-gradient(145deg, #202326, #252a2d);
  box-shadow: 5px 5px 10px #1a1c1f, 
             -5px -5px 10px #1a1f1f;
  border-radius: 4px;
  font-size: 50px;
  vertical-align: middle;
  img {
    position: relative;
    width: 55px;
    height: 55px;
    transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    border: none;
    outline: none;
    -webkit-backface-visibility:hidden;
    backface-visibility:hidden;
    transform: scale(1,1);
    -webkit-transform: scale(1,1);
    transition: filter 450ms ease-out 0ms;
    -webkit-transition: filter 450ms linear 0ms;
  }
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 68px;
    height: 68px;
    img {
      width: 48px;
      height: 48px;
    }
  }
`;
const PostCardContent = styled.div`
  position: relative;
  width: calc(100% - 90px);
  min-height: 90px;
  height: auto;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  /* background: rgba(220,120,120,0.1); */
  h3 {
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1.4;
  }
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: calc(100% - 70px);
    min-height: 68px;
    padding-left: 15px;
    h3 {
      font-size: 15.5px;
    }
  }
`;

const PostCardContentFlex = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    /* justify-content: space-between; */
    font-size: 0.9em;
    padding: 7px 0 0 0;
    color: ${props => props.theme.colors.gray};
    time {
      display: block;
      margin-left: 1em;
      /* margin-bottom: 0.2em; */
      letter-spacing: 0.05em;
      font-size: 0.9em;
      padding-right: 0.35rem;
      color: ${props => props.theme.colors.gray};
    }
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    padding: 5px 0 0 0;
    time {
      font-size: 12px;
    }
  }
`;

const PostCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug;
  const emoji = twemoji.parse(node.frontmatter.emoji || "👯‍♀️", {
    folder: "svg",
    ext: ".svg"
  });

  return (
    <PostCardWrapper>
      <Link to={node.fields.slug} className="post-card-link">
        <PostCardEmoji dangerouslySetInnerHTML={{ __html: emoji }} />
        <PostCardContent>
          <h3>{title}</h3>
          <PostCardContentFlex>
            <CategoryLabel slug={node.frontmatter.category}/>
            <time>{node.frontmatter.date}</time>
          </PostCardContentFlex>
        </PostCardContent>
      </Link>
    </PostCardWrapper>
  );
};

export default PostCard;

