import { Spacing } from '@sharedComponents/Spacing';
import styled, { CSSProperties } from 'styled-components';
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
      <Spacing height={5.3} />

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
