import React, { useState, useEffect } from 'react';
import { loadPokemon } from 'helper/pokemonHelpers';
import { Row } from 'antd';
import PokeCard from 'components/PokeCard';
import PokeModal from 'components/PokeModal';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonResults = await loadPokemon();
        setPokemon(pokemonResults.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <StyledContainer className='site-card-wrapper'>
      {selectedPokemon !== null ? (
        <PokeModal
          pokemonDetail={selectedPokemon}
          changeSelected={setSelectedPokemon}
        />
      ) : null}
      <Row>
        {pokemon.map(selectedPokemon => (
          <PokeCard
            key={selectedPokemon.name}
            name={selectedPokemon.name}
            url={selectedPokemon.url}
            changeSelected={setSelectedPokemon}
          />
        ))}
      </Row>
    </StyledContainer>
  );
};

export default App;
