import styled, { CSSProperties } from "styled-components";

type inputType = {
  placeholder: string;
  value?: string;
  name?: string;
  type?: string;
  width?: number;
  onChange: any;
};

export const Input = ({
  placeholder,
  value,
  name,
  type,
  width,
  onChange,
}: inputType) => {
  return (
    <InputComponent
      placeholder={placeholder}
      value={value}
      name={name}
      type={type}
      width={width}
      onChange={onChange}
    ></InputComponent>
  );
};

const defaultStyle: CSSProperties = {};

const InputComponent = styled.input<inputType>`
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
