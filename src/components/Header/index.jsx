import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <ItemList>
        <Item>ABOUT</Item>
        <Item>PORTFOLIO</Item>
        <Item>CONTACT</Item>
      </ItemList>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: white;
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const ItemList = styled.nav`
  display: flex;
`;

const Item = styled.div`
  padding: 0 1rem;
  color: #000;
  :hover {
    color: red;
  }
`;

export default Header;
