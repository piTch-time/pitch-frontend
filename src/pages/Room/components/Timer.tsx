import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

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
          clearInterval(playTimer);
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
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </Container>
  );
};

const Container = styled.div``;
