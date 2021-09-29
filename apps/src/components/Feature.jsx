import React from "react";
import styled from "styled-components";
import Phone from "../Images/taxim.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width:480px){
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
 @media only screen and (max-width:480px){
   display: none;
  }
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
flex-direction: column;
justify-content: center;
margin-top: 30px;
@media only screen and (max-width:480px){
  width:100%;}
`;
const Image = styled.img`
  width: 80%;
  
`;
const Title = styled.span`
font-size:70px;`;
const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
color: #333;
@media only screen and (max-width:480px){
  font-size: 45px;
  }
`;
const Desc = styled.p`
font-size:20px;
color: #777;
margin-top: 30px;

`;
const Button = styled.button`
width: 150px;
border: none;
padding:15px 20px ;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 20px;
cursor: pointer;
margin-top: 20px;
`;

const Feature = () => {
  return (<>
    <Container>
      <Left>
        <Image src={Phone} />
      </Left>
      <Right>
        <Title>

         <b>Good</b>  Design <br/>
         <b>Good</b> Buisness

        </Title>
        <SubTitle>

          We know that good means good Buisness
        </SubTitle>
        <Desc>
          We help our Cilents sucsess by creating brand identities Diagram experiences,and print materials that communicate clearly ,archive marketing goals,and look fantastic
        </Desc>
        <Button>Learn more</Button>
        </Right>
        <AnimatedShapes/>

    </Container>
    </>
  );
};

export default Feature;
