/* eslint-disable */
import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function ControlledCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null); // Reference to the AliceCarousel instance

    const items = [
        <img src="https://via.placeholder.com/300x200" alt="Slide 1" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />,
    ];

    const handleSlideChange = (e) => {
        setCurrentIndex(e.item);
    };

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    return (
        <div>
            <AliceCarousel
                ref={carouselRef}
                items={items}
                activeIndex={currentIndex}
                onSlideChanged={handleSlideChange}
                infinite
            />
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
}

export default ControlledCarousel;
