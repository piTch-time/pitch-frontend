import styled from 'styled-components';
import { TeamMission } from './components/TeamMission';
import { TeamName } from './components/TeamName';
import { Timer } from './components/Timer';
import { YoutubeContainer } from './components/YoutubeContainer';

export const Room = () => {
  return (
    <Container>
      <TeamName name={'팀 이름'} />
      <TeamMission content={'팀 목표'} />
      <Timer></Timer>
      <YoutubeContainer></YoutubeContainer>
    </Container>
  );
};

const Container = styled.div``;
