/*eslint-disable*/
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function CustomCarousel() {
    const items = [
        <img src="https://via.placeholder.com/300x200" alt="Slide 1" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />,
    ];

    const thumbnails = items.map((item, i) => (
        <button key={i} onClick={() => handleThumbnailClick(i)}>
            {i + 1}
        </button>
    ));

    const handleThumbnailClick = (index) => {
        carouselRef.current.slideTo(index);
    };

    const carouselRef = React.createRef();

    return (
        <div>
            <AliceCarousel
                items={items}
                ref={carouselRef}
                autoPlay
                infinite
                disableDotsControls
            />
            <div>{thumbnails}</div>
        </div>
    );
}

export default CustomCarousel;
