import { Spacing } from "@sharedComponents/Spacing";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled, { CSSProperties } from "styled-components";

interface TodoProps {
  setTot: any;
  setDone: any;
  timeOver: boolean;
}

export const Todo = ({ setTot, setDone, timeOver }: TodoProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const userInputRef = useRef<HTMLInputElement>(null);
  const taskInputRef = useRef<HTMLInputElement>(null);
  const checkBoxRef = useRef<HTMLInputElement>(null);

  const [totalTask, setTotalTask] = useState<number>(0);
  const [doneTask, setDoneTask] = useState<number>(0);

  const createUser = () => {
    if (userInputRef && userInputRef.current) {
      setUsers([
        ...users,
        {
          name: userInputRef.current.value,
          taskList: [],
          isInputActive: false,
        },
      ]);
      userInputRef.current.value = "";
    }
    console.log(users);
  };

  const createTask = (name: string) => {
    if (taskInputRef && taskInputRef.current) {
      const taskOwner = users.filter((user: User) => {
        if (user.name === name) return true;
        else return false;
      })[0];

      const newTask = taskInputRef.current.value;

      const newUsers = users.map((user: User) => {
        if (user.name !== name) {
          return user;
        } else
          return {
            name: name,
            taskList: [
              ...user.taskList,
              {
                id: String(Date.now()),
                created_by: user.name,
                description: newTask,
                isDone: false,
              },
            ],
            isInputActive: false,
          };
      });

      setUsers(newUsers);
    }
  };

  const activateInput = (name: string) => {
    const newUsers = users.map((user: User) => {
      if (user.name !== name) {
        return user;
      } else
        return {
          name: user.name,
          taskList: user.taskList,
          isInputActive: true,
        };
    });
    setUsers(newUsers);
  };

  const toggleDone = (task: task) => {
    const taskOwner = users.filter((user: User) => {
      let flag = false;
      user.taskList.forEach((usertask: task) => {
        if (usertask.id === task.id) {
          flag = true;
        }
      });
      return flag;
    })[0];

    const newTaskList = taskOwner.taskList.map((targetTask: task) => {
      if (targetTask.id === task.id) {
        return { ...targetTask, isDone: !targetTask.isDone };
      } else {
        return targetTask;
      }
    });

    const newUser = {
      ...taskOwner,
      taskList: newTaskList,
    };

    const newUsers = users.map((targetUser: User) => {
      if (targetUser.name === newUser.name) {
        return newUser;
      } else {
        return targetUser;
      }
    });

    setUsers(newUsers);
  };

  const taskCount = () => {
    let done = 0;
    let total = 0;
    users.map((user: User) => {
      user.taskList.forEach((task: task) => {
        total++;
        if (task.isDone) done++;
      });
    });
    setDoneTask(done);
    setTotalTask(total);
    setDone(done);
    setTot(total);
  };
  useEffect(() => {
    taskCount();
  }, [createTask, toggleDone]);

  return (
    <Container>
      {users.map((user: User, index: number) => {
        return (
          <>
            <Spacing height={2} style={BackgroundColor}></Spacing>
            <UserContainer key={user.name}>
              <UserName>{user.name} </UserName>
              <Spacing height={0.7}></Spacing>
              <div>
                {user?.taskList?.map((task: task) => (
                  <div>
                    <CheckBox
                      type="checkbox"
                      ref={checkBoxRef}
                      onClick={() => {
                        toggleDone(task);
                      }}
                    ></CheckBox>
                    {!task.isDone && (
                      <CheckBoxText>{task.description}</CheckBoxText>
                    )}
                    {task.isDone && (
                      <CheckBoxTextChecked>
                        {task.description}
                      </CheckBoxTextChecked>
                    )}
                    <Spacing height={0.8}></Spacing>
                  </div>
                ))}

                {user.isInputActive && (
                  <>
                    <CheckBox type="checkbox"></CheckBox>
                    <NewToDoInput
                      ref={taskInputRef}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          createTask(user.name);
                        }
                      }}
                    ></NewToDoInput>
                  </>
                )}
              </div>
              <Spacing height={1.5} />
              {!timeOver && (
                <AddGoalButton
                  onClick={() => {
                    activateInput(user.name);
                  }}
                >
                  목표 추가
                </AddGoalButton>
              )}
              <Spacing height={1}></Spacing>
              <Spacing height={1} style={BackgroundColor}></Spacing>
            </UserContainer>
            <Spacing height={1} style={BackgroundColor}></Spacing>
          </>
        );
      })}

      {!timeOver && (
        <UserInputContainer>
          <UserInput
            ref={userInputRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                createUser();
              }
            }}
            placeholder="닉네임을 입력하세요."
          ></UserInput>
          <UserInputButton
            onClick={() => {
              createUser();
            }}
          >
            <UserInputButtonText>팀원 추가</UserInputButtonText>
          </UserInputButton>
        </UserInputContainer>
      )}
    </Container>
  );
};

const ButtonImg = styled.img`
  width: 1rem;
  height: 1rem;
`;

const BackgroundColor: CSSProperties = {
  backgroundColor: "#f8f8f8",
};
const CheckBox = styled.input`
  margin-left: 2.7rem;
  margin-right: 1.1rem;
  width: 1.6rem;
  height: 1.6rem;
  accent-color: #ff5d53;
  border: 0.3rem;
`;

const CheckBoxText = styled.span`
  height: 1.6rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 100%;
  position: relative;
  top: -0.5rem;
  /* identical to box height, or 11px */

  color: #29396e;
`;

const CheckBoxTextChecked = styled.span`
  height: 1.6rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 100%;
  position: relative;
  top: -0.5rem;
  text-decoration-line: line-through;
  /* identical to box height, or 11px */

  color: #29396e;
`;

const NewToDoInput = styled.input`
  border: none;
  font-weight: 500;
  font-size: 1.1rem;
  width: 28.6rem;
  height: 1.6rem;
  position: relative;
  top: -0.5rem;
  border-bottom: 1px solid #ebecee;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInput = styled.input`
  width: 25.2rem;
  height: 4.4rem;
  padding-left: 1.4rem;

  background: #e7e9ef;
  border-radius: 1rem;
  border: none;

  &::placeholder {
    font-weight: 500;
    font-size: 1rem;
    line-height: 100%;
    /* identical to box height, or 10px */

    color: #d0d0da;
  }
`;

interface User {
  name: string;
  taskList: task[];
  isInputActive: boolean;
}

interface task {
  id: string;
  created_by: User["name"];
  description: string;
  isDone: boolean;
}

const UserInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserInputButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 5.9rem;
  height: 4.4rem;
  margin-left: 0.8rem;

  background: #fcfcfc;
  border-radius: 1rem;
  border: 1px solid #ff8ba3;
`;

const UserInputButtonText = styled.p`
  font-style: normal;
  font-weight: 60rem;
  font-size: 1rem;
  line-height: 100%;
  /* identical to box height, or 10px */

  color: #ff5d53;
`;

const UserContainer = styled.div`
  background-color: white;

  width: 100%;
`;

const UserName = styled.div`
  margin-left: 7.5vw;
  position: relative;
  top: -1.3rem;
  width: 4.6rem;
  height: 2.6rem;
  background: #ff8ba3;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const AddGoalButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 7.5vw;

  width: 7.6rem;
  height: 2.4rem;

  background: #f1f1f1;
  border-radius: 0.5rem;
`;
