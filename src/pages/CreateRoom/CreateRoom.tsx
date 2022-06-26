import { Link } from "react-router-dom";
import { TopCont } from "@sharedComponents/TopCont";
import { CreateRoomInput } from "./CreateRoomInput";

export const CreateRoom = () => {
  return (
    <>
      <TopCont>
        1분만에 <br /> 방 만들기
      </TopCont>
      {/* <Link to="/room"> */}
      <div>{<CreateRoomInput />}</div>
      {/* </Link> */}
    </>
  );
};
