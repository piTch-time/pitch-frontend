import styled from 'styled-components';
import { TeamMission } from './components/TeamMission';
import { TeamName } from './components/TeamName';

export const Room = () => {
  return (
    <Container>
      <TeamName name={'팀 이름'} />
      <TeamMission content={'팀 목표'} />
    </Container>
  );
};

const Container = styled.div``;
