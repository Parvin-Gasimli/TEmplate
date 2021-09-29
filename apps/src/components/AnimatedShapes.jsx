import React from 'react'
import styled from 'styled-components'

const Square=styled.div`
height: 60px;
background-color: #4e6bff;
opacity: 0.7;
width: 60px;
position: absolute;
top: -50px;
left: -50px;
z-index:-1 ;
animation-name: square;
animation: square 25s linear ;
-o-animation-timing-function: step-start;

@keyframes square {
    to{
        transform: translate(50vw,100vh);
    }
}
`


const Circle=styled.div`
height: 100px;
background-color: #4e6bff;
opacity: 0.7;
width: 100px;
position: absolute;
border-radius: 50%;
top: 200px;
left: -100px;
z-index:-1 ;
animation-name: circle;
animation: circle 25s linear ;
@keyframes circle {
    to{
        transform: translate(750vw,100vh);
    }
}
`

const Rect=styled.div`
height: 100px;
background-color: #669966;
opacity: 0.5;
width: 50px;
position: absolute;

top: 400px;
left: -50px;
z-index:-1 ;
animation-name: circle;
animation: circle 25s linear ;
@keyframes circle {
    to{
        transform: translate(100vw,-50vh);
    }
}`

const AnimatedShapes = () => {
    return (
        <> 
        <Square/>
        <Circle/>
        <Rect/>
        </>
       
    )
}

export default AnimatedShapes
