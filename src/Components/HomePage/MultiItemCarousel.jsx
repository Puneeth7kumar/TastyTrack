"use client"
import dynamic from 'next/dynamic';

// Dynamically import Slider with SSR disabled
const Slider = dynamic(() => import('react-slick'), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topMeels } from './topMeel';
import CarouselItem from './CarouselItem';

const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };
    return (
        <div>
            <Slider {...settings}>
                {topMeels.map((item, index) => (
                    <CarouselItem
                        key={index}
                        image={item.image}
                        title={item.title}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default MultiItemCarousel;
