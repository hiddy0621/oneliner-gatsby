import { css } from "styled-components";
import svgHeadingIcon from "../svg/others/heading-icon.svg";
import svgHeadingIconH3 from "../svg/others/heading-icon_h3.svg";

const postContentStyle = css`
  margin: 1.5em 0 1em;
  line-height: 1.8;
  color: white;
  a:hover {
    text-decoration: underline;
  }
  p {
    margin-bottom: 1em;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 40px 0 10px;
    font-weight: 600;
    line-height: 1.5;
  }
  h2 {
    position: relative;
    margin: 55px 0 12px;
    padding: 5px 0 5px 17px;
    font-size: 1.55em;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: inline-block;
      width: 5px;
      height: 100%;
      border-radius: 5px;
      background: linear-gradient(0deg, #03b48d, #03dac6);
      filter: drop-shadow(1px 3px 7px rgba(3,218,198,0.8));
      -webkit-filter: drop-shadow(1px 3px 7px rgba(3,218,198,0.8));
    }
  }
  h3 {
    position: relative;
    margin: 55px 0 12px;
    font-size: 1.45em;
    padding: 5px 0 5px 17px;
    &:before {
      position: absolute;
      top: .6em;
      left: -0.2em;
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url("${svgHeadingIconH3}");
      background-size: contain;
      background-repeat: no-repeat;
      filter: drop-shadow(1px 3px 7px #eeb462);
      -webkit-filter: drop-shadow(1px 3px 7px #eeb462);
    }
  }
  h4 {
    position: relative;
    padding-left: 18px;
    font-size: 1.1em;
    &:before {
      position: absolute;
      top: .2em;
      left: 0;
      content: "";
      display: inline-block;
      width: 14px;
      height: 19px;
      background-image: url("${svgHeadingIcon}");
      background-size: contain;
      background-repeat: no-repeat;
      filter: drop-shadow(1px 3px 7px #eeb462);
      -webkit-filter: drop-shadow(1px 3px 7px #eeb462);
    }
  }
  ul, ol {
    margin: 1em 0;
    p {
      margin: 0;
    }
  }
  ul {
    padding-left: 1.2em;
  }
  ul li {
    margin: .4em 0;
    list-style: disc;
  }
  ul ul {
    margin: 0;
  }
  ol {
    counter-reset: number;
    & > li {
      list-style: none;
      list-style-position: inside;
      position: relative;
      line-height: 25px;
      padding-left: 34px;
      margin: 1em 0;
      &:before {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #5c9ee7;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        line-height: 25px;
        content: counter(number);
        counter-increment: number;
        background: ${props => props.theme.colors.orange};
      }
    }
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }
  del {
    text-decoration: line-through;
  }
  hr {
    display: block;
    margin: 2em 0;
    border: none;
    border-top: dotted 3px ${props => props.theme.colors.silver};
  }
  table {
    display: block;
    border-spacing: 2px;
    border-collapse: separate;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    width: auto;
    font-size: .9em;
    line-height: 1.4;
    th {
      background-color: ${props => props.theme.colors.orange};
      color: #FFF;
      padding: 10px 12px;
      text-align: center;
      font-weight: 600;
      &[align="center"] {
        text-align: center;
      }
      &[align="right"] {
        text-align: right;
      }
    }
    td {
      background-color:  ${props => props.theme.colors.whitesmoke};
      color: ${props => props.theme.colors.blackLight};
      padding: 10px 12px;
    }
    thead tr {
      th:first-child {
        border-radius: 5px 0 0 0;
      }
      th:last-child {
        border-radius: 0 5px 0 0;
      }
    }
    tbody tr:last-child {
      td:first-child {
        border-radius: 0 0 0 5px;
      }
      td:last-child {
        border-radius: 0 0 5px 0;
      }
    }
  }
  blockquote {
    margin: 2.3em 0;
    font-style: italic;
    border-radius: 4px;
    background: ${props => props.theme.colors.background};
    box-shadow: inset 5px 5px 2px #1f2325, 
                inset -3px -3px 2px #272b2f;
    padding: 1em;
    p {
      margin: .3em 0;
    }
  }
  .gatsby-resp-image-wrapper {
    margin: 1em 0;
    border: solid 1px rgba(159,162,174,0.3);
    box-shadow: 0 2px 5px -1px rgba(0,0,0,.25);
    /* box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.25),
          -1px -2px 4px 1px rgba(3,218,198,0.2),
          -1px -1px 4px 1px rgba(3,218,198,0.2); */
    border-radius: 4px;
    overflow: hidden;
  }
`;

export default postContentStyle;
