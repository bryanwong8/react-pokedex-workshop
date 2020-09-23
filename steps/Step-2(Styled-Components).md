# Step 2 - Styled Components

We currently created a basic Pokemon card, but it looks not the best currently. We are going to use a package called styled-components to style the component that we created.

## 🥇 Goal

- Practice with styled-components
- More practice with JSX

## 🎬 Concepts

- Using styled-components
- How props work with styled-components

## 📚 Tasks

In the same `src/App.js` file, there already should be a variable called `StyledCard`. Lets apply the style like so:

```javascript
const App = () => {
  const name = 'Bryan Wong';

  return (
    <div>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <StyledCard>
        <img alt='' src={getPokemonImage('1')} />
      </StyledCard>
    </div>
  );
};
```

Time to apply some padding and width to center the whole app:

```javascript
const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const StyledImage = styled.img`
  width: 80%;
  height: 100%;
`;

const App = () => {
  const name = 'Bryan Wong';

  return (
    <StyledContainer>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <StyledCard>
        <StyledImage alt='' src={getPokemonImage('1')} />
      </StyledCard>
    </StyledContainer>
  );
};
```

Now we can continue formatting the Pokedex so it can be formatted in rows:

```javascript
const App = () => {
  const name = 'Bryan Wong';

  return (
    <StyledContainer>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <Row>
        <Col span={8}>
          <StyledCard>
            <StyledImage alt='' src={getPokemonImage('1')} />
          </StyledCard>
        </Col>
      </Row>
    </StyledContainer>
  );
};
```

After getting the Row and Column done we can format how the card looks like with the Space component from Ant Design:

```javascript
const StyledTitle = styled.h2`
  color: white;
`;

const App = () => {
  const name = 'Bryan Wong';

  return (
    <StyledContainer>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <Row>
        <Col span={8}>
          <StyledCard>
            <Space align='start'>
              <div>
                <StyledTitle>Bulbasaur</StyledTitle>
              </div>
              <StyledImage alt='' src={getPokemonImage('1')} />
            </Space>
          </StyledCard>
        </Col>
      </Row>
    </StyledContainer>
  );
};
```

Now lets add some functions that can help make the our PokeCard look better and use it to color the background:

```javascript
import { getBackgroundType, getType } from 'helper/pokemonHelpers';

const App = () => {
  const name = 'Bryan Wong';

  return (
    <StyledContainer>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <Row>
        <Col span={8}>
          <StyledCard typeName={getBackgroundType('grass')}>
            <Space align='start'>
              <div>
                <StyledTitle>Bulbasaur</StyledTitle>
              </div>
              <StyledImage alt='' src={getPokemonImage('1')} />
            </Space>
          </StyledCard>
        </Col>
      </Row>
    </StyledContainer>
  );
};
```

Next lets add some buttons so show Bulbasaur's type:

```javascript
const StyledButton = styled(Button)`
  background-color: ${props => props.typeName};
  color: white;
  border: none;
  width: ${props => props.width}%;
  margin-right: 5px;
  margin-top: 5px;
`;

const App = () => {
  const name = 'Bryan Wong';

  return (
    <StyledContainer className='site-card-wrapper'>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
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
              <StyledImage alt='' src={getPokemonImage('1')} />
            </Space>
          </StyledCard>
        </Col>
      </Row>
    </StyledContainer>
  );
};
```
