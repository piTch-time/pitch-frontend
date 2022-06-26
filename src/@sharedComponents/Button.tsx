import styled from "styled-components";

type buttonType = {
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

export const Button = ({ children, type, onClick }: buttonType) => {
  return (
    <BottomButton type={type} onClick={onClick}>
      {children}
    </BottomButton>
  );
};

const BottomButton = styled.button`
  display: flex;
  width: 100%;
  height: 7.6rem;
  min-height: 6rem;
  cursor: pointer;
  border: none;
  background: #9ba9f0;
  border-radius: 10px;
  border: 2px solid #81afd9;
  background: #fcfcfc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;

  &:hover {
    background: linear-gradient(
      58.62deg,
      rgba(129, 175, 217, 0.8) 10.6%,
      rgba(101, 135, 255, 0.8) 95.93%
    );
  }
`;
