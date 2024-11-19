/*eslint-disable*/
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function ControlledCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        <img src="https://via.placeholder.com/300x200" alt="Slide 1" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />,
    ];

    const handleSlideChange = (e) => {
        setCurrentIndex(e.item);
    };

    return (
        <div>
            <AliceCarousel 
                items={items}
                activeIndex={currentIndex}
                onSlideChanged={handleSlideChange}
                infinite
            />
            <button onClick={() => setCurrentIndex((currentIndex - 1 + items.length) % items.length)}>
                Previous
            </button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}>
                Next
            </button>
        </div>
    );
}

export default ControlledCarousel;
