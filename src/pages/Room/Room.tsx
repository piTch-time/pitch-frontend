import styled from 'styled-components';
import { TeamMission } from './components/TeamMission';
import { TeamName } from './components/TeamName';
import { Timer } from './components/Timer';

export const Room = () => {
  return (
    <Container>
      <TeamName name={'팀 이름'} />
      <TeamMission content={'팀 목표'} />
      <Timer></Timer>
    </Container>
  );
};

const Container = styled.div``;
