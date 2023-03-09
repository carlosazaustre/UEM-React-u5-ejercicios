import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  background-color: ${({ isOpen }) => (isOpen ? "green" : "red")};
  color: white;
  font-size: 16px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isOpen }) => (isOpen ? "darkgreen" : "darkred")};
  }
`;

const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid red;
  padding: 8px;
  margin-top: 8px;
  list-style: none;
`;

const ListItem = styled.li`
  margin: 8px 0;
  color: black;
  &:hover {
    background-color: lightgray;
  }
`;

export function DropdownMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
      {isOpen ? (
        <List>
          {items?.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      ) : null}
    </Wrapper>
  );
}
