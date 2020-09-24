# Step 5 - API Data Integration with components

Now that we have some actual data, we can now display it.

## 🥇 Goal

- The goal of this step is to display the list of Pokemon that we retrieved and display them.

## 🎬 Concepts

- Reading JSON data
- Displaying JSON to our components
- Integrating logic with components

## 📚 Tasks

Before displaying the array of components, lets go over how
the JSON data looks like.

For example, we can see how each data looks like through:

```javascript
pokemon.map(selectedPokemon => {
  console.log(selectedPokemon);
});
```

We need to convert the array of `pokemon` into an array of components so that we can render the images, name and typing.There are several ways, but the most common approach is to use `Array.prototype.map`:

```javascript
const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const name = 'Bryan Wong';

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
      <Row>
        {pokemon.map(selectedPokemon => (
          <PokeCard
            key={selectedPokemon.name}
            name={selectedPokemon.name}
            url={selectedPokemon.url}
          />
        ))}
      </Row>
    </StyledContainer>
  );
};
```

We can use the `pokemon.url` to retrieve data based on a specific pokemon.

NOTE: Before moving on make sure to import `useEffect` and `useState` from react. Also import loadSelectedPokemon from `helper/pokemonHelpers`.

```javascript
import React, { useEffect, useState } from 'react';
import { uppercaseWord } from 'helper/shared';
import {
  loadSelectedPokemon,
  getBackgroundType,
  getPokemonImage
} from 'helper/pokemonHelpers';

const PokeCard = () => {
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
    <Col span={8}>
      <StyledCard typeName={getBackgroundType('grass')}>
        <Space align='start'>
          <div>
            <StyledTitle>Bulbasaur</StyledTitle>
            <PokeType type='grass' width={'100'} />
            <PokeType type='poison' width={'100'} />
          </div>
          <StyledImage alt='' src={getPokemonImage('1')} />
        </Space>
      </StyledCard>
    </Col>
  );
};
```

Let's check the network's tab to see what data we get back. That way we can start replacing the static data with the API data instead:

```javascript
return (
  <Col span={8}>
    <StyledCard typeName={getBackgroundType(pokemonDetail?.types[0].type.name)}>
      <Space align='start'>
        <div>
          <StyledTitle>{uppercaseWord(props.name)}</StyledTitle>
          <PokeType type='grass' width={'100'} />
          <PokeType type='poison' width={'100'} />
        </div>
        <StyledImage alt='' src={getPokemonImage(pokemonDetail?.id)} />
      </Space>
    </StyledCard>
  </Col>
);
```

Since the typing of each Pokemon is also dynamic, lets change `PokeType` by passing the types data from the API:

```javascript
const PokeType = props => {
  return (
    <div>
      {props?.types?.map(typing => (
        <StyledButton
          typeName={getType(typing.type.name)}
          width={props.width}
          shape='round'
          size='small'
        >
          {uppercaseWord(typing.type.name)}
        </StyledButton>
      ))}
    </div>
  );
};
```

Afterwards we can pass in the types data into `PokeType` from `PokeCard` like so:

```javascript
return (
  <Col span={8}>
    <StyledCard
      typeName={getBackgroundType(pokemonDetail?.types[0].type.name)}
      onClick={() => props.changeSelected(pokemonDetail)}
    >
      <Space align='start'>
        <div>
          <StyledTitle>{uppercaseWord(props.name)}</StyledTitle>
          <PokeType types={pokemonDetail?.types} width='100' />
        </div>
        <StyledImage alt='' src={getPokemonImage(pokemonDetail?.id)} />
      </Space>
    </StyledCard>
  </Col>
);
```
