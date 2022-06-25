import { Button } from "@sharedComponents/Button";
import { Input } from "@sharedComponents/Input";
import { Spacing } from "@sharedComponents/Spacing";
import React, { useState } from "react";
import styled from "styled-components";

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

  const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const curDate = new Date(Date.now() - timezoneOffset)
    .toISOString()
    .slice(0, 16);

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
    <Form onSubmit={handleSubmit}>
      <Title>팀명</Title>
      <Input
        name="name"
        onChange={handleInputChange}
        value={inputs.name}
        placeholder="ex) 일팔일팔"
      ></Input>
      <Title>공동 목표</Title>
      <Input
        name="goal"
        onChange={handleInputChange}
        value={inputs.goal}
        placeholder="ex) 와이어프레임 완성하기"
      ></Input>
      <Title>시간 설정</Title>
      <Flex>
        <div>시작 시간</div>
        <Input
          name="startAt"
          type="datetime-local"
          defaultValue={curDate}
          onChange={handleInputChange}
        ></Input>
      </Flex>
      <Flex>
        <div>종료 시간</div>
        <Input
          name="endAt"
          type="datetime-local"
          defaultValue={curDate}
          onChange={handleInputChange}
        ></Input>
      </Flex>
      <Title>유튜브 URL</Title>
      <Input
        name="musicUrl"
        type="url"
        onChange={handleInputChange}
        value={inputs.musicUrl}
        placeholder="ex) https://www.youtube.com/watch?v=L0kqoqV_Nfw"
      ></Input>
      <Title>비밀번호 입력</Title>
      <Input
        name="password"
        type="password"
        onChange={handleInputChange}
        value={inputs.password}
        placeholder="비밀번호를 입력해주세요."
      ></Input>
      <Spacing height={4}></Spacing>
      <Button type="submit">방 만들기</Button>
      <Spacing height={1}></Spacing>
    </Form>
  );
};

const Form = styled.form`
  margin: 2rem;
`;

const Title = styled.form`
  font-size: 1.4rem;
  margin-top: 5.2rem;
  font-weight: 600;
`;

const Flex = styled.form`
  display: flex;
  div {
    min-width: max-content;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin: 0 1.6rem;
  }
`;
