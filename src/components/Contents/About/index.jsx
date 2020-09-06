import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <Wrapper>
            <DescFirst>Park Ji Hong</DescFirst>
            <Card><Title>Developer</Title></Card>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: linear-gradient(120deg, #EEE7AE, #87BDEB);
    margin: auto;
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
`

const Card = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background: linear-gradient(120deg, #EEE7AE, #87BDEB);
    box-shadow:  20px 20px 60px #73a1c8, 
             -20px -20px 60px #ffffc8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DescFirst = styled.div`
    width: 100%;
    text-align: right;
    color: white;
    font-size: 4rem;
    font-weight: bold;
    opacity: 0.8;
    padding: 1rem;
`

const DescSecond = styled.div`
    width: 100%;
    text-align: left;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    opacity: 0.8;
`


const Title = styled.div`
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-align: right;
    /* opacity: 0.8; */
`

export default About;