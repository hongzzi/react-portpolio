import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';

const App = () => {
    return (
        <AppContainer>
            <GlobalStyle />
            <Layout />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default App;