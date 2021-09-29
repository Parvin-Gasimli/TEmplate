import React from "react";
import styled from "styled-components";
import Woman from "../Images/casal-modelo-png-2.png";
import AnimatedShapes from "../components/AnimatedShapes";

const Container = styled.div`
  height: calc(100vh-50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width:480px){
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 65px;
  @media only screen and (max-width:480px){
  width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  width: 50%;
  @media only screen and (max-width:480px){
  width: 100%;
  font-size: 45px;
  }
`;
const Desc = styled.p`
  font-size: 17px;
  width: 55%;
  margin-top: 20px;
  font-weight: 400;
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-top: 50px;

  justify-content: space-between;
  @media only screen and (max-width:480px){
  width: 100%;
  flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border-color: transparent;
  letter-spacing: 2px;
  cursor: pointer;
  &::hover{
    background-color: white;
    color: black;
  }
  @media only screen and (max-width:480px){
  margin-bottom: 20px;}
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
`;

const Righrt = styled.div`
  width: 40%;
  @media only screen and (max-width:480px){
  display: none;
  }

`;
const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title> Adventure In Creative Page</Title>
        <Desc>
          We believe that desigining products and services in close pternship
          with our cilents is the only way to have a real impact on their
          buisness
        </Desc>

        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone> Call Us (+994) 60-123-23-23</Phone>
            <ContactText> Any questions and Concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Righrt>
        {" "}
        <Image src={Woman} />
      </Righrt>{" "}
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
