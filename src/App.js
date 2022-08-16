import React from 'react';
import { Row } from 'antd';
import PokeCard from 'components/PokeCard';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const App = () => {
  return (
    <StyledContainer className='site-card-wrapper'>
      <Row>
        <PokeCard />
      </Row>
    </StyledContainer>
  );
};

export default App;
