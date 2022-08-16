import React from 'react';
import { Button, Card } from 'antd';
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

const App = () => {
  const name = 'Bryan Wong';

  return (
    <div>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <Card>
        <img
          alt=''
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        />
      </Card>
    </div>
  );
};

export default App;
