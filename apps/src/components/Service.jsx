import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../Images/lady.png'
import MiniCard from './MiniCard'


const Video=styled.video`
 display: ${props=>!props.open&&"none"}; 
height: 300px;
    position: absolute;
    top: 129px;
    bottom: 0;
    margin: auto;
    left: 380px;
    
    width: 371px;

`


const Container=styled.div`
    display: flex;
    padding-top: 100px;
    height: 100%;
    @media only screen and (max-width:480px){
        flex-direction: column;
}
`
const Left=styled.div`
position: relative;
 width:50%;
 @media only screen and (max-width:480px){
  display: none;
  }
`

const Right=styled.div`
  width: 50%;
  @media only screen and (max-width:480px){
  width: 100%;
  }
`
const Image=styled.img`
display: ${props=>props.open&&"none"};
    max-width: 66%;
height: 100%;
`
const Wrapper =styled.div`
padding: 50px;
display: flex;
flex-direction: column;
@media only screen and (max-width:480px){
  padding: 20px;
  width: 100%;
}

`
const Title=styled.h1`

`
const Desc=styled.p`
    margin-top: 30px;
    font-size: 17px;
    font-weight: 400;
    line-height: 34px;
color: #555;
`
const CardContainer=styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;

`

const Button=styled.button`

width: 180px;
border: none;
border-radius: 10px;
background-color: darkblue;
color: white;
font-size: 20px;
padding: 15px;
margin-top: 50px;
cursor: pointer;
`

const Service = () => {
    const [open,Setopen]=useState(false)
    return (
      <>
      <Container>
          <Left>
              <Image open={open} src={How}/>
              <Video autoPlay loop controls  open={open}  src="https://www.youtube.com/watch?v=RBtlPT23PTM&list=RDMM&start_radio=1&rv=4Ez4JMFIg4Q"/>
          </Left>
          <Right>
              <Wrapper>
                  <Title>
                      Simple process to start

                  </Title>
                  <Desc>
                      We Provide digital experience to startups and small buisness to looking for a parthner of their digital media,
      
                  </Desc>
                  <CardContainer>
                      <MiniCard/>
                      <MiniCard/>
                      <MiniCard/>

                  </CardContainer>
                  <Button onClick={()=>Setopen(true)}>
                     
                      How it works </Button>
              </Wrapper>
          </Right>

      </Container>
      </>
    )
}

export default Service
