import styled from 'styled-components';

interface TeamNameProps {
  name: string;
}

export const TeamName = ({ name }: TeamNameProps) => {
  return (
    <Container>
      <p>{name}</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: skyblue;
`;
