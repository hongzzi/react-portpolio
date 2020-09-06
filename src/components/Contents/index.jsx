import React from 'react';
import styled from 'styled-components';

import About from './About';

const Contents = () => {
    return (
        <Wrapper>
            <About />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* padding: 5rem 0 0 0; */
`

export default Contents;