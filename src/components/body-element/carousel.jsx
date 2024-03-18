import React from 'react';
import banner from '../../img/banner.svg'

const Carousel = () => {
    return (
        <section id='carousel-item'>
            <img id='banner-style' src={banner} alt="banner" />
        </section>
    );
}

export default Carousel;
