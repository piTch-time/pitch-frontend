import styled, { css, CSSProperties } from "styled-components";

interface SpacingProps {
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export const Spacing = ({ width, height, style }: SpacingProps) => {
  return <Container width={width} height={height} style={style}></Container>;
};

const Container = styled.div<SpacingProps>`
  ${({ width }) => {
    if (width) {
      return css`
        width: ${width}rem;
      `;
    } else {
      return css`
        width: 100%;
      `;
    }
  }}

  ${({ height }) => {
    if (height) {
      return css`
        height: ${height}rem;
      `;
    } else {
      return css`
        height: 100%;
      `;
    }
  }}
`;
