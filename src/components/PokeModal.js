import * as React from 'react';
import { Layout, Modal, Progress } from 'antd';
import { calculateStatTotal, uppercaseWord } from 'helper/shared';
import { getBackgroundType } from 'helper/pokemonHelpers';
import styled from 'styled-components';
import PokeType from 'components/PokeType';

const { Footer, Content } = Layout;

const StyledContent = styled(Content)`
  padding: 28px;
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

const PokeModal = props => {
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
            <img alt='' src={props.pokemonDetail?.sprites.front_default} />
          </StyledImageContainer>
        </StyledContent>
      </StyledLayout>
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
};

export default PokeModal;
