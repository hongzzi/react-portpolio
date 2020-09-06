import React, { Fragment } from 'react';
import styled from 'styled-components';

import Contents from '../Contents';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Contents />
            <Footer />
        </Fragment>
    )
}

export default Layout;