import { Input } from "@sharedComponents/Input";
import React, { useState } from "react";

interface RoomInputs {
  name: string; // 팀명(방 이름)
  password: string; // 비밀번호
  goal: string; // 공동 목표
  musicUrl: string;
}

export const CreateRoom = () => {
  const initialValues: RoomInputs = {
    name: "",
    password: "",
    goal: "",
    musicUrl: "",
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
    <>
      <Input
        name="name"
        onChange={handleInputChange}
        value={inputs.name}
        placeholder="팀명을 입력해주세요."
      ></Input>
      <Input
        name="goal"
        onChange={handleInputChange}
        value={inputs.goal}
        placeholder="공동 목표를 입력해주세요."
      ></Input>
      <Input
        name="musicUrl"
        type="url"
        onChange={handleInputChange}
        value={inputs.musicUrl}
        placeholder="노동요로 사용할 노래의 유튜브 링크를 입력해주세요."
      ></Input>
      <Input
        name="password"
        type="password"
        onChange={handleInputChange}
        value={inputs.password}
        placeholder="비밀번호를 입력해주세요."
      ></Input>
    </>
  );
};
