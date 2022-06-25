import { Spacing } from '@sharedComponents/Spacing';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import clock from '@assets/images/clock.png';

export const Timer = () => {
  // 예상되는 time input
  // "2020-10-10T14:58:04+09:00"

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const playTimer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) clearInterval(playTimer);
          else {
            setHours(hours - 1);
            setMinutes(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(playTimer);
  }, [minutes, seconds]);
  return (
    <Container>
      <TimerArea>
        <Spacing height={2.4}></Spacing>
        <Clock src={clock}></Clock>
        <Spacing height={0.8}></Spacing>
        <Time>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
          {String(seconds).padStart(2, '0')}
        </Time>
      </TimerArea>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 11.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimerArea = styled.div`
  width: 30rem;
  height: 100%;
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Clock = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const Time = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  line-height: 150%;
  /* or 45px */

  text-align: center;

  color: #29396f;
`;
