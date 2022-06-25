import styled from "styled-components";

type buttonType = {
  children: any;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: buttonType) => {
  return <BottomButton onClick={onClick}>{children}</BottomButton>;
};

const BottomButton = styled.button`
  display: flex;
  width: 100%;
  height: 7.6rem;
  border: none;
  margin: 0 2rem;
  background: #9ba9f0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
`;
