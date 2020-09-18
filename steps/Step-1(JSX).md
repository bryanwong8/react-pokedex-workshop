# Step 1 - JSX and Ant Design

JSX is syntactic sugar for the plain JavaScript function React.createElement(). React elements are the smallest building blocks of React apps that describe what you want to see on the screen.

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. ReactDOM takes care of updating the DOM to match the React elements.

## 🥇 Goal

- Practice with JSX
- Practice using third party React UI libraries

## 🎬 Concepts

- Rendering elements with JSX
- How to use other style libraries

## 📚 Tasks

In the `src/App.js` file, replace the `null` with some JSX. An example would be this:

```javascript
const App = () => {
  return <div>Hi there!</div>;
};
```

You will need to import React in order use JSX.

```javascript
import React from 'react';

const App = () => {
  return <main>Hi there!</main>;
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

Now lets add some style libraries to make our lives easier. In order to use the library we must import it from the library like so:

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


