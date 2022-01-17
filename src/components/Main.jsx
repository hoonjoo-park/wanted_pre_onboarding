import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

function Main() {
  return (
    <MainContainer>
      <Carousel />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  padding-top: 15px;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
