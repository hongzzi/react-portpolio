import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <copyWrite>Copyright 2020. 박지홍@hongzzi all rights reserved.</copyWrite>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    height: 5em;
    padding: 2rem;
`

const copyWrite = styled.div`

`

export default Footer;