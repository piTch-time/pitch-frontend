import styled from 'styled-components';

interface TeamNameProps {
  name: string;
}

export const TeamName = ({ name }: TeamNameProps) => {
  return <p>{name}</p>;
};

const Container = styled.div`
  background-color: skyblue;
`;
