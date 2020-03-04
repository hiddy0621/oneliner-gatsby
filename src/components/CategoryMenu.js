import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import svgHome from "../svg/categories/home.svg";
import svgDesign from "../svg/categories/design.svg";
import svgDev from "../svg/categories/dev.svg";
import svgCollection from "../svg/categories/collection.svg";
import svgSelf from "../svg/categories/self.svg";

const Nav = styled.nav`
  display: block;
  padding: 0 0 0.5em;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    /* padding: 1em 0; */
    padding: 1em 0 0.8em;
  }
`;

const CategoryItemList = styled.ul`
  display: flex;
  padding: 0;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 0 -20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
    &:after {
      content: "";
      width: 40px;
      flex: 0 0 auto;
    }
  }
`;

const CategoryItem = styled.li`
  width: 70px;
  margin: 0 20px 0 0;
  text-align: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    width: 60px;
    flex: 0 0 auto;
    margin: 0 0 0 15px;
  }
  .cat-item__link {
    color: #fff;
  }
  .cat-item__image {
    position: relative;
    padding: 2px;
    background: linear-gradient(145deg, #202326, #252a2d);
    border-radius: 50%;
    position: relative;
    border: 4px solid ${props => props.theme.colors.background};
    box-shadow: -5px -2px 25px rgba(42,47,52,1),
                0px 4px 30px rgba(24,27,27), 
                inset 7px 7px 10px -10px rgba(42,47,52,1);
    cursor: pointer;
    /* transition: all 80ms cubic-bezier(1,1.95,1,.2) 0ms; */
    img {
      position: relative;
      border-radius: 50%;
      background: transparent;
      display: block;
      z-index: 2;
      opacity: 0.6;
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden;
      /* transition: opacity 220ms ease-out 0ms; */
      filter: drop-shadow(0 0 0 rgba(3,218,198,0)) grayscale(100%);
      -webkit-filter: drop-shadow(0 0 0 rgba(3,218,198,0)) grayscale(100%);
    }
    &:after {
      content: "";
      position: absolute;
      background: transparent;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      z-index: 2;
      /* transition: all 80ms cubic-bezier(1,1.95,1,.2) 0ms; */
    }
    &:hover {
      /* border: 4px solid ${props => props.theme.colors.orange}; */
      box-shadow: -6px -3px 20px rgba(42,47,52,1), 0px 4px 20px rgba(24,27,27);
      &:after {
        box-shadow: inset 0px 4px 20px rgba(24,27,27),
          inset 0px -6px 20px rgba(42,47,52,1);
      }
      img {
        opacity: 0.8;
        filter: drop-shadow(0 0 0 rgba(3,218,198,0)) grayscale(20%);
        -webkit-filter: drop-shadow(0 0 0 rgba(3,218,198,0)) grayscale(20%);
        border: solid 2px ${props => props.theme.colors.background};
      }
    }
  }
  .cat-item__name {
    margin-top: 5px;
    font-size: 13px;
    font-weight: 600;
    opacity: 0.6;
    letter-spacing: 0.5px;
    color: ${props => props.theme.colors.gray};
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      font-size: 12px;
    }
  }
  &.active {
    pointer-events: none;
    .cat-item__image {
      /* border: 4px solid ${props => props.theme.colors.orange}; */
    }
    .cat-item__image:after {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: inset 0px 4px 20px rgba(24,27,27),
          inset 0px -6px 20px rgba(42,47,52,1);
    }
    img {
      opacity: 1;
      border: solid 2px none;
      filter: drop-shadow(1px 3px 7px rgba(3,218,198,0.8));
      -webkit-filter: drop-shadow(1px 3px 7px rgba(3,218,198,0.8));
      animation: blink 4s linear infinite 3s;
    }
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
    .cat-item__name {
      opacity: 1;
      color: ${props => props.theme.colors.green};
    }
  }
  /* @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } */
`;

const CategoryLink = ({ catName, catIcon, catLink, path }) => {
  return (
    <CategoryItem className={catLink === path && "active"}>
      <Link to={catLink} className="cat-item__link">
        <div className="cat-item__image">
          {/* <object type="image/svg+xml" data={catIcon} alt={catName} width='50px' height='50px'></object> */}
          <img type="image/svg+xml" src={catIcon} alt={catName} />
        </div>
        <div className="cat-item__name">{catName}</div>
      </Link>
    </CategoryItem>
  );
};

const CategoryMenu = ({ location }) => {
  const path = location.pathname;
  return (
    <Nav>
      <CategoryItemList>
        <CategoryLink 
          catName="新着記事" 
          catIcon={svgHome} 
          catLink="/" 
          path={path} 
        />
         <CategoryLink
          catName="学び"
          catIcon={svgSelf}
          catLink="/category/self"
          path={path}
        />
        <CategoryLink
          catName="デザイン"
          catIcon={svgDesign}
          catLink="/category/design"
          path={path}
        />
        <CategoryLink
          catName="開発メモ"
          catIcon={svgDev}
          catLink="/category/dev"
          path={path}
        />
        <CategoryLink
          catName="くらし"
          catIcon={svgCollection}
          catLink="/category/life"
          path={path}
        />
      </CategoryItemList>
    </Nav>
  );
};

export default CategoryMenu;
