import { useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export const Todo = () => {
  const [users, setUsers] = useState<User[]>([]);
  const userInputRef = useRef<HTMLInputElement>(null);

  const createUser = () => {
    if (userInputRef && userInputRef.current) {
      setUsers([
        ...users,
        { id: Date.now(), name: userInputRef.current.value, todoList: [] },
      ]);
      userInputRef.current.value = '';
    }
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
        return <div>{user.name}</div>;
      })}
    </Container>
  );
};
const Container = styled.div``;

const UserInput = styled.input``;

interface User {
  id: number;
  name: string;
  todoList: task[];
}

interface task {
  id: number;
  description: string;
  isDone: boolean;
}
