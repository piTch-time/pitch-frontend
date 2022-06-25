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
      console.log(newUsers);
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
      <UserInput ref={userInputRef}></UserInput>
      <button
        onClick={() => {
          createUser();
        }}
      >
        유저 생성
      </button>
      {users.map((user: User, index: number) => {
        return (
          <div key={user.name}>
            <div>{user.name} </div>
            <div>
              {user?.taskList?.map((task: task) => (
                <div>
                  <input type='checkbox'></input>
                  {task.description}
                </div>
              ))}
              {user.isInputActive && (
                <input
                  ref={taskInputRef}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      createTask(user.name);
                    }
                  }}
                ></input>
              )}
            </div>

            <button
              onClick={() => {
                activateInput(user.name);
              }}
            >
              태스크 생성
            </button>
          </div>
        );
      })}
    </Container>
  );
};
const Container = styled.div``;

const UserInput = styled.input``;

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
