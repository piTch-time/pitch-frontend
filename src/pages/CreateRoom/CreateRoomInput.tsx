import { Input } from "@sharedComponents/Input";
import React, { useState } from "react";

interface RoomInputs {
  name: string; // 팀명(방 이름)
  password: string; // 비밀번호
  goal: string; // 공동 목표
  startAt: string;
  endAt: string;
  musicUrl: string;
}

export const CreateRoomInput = () => {
  const initialValues: RoomInputs = {
    name: "",
    password: "",
    goal: "",
    musicUrl: "",
    startAt: new Date().toISOString(),
    endAt: new Date().toISOString(),
  };
  const [inputs, setInputs] = useState<RoomInputs>(initialValues);

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>팀명</div>
      <Input
        name="name"
        onChange={handleInputChange}
        value={inputs.name}
        placeholder="ex) 일팔일팔"
      ></Input>
      <div>공동 목표</div>
      <Input
        name="goal"
        onChange={handleInputChange}
        value={inputs.goal}
        placeholder="ex) 와이어프레임 완성하기"
      ></Input>
      <div>시간 설정</div>
      <Input
        name="startAt"
        type="datetime-local"
        defaultValue={new Date().toISOString().slice(0, 16)}
        onChange={handleInputChange}
      ></Input>
      <Input
        name="endAt"
        type="datetime-local"
        defaultValue={new Date().toISOString().slice(0, 16)}
        onChange={handleInputChange}
      ></Input>
      <div>유튜브 URL</div>
      <Input
        name="musicUrl"
        type="url"
        onChange={handleInputChange}
        value={inputs.musicUrl}
        placeholder="ex) https://www.youtube.com/watch?v=L0kqoqV_Nfw"
      ></Input>
      <div>비밀번호 입력</div>
      <Input
        name="password"
        type="password"
        onChange={handleInputChange}
        value={inputs.password}
        placeholder="비밀번호를 입력해주세요."
      ></Input>
      <button type="submit">방 만들기</button>
    </form>
  );
};
