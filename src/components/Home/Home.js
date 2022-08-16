import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner'
import HomepageMain from '../HomepageMain/HomepageMain'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import Gallery from '../Gallery/Gallery';
import OrderOnline from '../OrderOnline/OrderOnline';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Home = () => {
    return (
        <>
            <HeroBanner />
            <HomepageMain />
            <Menu />
            <Gallery />
            <OrderOnline />
            <ScrollToTop />
            <Footer />
        </>
    )

}

export default Home