import styled, { CSSProperties } from "styled-components";

type inputType = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  name?: string;
  type?: string;
  onChange: any;
};

export const Input = ({
  placeholder,
  value,
  defaultValue,
  name,
  type,
  onChange,
}: inputType) => {
  return (
    <InputComponent
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      name={name}
      type={type}
      onChange={onChange}
    ></InputComponent>
  );
};

const defaultStyle: CSSProperties = {};

const InputComponent = styled.input<inputType>`
  width: 100%;
  height: 2rem;
  margin: 0.4rem 0;
  padding: 0.4rem;
  font-size: 1.1rem;
  border: none;
  border-bottom: 1px solid #585eff;
  display: flex;
`;
