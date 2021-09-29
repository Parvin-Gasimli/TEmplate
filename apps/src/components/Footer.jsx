import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 35;
  height: 10%;
  background-color: #111;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
`;
const CopyRight = styled.span``;

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <List>
            <ListItem>Guide </ListItem>
            <ListItem>Support </ListItem>
            <ListItem>Api </ListItem>
            <ListItem>Comunity </ListItem>
          </List>
          <CopyRight>Created By Parvin Gasimli</CopyRight>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;
