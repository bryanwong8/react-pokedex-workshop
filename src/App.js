import React from 'react';
import { getBackgroundType, getType } from 'helper/pokemonHelpers';
import { Button, Card, Col, Row, Space } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: ${props => props.typeName};
  color: white;
  border: none;
  width: ${props => props.width}%;
  margin-right: 5px;
  margin-top: 5px;
`;

const StyledCard = styled(Card)`
  background-color: ${props => props.typeName};
  border-radius: 27px;
  color: white;

  :hover {
    cursor: pointer;
    float: top;
  }

  .ant-card-body {
    padding: 20px;
  }
`;

const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const StyledTitle = styled.h2`
  color: white;
`;

const App = () => {
  return (
    <StyledContainer className='site-card-wrapper'>
      <Row>
        <Col span={8}>
          <StyledCard typeName={getBackgroundType('grass')}>
            <Space align='start'>
              <div>
                <StyledTitle>Bulbasaur</StyledTitle>
                <StyledButton
                  typeName={getType('grass')}
                  width={'100'}
                  shape='round'
                  size='small'
                >
                  Grass
                </StyledButton>
                <StyledButton
                  typeName={getType('poison')}
                  width={'100'}
                  shape='round'
                  size='small'
                >
                  Poison
                </StyledButton>
              </div>
              <img
                alt=''
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
              />
            </Space>
          </StyledCard>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default App;
