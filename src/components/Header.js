import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import svgLogo from "../svg/logo.svg";

const HeaderTag = styled.header`
  width: 100%;
  padding: 12px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
`;

const HeaderInner = styled.div`
  position: relative;
  h1,
  h3 {
    width: 100%;
  }
  .logo {
    display: block;
    width: 110px;
    height: auto;
    filter: drop-shadow(1px 3px 7px rgba(3,218,198,0.8));
      -webkit-filter: drop-shadow(1px 3px 7px rgba(3,218,198,0.8));
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      margin: 0 auto;
    }
  }

  .logo-link {
    display: block;
  }
  .message-link {
    position: absolute;
    right: 0;
    top: 7px;
    display: block;
    width: 34px;
    &:hover {
      top: 5px;
    }
  }
`;

const Header = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const logoLink = (
    <Link to={`/`} className="logo-link">
      <img className="logo" src={svgLogo} alt={title} />
    </Link>
  );

  let headerLogo;
  if (location.pathname === rootPath) {
    headerLogo = <h1>{logoLink}</h1>;
  } else {
    headerLogo = <h3>{logoLink}</h3>;
  }
  return (
    <HeaderTag>
      <ContentWrapper>
        <HeaderInner>{headerLogo}</HeaderInner>
      </ContentWrapper>
    </HeaderTag>
  );
};

export default Header;
