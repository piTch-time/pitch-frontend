import styled from "styled-components";
import svgImg from "../assets/images/TopCont.svg";

interface CenterProps {
  children: any;
}

export const TopCont = ({ children }: CenterProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div<CenterProps>`
  background-image: url(${svgImg});
  background-size: cover;
  border-radius: 0px 0px 15px 15px;
  height: 12rem;
  color: white;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  align-items: flex-end;
  padding: 2rem;
`;
