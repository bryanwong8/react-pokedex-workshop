# Step 3 - Components

At this point we have the basics of what we want for our app. The only steps left are to call an API to get data and display it through. However, in it's currently structure, as more features are added, maintaining it will become very challenging. This is because all the functionality is in the one App component. For such a small app, having everything in one place has been convenient, but it'll scale poorly.

## 🥇 Goal

- The goal of this step is to practice creating and composing React components. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen, etc. In React apps, all of these are commonly expressed as components.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

## 🎬 Concepts

- Creating and composing React components
- Configuring components via passing props

## 📚 Tasks

Let's start by creaing a new `src/PokeCard.js` file to contain a new `PokeCard` component:

```javascript
import React from 'react';

const PokeCard = () => {
  return null;
};

export default PokeCard;
```

Next, move over the card UI into the component:

```javascript
import React from 'react';
import { Col, Space } from 'antd';
import {
  getBackgroundType,
  getPokemonImage,
  getType
} from 'helper/pokemonHelpers';

const PokeCard = () => {
  return (
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
          <StyledImage alt='' src={getPokemonImage('1')} />
        </Space>
      </StyledCard>
    </Col>
  );
};

export default PokeCard;
```

`NOTE: Move the StyledCard, StyledTitle, StyledButton and StyledImage to PokeCard.js as well.`

Back in App.js, we'll import PokeCard.js at the top of the file:

```javascript
import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import PokeCard from 'components/PokeCard';
```

In place of where the PokeCard display code used to be, we'll render <PokeCard />.

```javascript
return (
  <StyledContainer className='site-card-wrapper'>
    <Row>
      <PokeCard />
    </Row>
  </StyledContainer>
);
```
