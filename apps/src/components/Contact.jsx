import React from "react";
import styled from "styled-components";
import Map from "../Images/map.png";
import Phone from "../Images/Phones.png";
import Send from "../Images/Send.jfif";
const Container = styled.div`
  height: 90%;
`;
const Wrapper = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 50%;
`;
const AdressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Forms = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Inputs = styled.input`
  padding: 20px;
  width: 200px;
`;
const TextAreas = styled.textarea`
  width: 200px;
  height: 60px;
`;
const Button = styled.button`
  padding: 15px;
  border: none;
  color: white;
  background-color: darkblue;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
`;
const Title = styled.h1`
  padding-bottom: 31px;
  width: 400px;
  margin: 0 auto;
  padding-top: 30px;
`;
const AdresItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  align-items: center;
`;
const Icons = styled.img`
  width: 20px;
  margin-right: 20px;
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 13px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <FormContainer>
            <Title>
              Questions? <br />
              Let's Go in Touch
            </Title>
            <Forms>
              <LeftForm>
                <Inputs placeholder="Your Name" />
                <Inputs placeholder="Your E-mail" />
                <Inputs placeholder="Your Subject" />
              </LeftForm>
              <RightForm>
                <TextAreas placeholder="Your Message" />
                <Button>Send</Button>
              </RightForm>
            </Forms>
          </FormContainer>
          <AdressContainer>
            <AdresItem>
              <Icons src={Map} />
              <Text>123.Park Avenue St,Baku,Azerbaijan</Text>
            </AdresItem>
            <AdresItem>
              <Icons src={Phone} />
              <Text>+994 (50) 559 56 56 </Text>
              <Text>+012 (50) 559 56 56 </Text>
            </AdresItem>
            <AdresItem>
              <Icons src={Send} />
              <Text> WebSite@gmail.com</Text>
              <Text> WebSite123@gmail.com</Text>{ "  "}
            </AdresItem>
          </AdressContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;
