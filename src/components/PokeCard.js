import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Space } from 'antd';
import { uppercaseWord } from 'helper/shared';
import { loadSelectedPokemon, getBackgroundType } from 'helper/pokemonHelpers';
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

const PokeCard = props => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    const selectedPokemon = async () => {
      try {
        const apiResponse = await loadSelectedPokemon(props.url);
        setPokemonDetail(apiResponse);
      } catch (err) {
        console.error(err);
      }
    };

    selectedPokemon();
  }, [props.url]);

  return (
    <Col span={6}>
      <StyledCard
        typeName={getBackgroundType(pokemonDetail?.types[0].type.name)}
        onClick={() => props.changeSelected(pokemonDetail)}
      >
        <Space align='start'>
          <div>
            <StyledTitle>{uppercaseWord(props.name)}</StyledTitle>
            <PokeType types={pokemonDetail?.types} width='100' />
          </div>
          <img alt='' src={pokemonDetail?.sprites.front_default} />
        </Space>
      </StyledCard>
    </Col>
  );
};
export default PokeCard;
