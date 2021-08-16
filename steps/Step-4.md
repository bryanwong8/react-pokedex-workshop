# Step 4 - API

After creating a cool looking card we need to populate it with real time data instead of static data.

## 🥇 Goal

The goal of this step is to retrieve a list of Pokemon Data and have it be displayed through the PokeCard that we created. We will do this with fetch and ES6 promises to get data from the Poke Api and save it in the app's state.

## 🎬 Concepts

- Making calls with `useEffect`
- Using promises with `async/await`
- Managing state with `useState`

## 📚 Tasks

Import the `loadPokemon` from `helper/pokemonHelpers`. Also import [useEffect](https://reactjs.org/docs/hooks-effect.html) and [useState](https://reactjs.org/docs/hooks-state.html) functions from React. Afterwards call `loadPokemon()` in `useEffect`. `useEffect` is called whenever the component gets rendered on the page:

```javascript
import React, { useState, useEffect } from 'react';
import { loadPokemon } from 'helper/pokemonHelpers';

const App = () => {
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonResults = await loadPokemon();
        console.log(pokemonResults);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <StyledContainer className='site-card-wrapper'>
      <Row>
        <PokeCard />
      </Row>
    </StyledContainer>
  );
};
```

Check the Network panel of your Developer Tools to see that it is making an API call.

In order to render the Pokemon data and images, we need to save the results in state, using `useState`. State is where you can store values that belong to a component. Whenever the state changes, the component will re-render:

```javascript
const App = () => {
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
      <Row>
        <PokeCard />
      </Row>
    </StyledContainer>
  );
};
```

## 👉🏾 Next Step

Go to [Step 5 - API Integration](https://github.com/wongband/react-pokedex-workshop/blob/master/steps/Step-5.md)
