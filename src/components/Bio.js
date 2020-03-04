import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import svgAvatar from "../svg/avatar.svg";
import svgResume from "../svg/socials/resume.svg";
import svgTwitter from "../svg/socials/twitter.svg";
import svgEmail from "../svg/socials/email.svg";

const BioWrapper = styled.div`
  position: sticky;
  top: 2em;
  width: ${props => props.theme.sizes.bioWidth};
  padding: 1.5em;
  font-size: 15.5px;
  background: ${props => props.theme.colors.bcakground};
  border-radius: 4px;
  box-shadow: 4px 4px 6px #202326, 
             -4px -4px 5px #272b2e;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    position: relative;
    margin: 2em 0;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1.3em 1em;
  }
`;

const AvatarImage = styled.div`
  display: block;
  width: 65px;
  height: 65px;
  padding: 3px;
  border-radius: 50%;
  box-shadow: 10px 10px 15px 5px rgba(0, 0, 0, 0.2),
          -2px -3px 8px 1px rgba(3,218,198,0.2),
          -1px -1px 4px 1px rgba(3,218,198,0.2);
  img {
    filter: drop-shadow(2px 2px 4px rgba(3,218,198,0.25));
    -webkit-filter: drop-shadow(2px 2px 4px rgba(3,218,198,0.25));
  }
`;

const BioHeader = styled.div`
  display: flex;
  align-items: center;
`;
const BioName = styled.div`
  margin-left: 10px;
  a {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1.3em;
    color: #fff;
  }
`;
const BioMain = styled.div`
  margin-top: 1em;
`;
const BioText = styled.p`
  color: #fff;
  font-size: 0.92em;
`;
const BioLinks = styled.div`
  margin-top: 1.5em;
  display: flex;
  color: #fff;
  text-align: center;
  max-width: 244px;
`;

const BioLink = styled.a`
  position: relative;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 0.9em;
  line-height: 30px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.5px;
  &:hover {
    color: ${props => props.theme.colors.green};
  }
  .bio-link-Image {
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    img {
      display: block;
      margin: 0 auto;
      opacity: 0.5;
      filter: grayscale(100%) drop-shadow(2px 2px 4px rgba(3,218,198,0));
      -webkit-filter: grayscale(100%) drop-shadow(2px 2px 4px rgba(3,218,198,0));
    }
  }
  &:hover .bio-link-Image img{
    opacity: 1;
    filter: grayscale(0%) drop-shadow(2px 2px 4px rgba(3,218,198,0.25));
    -webkit-filter: grayscale(0%) drop-shadow(2px 2px 4px rgba(3,218,198,0.25));
  }
`;

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <BioWrapper>
            <BioHeader>
              <AvatarImage>
                <img src={svgAvatar} alt={author} />
              </AvatarImage>
              <BioName>
                <a href={`https://twitter.com/${social.twitter}`}>{author}</a>
              </BioName>
            </BioHeader>
            <BioMain>
              <BioText>
                駆け出しデベロッパー。デザインとマーケティングも少し。最近はReactがたのしい。
              </BioText>
              <BioLinks>
                <BioLink href="https://www.resume.id/oneliner">
                  <div className="bio-link-Image">
                    <img src={svgResume} alt="RESUME" />
                  </div>
                  <p>RESUME</p>
                </BioLink>
                <BioLink
                  className="bio-link--email"
                  href="mailto:vader.dev.0621@gmail.com"
                >
                  <div className="bio-link-Image">
                    <img src={svgEmail} alt="Email" />
                  </div>
                  <p>E-mail</p>
                </BioLink>
                <BioLink href="https://twitter.com/wo_oneliner">
                  <div className="bio-link-Image">
                    <img src={svgTwitter} alt="Twitter" />
                  </div>
                  <p>Twitter</p>
                </BioLink>
              </BioLinks>
            </BioMain>
          </BioWrapper>
        );
      }}
    />
  );
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
