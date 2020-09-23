# Step 4 - API Data Integration with components

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
        console.log(selectedPokemon)
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
```
