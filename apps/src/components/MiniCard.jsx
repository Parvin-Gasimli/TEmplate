import React from "react";
import styled from "styled-components";
import Search from "../Images/search.png";

const Containers = styled.div`
  width: 190px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width:480px){
  width: 50px;
  }
`;
const Image = styled.div`
  width: 20px;
height: 20px;

`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width:480px){
    font-size: 14px;
  }
`;


const MiniCard = () => {
  return (
    <>
      <Containers>
       <Image src={Search}  />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          quisquam corporis qu
        </Text>
      </Containers>
    </>
  );
};

export default MiniCard;
