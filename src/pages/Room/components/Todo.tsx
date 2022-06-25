import { Spacing } from '@sharedComponents/Spacing';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export const Todo = () => {
  const [users, setUsers] = useState<User[]>([]);
  const userInputRef = useRef<HTMLInputElement>(null);
  const taskInputRef = useRef<HTMLInputElement>(null);

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
      userInputRef.current.value = '';
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

  return (
    <Container>
      {users.map((user: User, index: number) => {
        return (
          <>
            <UserContainer key={user.name}>
              <UserName>{user.name} </UserName>
              <Spacing height={0.7}></Spacing>
              <div>
                {user?.taskList?.map((task: task) => (
                  <div>
                    <CheckBox type='checkbox'></CheckBox>
                    <CheckBoxText>{task.description}</CheckBoxText>
                    <Spacing height={0.8}></Spacing>
                  </div>
                ))}

                {user.isInputActive && (
                  <>
                    <CheckBox type='checkbox'></CheckBox>
                    <NewToDoInput
                      ref={taskInputRef}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          createTask(user.name);
                        }
                      }}
                    ></NewToDoInput>
                  </>
                )}
              </div>
              <Spacing height={1.5} />
              <AddGoalButton
                onClick={() => {
                  activateInput(user.name);
                }}
              >
                목표 추가
              </AddGoalButton>
              <Spacing height={2.3}></Spacing>
            </UserContainer>
            <Spacing height={2.1}></Spacing>
          </>
        );
      })}

      <UserInputContainer>
        <UserInput
          ref={userInputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              createUser();
            }
          }}
          placeholder='닉네임을 입력하세요.'
        ></UserInput>
        <UserInputButton
          onClick={() => {
            createUser();
          }}
        >
          <UserInputButtonText>팀원 추가</UserInputButtonText>
        </UserInputButton>
      </UserInputContainer>
    </Container>
  );
};
const CheckBox = styled.input`
  margin-left: 2.7rem;
  margin-right: 1.1rem;
  width: 1.6rem;
  height: 1.6rem;
`;

const CheckBoxText = styled.span`
  height: 1.6rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 100%;
  position: relative;
  top: -0.5rem;
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
  background-color: #f5f5f5;
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
  created_by: User['name'];
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

  background: #9ba9f0;
  border-radius: 1rem;
  border: none;
`;

const UserInputButtonText = styled.p`
  font-style: normal;
  font-weight: 60rem;
  font-size: 1rem;
  line-height: 100%;
  /* identical to box height, or 10px */

  color: #ffffff;
`;

const UserContainer = styled.div`
  background-color: white;

  width: 100%;
`;

const UserName = styled.div`
  margin-left: 2.7rem;
  position: relative;
  top: -1.3rem;
  width: 4.6rem;
  height: 2.6rem;
  background: #b6bee6;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-left: 2.7rem;

  width: 7.6rem;
  height: 2.4rem;

  background: #f1f1f1;
  border-radius: 0.5rem;
`;
