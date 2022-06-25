import { RoomInputs } from "@pages/CreateRoom/CreateRoomInput";
import axios from "axios";

const baseUrl = "https://pitch-backend-qytbbgth3q-du.a.run.app/v1"

// rooms
export const getRooms = () => {
  return axios
    .get(baseUrl + "/rooms"
      // ,
      // {
      // headers: {
      //     'Access-Control-Allow-Origin': '*',
      //   'credentials': 'omit'       
      //   // 'Content-Type': 'application/json',
      //   },
      // withCredentials: true,
      // }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);    
    });
};

export const postRooms = (inputs: RoomInputs) => {
  return axios
    .post(baseUrl + "/rooms", inputs)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRoomDetail = (id: string) => {
  return axios
    .get(baseUrl + "/rooms/" + id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// tasks
export const getTasks = (id: string, created_by: string) => {
  return axios
    .get(baseUrl + "/rooms/" + id + "/tasks")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
