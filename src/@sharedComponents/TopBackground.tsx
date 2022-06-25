import styled from 'styled-components';
import svgImg from '../assets/images/Group49.svg';
import { Spacing } from './Spacing';

interface CenterProps {
  timeOver: boolean;
  tot: number;
  done: number;
}

export const TopBackground = ({ timeOver, tot, done }: CenterProps) => {
  return (
    <Container>
      <MainText>
        {' '}
        <Spacing height={5}></Spacing>
        {isNaN(Math.floor(done / tot) * 100)
          ? 0
          : Math.floor(done / tot) * 100}{' '}
        %
      </MainText>
      <Spacing height={15}></Spacing>
      <SubText>목표를 완료했어요!</SubText>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${svgImg});
  background-size: cover;
  border-radius: 0px 0px 15px 15px;
  height: 26rem;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transition: all 2s;
`;

const MainText = styled.div`
  font-weight: 700;
  font-size: 5rem;
  line-height: 150%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SubText = styled.div`
  width: 100%;
  display: flex;
  padding-left: 1rem;
`;
