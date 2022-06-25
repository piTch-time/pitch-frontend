import { Button } from "@sharedComponents/Button";
import { TopCont } from "@sharedComponents/TopCont";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoomList } from "./RoomList";
import React, { useEffect, useState } from "react";
import { getRooms } from "../../services/user-service";

export const Main = () => {
  const [list, setList] = useState();

  const getData = async () => {
    const lists = await getRooms();
    console.log(lists);
    setList(lists.rooms);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Scroll>
        <TopCont>
          포브스가 선정한 <br /> 세계 최강 타임어택 노동요
        </TopCont>
        <div>
          <Title>🔥 지금 활발한 방</Title>
          {list && <RoomList list={list} />}
        </div>
      </Scroll>
      <Link to="/room/create">
        <Button>팀 만들기</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Scroll = styled.div`
  overflow: auto;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 2rem 1rem;
`;
