import styled from 'styled-components';

interface TeamMissionProps {
  content: string;
}

export const TeamMission = ({ content }: TeamMissionProps) => {
  return (
    <Container>
      <p>{content}</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: skyblue;
`;
