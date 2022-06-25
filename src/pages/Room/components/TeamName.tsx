import styled from 'styled-components';

interface TeamNameProps {
  name: string;
}

export const TeamName = ({ name }: TeamNameProps) => {
  return <Container>{name}</Container>;
};

const Container = styled.div`
  margin-left: 2rem;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 2rem;
  line-height: 150%;
  color: #161853;
  background-color: #f5f5f5;
`;
