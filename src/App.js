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
  height: 180px;
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
  return null;
};

export default App;
