# Step 6 - Conditonal Rendering

When we click on a `PokeCard` we should have an option to display it.

## 🥇 Goal

The goal of this step is to learn how to conditionally render components as well as integrating the other concepts we learned so far.

## 🎬 Concepts

- Conditionally rendering components
- Reading JSON data
- Displaying JSON to our components
- Integrating logic with components

## 📚 Tasks

Since we want to keep track of what Pokemon is selected, lets add another state variable in `src/App.js` and pass it into `PokeCard`:

```javascript
const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const loadedPokemon = async () => {
      try {
        const apiResponse = await loadPokemon();
        setPokemon(apiResponse.results);
      } catch (err) {
        console.log(err);
      }
    };

    loadedPokemon();
  }, []);

  return (
    <StyledContainer className='site-card-wrapper'>
      <Row>
        {pokemon?.map(selectedPokemon => (
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
```

Afterwards lets modify `src/components/PokeCard` to use the new prop whenever a card is clicked on:

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

Before moving on lets make sure that when we click on a `PokeCard` that the state is set correctly in `src/App.js`:

```javascript
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
  console.log(pokemonDetail)

  return (...);
};
```

Now that we got the data that we are looking for, lets render a dummy component for now to display the name of the pokemon we selected:

```javascript
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
  console.log(pokemonDetail);

  return (
    <StyledContainer className='site-card-wrapper'>
      {selectedPokemon !== null ? <h1>{selectedPokemon.name}</h1> : null}
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

Now lets create a new component called `PokeModal` in `src/components`:

```javascript
import * as React from 'react';
import { Layout, Modal } from 'antd';
import { calculateStatTotal, uppercaseWord } from 'helper/shared';
import { getBackgroundType, getPokemonImage } from 'helper/pokemonHelpers';
import styled from 'styled-components';
import PokeType from 'components/PokeType';

const { Footer, Content } = Layout;

const PokeModal = props => {
  return (
    <Modal
      visible={props.pokemonDetail !== null}
      onOk={() => props.changeSelected(null)}
      onCancel={() => props.changeSelected(null)}
      footer={null}
    >
      <Layout>
        <Content>
          <h1>
            {uppercaseWord(props.pokemonDetail.name)} #{props.pokemonDetail.id}
          </h1>
        </Content>
      </Layout>
    </Modal>
  );
};

export default PokeModal;
```

Lets take this time and add some style to the `Modal`, `Layout`, `Content`, and `h1`:

```javascript
const StyledContent = styled(Content)`
  padding: 28px;
`;

const StyledImage = styled.img`
  width: 40%;
  margin-top: 2em;
`;

const StyledImageContainer = styled.div`
  text-align: center;
`;

const StyledLayout = styled(Layout)`
  background-color: ${props => props.typeName};
`;

const StyledModal = styled(Modal)`
  .ant-modal {
    width: 300px;
  }

  .ant-modal-body {
    padding: 0;
  }
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 3px;
`;
```

Now that the modal looks a bit more presentable, we are going to add `PokeTypes` and an image for the modal as well as some style to it:

```javascript
return (
  <StyledModal
    visible={props.pokemonDetail !== null}
    onOk={() => props.changeSelected(null)}
    onCancel={() => props.changeSelected(null)}
    footer={null}
  >
    <StyledLayout
      typeName={getBackgroundType(props.pokemonDetail?.types[0].type.name)}
    >
      <StyledContent>
        <StyledTitle>
          {uppercaseWord(props.pokemonDetail.name)} #{props.pokemonDetail.id}
        </StyledTitle>

        <span>
          <PokeType types={props.pokemonDetail.types} width={'18'} />
        </span>

        <StyledImageContainer>
          <StyledImage alt='' src={getPokemonImage(props.pokemonDetail?.id)} />
        </StyledImageContainer>
      </StyledContent>
    </StyledLayout>
  </StyledModal>
);
```

Finally the last thing we need to add is the Pokemon stats for it right under the `StyledImageContainer`:

```javascript
const StyledFooter = styled(Footer)`
  border-radius: 30px 30px 0 0;
  background-color: white;
`;

const StyledProgress = styled(Progress)`
  margin-left: 5px;
  width: 50%;
  position: absolute;
  right: 35px;
`;

const StyledStat = styled.span`
  position: absolute;
  left: 13em;
`;

const StyledStatName = styled.span`
  color: #8c8c8c;
`;

return (
  <StyledModal
    visible={props.pokemonDetail !== null}
    onOk={() => props.changeSelected(null)}
    onCancel={() => props.changeSelected(null)}
    footer={null}
  >
    ...
    <StyledFooter>
      <div>
        {props.pokemonDetail.stats.map(stat => (
          <span>
            <StyledStatName>{uppercaseWord(stat.stat.name)}</StyledStatName>
            <StyledStat>{stat.base_stat}</StyledStat>
            <StyledProgress
              percent={(stat.base_stat / 255) * 100}
              showInfo={false}
            />
            <br />
          </span>
        ))}
      </div>
    </StyledFooter>
  </StyledModal>
);
```

Like most Pokedex out there lets add the total base stat of the pokemon as well:

```javascript
return (
  <StyledModal
    visible={props.pokemonDetail !== null}
    onOk={() => props.changeSelected(null)}
    onCancel={() => props.changeSelected(null)}
    footer={null}
  >
    <StyledFooter>
      <div>
        {props.pokemonDetail.stats.map(stat => (
          <span>
            <StyledStatName>{uppercaseWord(stat.stat.name)}</StyledStatName>
            <StyledStat>{stat.base_stat}</StyledStat>
            <StyledProgress
              percent={(stat.base_stat / 255) * 100}
              showInfo={false}
            />
            <br />
          </span>
        ))}

        <span>
          <StyledStatName>Total</StyledStatName>
          <StyledStat>
            {calculateStatTotal(props.pokemonDetail?.stats)}
          </StyledStat>
          <StyledProgress
            percent={
              (calculateStatTotal(props.pokemonDetail?.stats) / 800) * 100
            }
            showInfo={false}
          />
          <br />
        </span>
      </div>
    </StyledFooter>
  </StyledModal>
);
```

All that's left is to conditionally render the `PokeModal` in `src/App.js`:

```javascript
import PokeModal from 'components/PokeModal';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const loadedPokemon = async () => {
      try {
        const apiResponse = await loadPokemon();
        setPokemon(apiResponse.results);
      } catch (err) {
        console.log(err);
      }
    };

    loadedPokemon();
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
        {pokemon?.map(selectedPokemon => (
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
```