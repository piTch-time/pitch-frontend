import styled from 'styled-components';
import { TeamName } from './components/TeamName';

export const Room = () => {
  return (
    <Container>
      <TeamName name={'팀 이름'}></TeamName>
    </Container>
  );
};

const Container = styled.div``;
