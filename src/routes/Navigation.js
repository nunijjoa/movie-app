import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBlock = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: #000;
  box-shadow: 5px 5px 12px rgba(0,0,0,.5);
  a {
    color: #fff;
    font-size: 18px;
  }
  a + a {
    margin-left: 20px;
  }
`;

const Navigation = () => {
  return (
    <NavigationBlock>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </NavigationBlock>
  );
};

export default Navigation;