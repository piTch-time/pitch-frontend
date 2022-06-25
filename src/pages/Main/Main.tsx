import React from "react";
import { RoomList } from "./RoomList";

export const Main = () => {
  const list = [
    {
      id: "sdfsdf",
      name: "팀명",
      startEnd: "15-18",
      memberCount: 4,
      goal: "목표는 일찍 끝내는 것이다 자고싶다 졸리다",
      taskProgress: 35,
    },
    {
      id: "sdfsdf",
      name: "팀명",
      startEnd: "15-18",
      memberCount: 4,
      goal: "집에보내줘집에보내줘집에보내줘집에보내줘",
      taskProgress: 35,
    },
  ];

  return (
    <>
      <div>포브스가 선정한 세계 최강 타임어택 노동요</div>
      <div>🔥 지금 활발한 방</div>
      <RoomList list={list} />
      <button>팀 만들기</button>
    </>
  );
};
