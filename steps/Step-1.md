# Step 1 - JSX and Ant Design

JSX is syntactic sugar for the plain JavaScript function React.createElement(). React elements are the smallest building blocks of React apps that describe what you want to see on the screen.

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. ReactDOM takes care of updating the DOM to match the React elements.

## 🥇 Goal

The goal of this step is to practice using JSX syntax by adding elements to the `src/App.js` file. This step also serves to learn how to use React UI Libraries to lessen the amount of work you need to do when it comes to styling elements.

## 🎬 Concepts

- Rendering elements with JSX
- How to use other style libraries

## 📚 Tasks

In the `src/App.js` file, replace the `null` with some JSX. An example would be this:

```javascript
import React from 'react';

const App = () => {
  return <div>Hi there!</div>;
};

export default App;
```

Add attributes to the nested JSX markup. For example:

```javascript
const App = () => {
  return (
    <div>
      <h1>Hi there! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
    </div>
  );
};
```

We can pass in variables to JSX as well:

```javascript
const App = () => {
  const name = 'Bryan Wong';

  return (
    <div>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
    </div>
  );
};
```

Now lets add some style libraries to make our lives easier. In order to use components from a library, we must import it. In our case we are going to import the [Card](https://ant.design/components/card/) component from [Ant Design](https://ant.design/).

```javascript
import React from 'react';
import { Card } from 'antd';

const App = () => {
  const name = 'Bryan Wong';

  return (
    <div>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
    </div>
  );
};
```

Afterwards we can use the Card object like so:

```javascript
const App = () => {
  const name = 'Bryan Wong';

  return (
    <div>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <Card>Hi Im a card from Ant design</Card>
    </div>
  );
};
```

Lastly since we are building a Pokedex lets start by putting the image and name of the pokemon in the card. For now we will just put a static image of Bulbasaur in the card like so:

```javascript
import React from 'react';
import { Card } from 'antd';
import { getPokemonImage } from 'helper/pokemonHelpers';

const App = () => {
  const name = 'Bryan Wong';

  return (
    <div>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <Card>
        <img alt='' src={getPokemonImage('1')} />
      </Card>
    </div>
  );
};
```

## 👉🏾 Next Step

Go to [Step 2 - Styled Components](https://github.com/wongband/react-pokedex-workshop/blob/master/steps/Step-2.md)
