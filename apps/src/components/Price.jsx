import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard'
const Container=styled.div`
padding-top: 100px;
height: 100vh;
display: flex;
justify-content: center;
`

const Price = () => {
    return (
        <>
        <Container>
            <PriceCard/>
            <PriceCard/>
            <PriceCard/>
            

        </Container>
            
        </>
    )
}

export default Price
