import React from "react";
import styled from "styled-components";

const PostAllWrapper = styled.div`
  max-width: 100%;
  position: relative;
  height: auto;
  margin: 0 auto;
  display: flex;
  display: webkit-flex;
  justify-content: space-between;
  /* background: #999944; */
  flex-wrap: wrap;
  flex-direction: row;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    flex-direction: row;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const PostWrapper = ({children}) => {
  return <PostAllWrapper>{children}</PostAllWrapper>;
};

export default PostWrapper;