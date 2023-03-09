// Crea  un  componente  de  tarjeta  que  utilice  styled-components  y  que  tenga  diferentes
// estilos según el tamaño de la tarjeta (por ejemplo, pequeña, mediana, grande).
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  color: black;
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  margin: 16px;
  ${(props) =>
    props.size === "small" &&
    css`
      width: 200px;
      min-height: 200px;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 300px;
      min-height: 350px;
    `}
  ${({ size }) =>
    size === "large" &&
    css`
      width: 400px;
      min-height: 500px;
    `}
`;

const Title = styled.h2`
  font-size: ${({ size }) => (size === "small" ? "24px" : "36px")};
  margin-botton: 16px;
`;

const Content = styled.p`
  font-size: 16px;
`;

export function Card({ size = "small", title, content }) {
  return (
    <Wrapper size={size}>
      <Title size={size}>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
}
