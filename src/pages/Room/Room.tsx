import { Spacing } from '@sharedComponents/Spacing';
import styled, { CSSProperties } from 'styled-components';
import { TeamMission } from './components/TeamMission';
import { TeamName } from './components/TeamName';
import { Timer } from './components/Timer';
import { Todo } from './components/Todo';
import { YoutubeContainer } from './components/YoutubeContainer';

export const Room = () => {
  return (
    <Container>
      <Spacing height={5.6} />
      <TeamName name={'팀 이름'} />
      <Spacing height={0.8} />
      <TeamMission content={'팀 목표'} />
      <Spacing height={5.3} />
      <Timer></Timer>
      <YoutubeContainer />
      <Todo></Todo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const BackgroundColor: CSSProperties = {
  backgroundColor: '#f5f5f5',
};
