import styled from "styled-components";

export const RoomList = ({ list }: { list: any[] }) => {
  const renderedList =
    list &&
    list.map((room) => {
      return (
        <Container key={room.id}>
          <FlexBet>
            <Name>{room.name}</Name>
            <Flex>
              <Tag>🕖{room.startEnd}</Tag>
              <Tag>{room.memberCount}명 참여 중</Tag>
            </Flex>
          </FlexBet>
          <div>{room.goal}</div>
          <Progress>진행상황 ({room.taskProgress}%)</Progress>
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
  margin: 0.8rem 2rem;
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

const Flex = styled.div`
  display: flex;
`;

const Tag = styled.div`
  background: #b6bee6;
  border-radius: 20px;
  color: white;
  padding: 0.4rem 0.6rem;
  margin-left: 0.4rem;
`;

const Progress = styled.div`
  font-weight: bold;
  font-size: 0.8rem;
  margin-top: 2.2rem;
  margin-bottom: 0.6rem;
`;

const ProgressBar = styled.div`
  background: linear-gradient(
    90deg,
    #b6bee6 ${({ done }: { done: number }) => done}%,
    #f1f2f6 ${({ done }: { done: number }) => done}%
  );
  border-radius: 3rem;
  height: 0.6rem;
`;
