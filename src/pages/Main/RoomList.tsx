import styled from 'styled-components';

export const RoomList = ({ list }: { list: any[] }) => {
  const renderedList =
    list &&
    list.map((room) => {
      return (
        <Container key={room.id}>
          <FlexBet>
            <Name>{room.name}</Name>
            <Tag>🕖 {room.startEnd}</Tag>
          </FlexBet>
          <div>{room.goal}</div>
          <Progress>
            <div>진행상황</div>
            <FontColor>({room.taskProgress}%)</FontColor>
          </Progress>
          <ProgressBar done={room.taskProgress}></ProgressBar>
        </Container>
      );
    });

  return <>{renderedList}</>;
};

const Container = styled.div`
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.05));
  background: #f9fafb;
  border-radius: 15px;
  margin: 1.6rem 2rem;
  padding: 1.8rem 2.4rem;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
`;

const FlexBet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const Tag = styled.div`
  background: #ff8b8b;
  border-radius: 20px;
  color: white;
  padding: 0.4rem 0.6rem;
  margin-left: 0.4rem;
`;

const FontColor = styled.div`
  color: #ff6a53;
  margin-left: 0.4rem;
`;

const Progress = styled.div`
  font-weight: bold;
  font-size: 0.8rem;
  display: flex;
  margin-top: 2.2rem;
  margin-bottom: 0.6rem;
`;

export const ProgressBar = styled.div`
  background: linear-gradient(
    90deg,
    #ff5353 ${({ done }: { done: number }) => done}%,
    #f1f2f6 ${({ done }: { done: number }) => done}%
  );
  border-radius: 3rem;
  height: 0.6rem;
`;
