import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import svg404 from "../svg/others/404.svg";

const Wrapper = styled.div`
  color: #fff;
  text-align: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 2em;
  }
`;

const HeroImage = styled.img`
  display: block;
  max-width: 300px;
  margin: 0 auto;
  filter: drop-shadow(1px 3px 7px rgba(3,218,198,0.8));
  -webkit-filter: drop-shadow(1px 3px 7px rgba(3,218,198,0.8));
  animation: blink 4s linear infinite 3s;
  @keyframes blink {
      78% {
        opacity: inherit;
        filter: inherit;
      }
      79%{
        opacity: 0.5;
      }
      80% {
        filter: none;
      }
      81% {
        opacity: inherit;
        filter: inherit;
      }
      82% {
        opacity: 0.5;
        filter: none;
      }
      83% {
        opacity: inherit;
        filter: inherit;
      }
      92% {
        opacity: 0.5;
        filter: none;
      }
      93% {
        opacity: inherit;
        filter: inherit;
      }
    }
`;

const Title = styled.div`
  font-size: 62px;
  font-weight: 600;
  color: #fff;
`;

const StyledLink = styled(Link)`
  margin-top: 0.7em;
  display: inline-block;
  padding: 0.3em 1em;
  background: #fff;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.blackLight};
  border-radius: 25px;
  &:hover {
    background: ${props => props.theme.colors.green};
  }
`;

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Wrapper>
          <SEO title="ページが見つかりません" />
          <HeroImage src={svg404} />
          <Title>Not Found</Title>
          <StyledLink to={`/`} className="cat-item__link">
            HOME
          </StyledLink>
        </Wrapper>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
