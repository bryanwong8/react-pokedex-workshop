import React from 'react';
import { Button, Card, Col, Space } from 'antd';
import { getBackgroundType } from 'helper/pokemonHelpers';
import PokeType from 'components/PokeType';
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
  margin: 30px;
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

const StyledTitle = styled.h2`
  color: white;
`;

const PokeCard = () => {
  return (
    <Col span={6}>
      <StyledCard typeName={getBackgroundType('grass')}>
        <Space align='start'>
          <div>
            <StyledTitle>Bulbasaur</StyledTitle>
            <PokeType type='grass' width='100' />
            <PokeType type='poison' width='100' />
          </div>
          <img alt='' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
        </Space>
      </StyledCard>
    </Col>
  );
};

export default PokeCard;