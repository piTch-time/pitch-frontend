import { TopCont } from "@sharedComponents/TopCont";
import { CreateRoomInput } from "./CreateRoomInput";

export const CreateRoom = () => {
  return (
    <>
      <TopCont>
        1분만에 <br /> 방 만들기
      </TopCont>
      <div>{<CreateRoomInput />}</div>
    </>
  );
};
