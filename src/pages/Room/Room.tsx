import { Spacing } from '@sharedComponents/Spacing';
import styled, { CSSProperties, StyledProps } from 'styled-components';
import { TeamMission } from './components/TeamMission';
import { TeamName } from './components/TeamName';
import { Timer } from './components/Timer';
import { Todo } from './components/Todo';
import { YoutubeContainer } from './components/YoutubeContainer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Room = () => {
  return (
    <Container>
      <Spacing height={5.6} />
      <TeamName name={'팀 이름'} />
      <Spacing height={0.8} />
      <TeamMission content={'팀 목표'} />
      <Spacing height={2.4} />
      <Slider {...settings}>
        <Timer />
        <YoutubeContainer />
      </Slider>

      <Spacing height={3.2} />
      <ToGoalText>✅ 목표 달성까지 74% 남았어요!</ToGoalText>

      <Spacing height={2.4} />
      <Center>
        <ProgressBar></ProgressBar>
      </Center>
      <Spacing height={5.3} />
      <PersonalGoalText>📌 개인 목표</PersonalGoalText>
      <Spacing height={3} />
      <Todo></Todo>
    </Container>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const BackgroundColor: CSSProperties = {
  backgroundColor: '#f5f5f5',
};

const ToGoalText = styled.p`
  margin-left: 3em;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4em;
  line-height: 100%;
  /* identical to box height, or 14px */
  background-color: #f5f5f5;
  color: #29396e;
`;

const ProgressBar = styled.div`
  width: 32rem;
  height: 1.2rem;
  background-color: #b6bee6;
`;

const PersonalGoalText = styled.div`
  margin-left: 3rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 100%;
  /* identical to box height, or 14px */
  background-color: #f5f5f5;
  color: #29396e;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
