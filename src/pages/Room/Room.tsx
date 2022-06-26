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
import { TopCont } from '@sharedComponents/TopCont';
import { useState } from 'react';
import { TopBackground } from '@sharedComponents/TopBackground';

export const Room = () => {
  const [tot, setTot] = useState(0);
  const [done, setDone] = useState(0);
  const [timeOver, setTimeOver] = useState<boolean>(false);

  return (
    <Container>
      {timeOver && <TopBackground timeOver={timeOver} tot={tot} done={done} />}
      <Spacing height={5.6} />
      <TeamName name={'팀 이름'} />
      <Spacing height={0.8} />
      <TeamMission content={'팀 목표'} />
      <Spacing height={2.4} />
      <Slider {...settings}>
        <Timer setTimeOver={setTimeOver} />
        <YoutubeContainer />
      </Slider>
      <Spacing height={3.2} />
      <ToGoalText>
        ✅ 목표 달성까지{' '}
        {isNaN(100 - Math.floor((done / tot) * 100))
          ? 100
          : 100 - Math.floor((done / tot) * 100)}
        % 남았어요!
      </ToGoalText>

      <Spacing height={2.4} />
      <Center>
        <ProgressBarContainer>
          <ProgressBar tot={tot} done={done} />
        </ProgressBarContainer>
      </Center>
      <Spacing height={5.3} />
      <PersonalGoalText>📌 개인 목표</PersonalGoalText>
      <Spacing height={3} />
      <Todo setTot={setTot} setDone={setDone}></Todo>
    </Container>
  );
};

interface ProgressBarProps {
  tot: number;
  done: number;
}

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
`;

const ToGoalText = styled.p`
  margin-left: 3em;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4em;
  line-height: 100%;
  /* identical to box height, or 14px */

  color: #29396e;
`;

const ProgressBarContainer = styled.div`
  width: 32rem;
  height: 1.2rem;
  background: #f1f1f1;
  border-radius: 3rem;
`;

const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ tot, done }) => {
    if (tot === 0 && done == 0) {
      return 0;
    }
    return (done / tot) * 32;
  }}rem;
  height: 1.2rem;
  background: linear-gradient(270deg, #ff5353 0%, #ff4f79 100%);
  border-radius: 3rem;
  transition: all 0.5s;
`;

const PersonalGoalText = styled.div`
  margin-left: 3rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 100%;
  /* identical to box height, or 14px */

  color: #29396e;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
