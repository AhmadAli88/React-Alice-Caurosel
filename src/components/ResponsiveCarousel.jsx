/*eslint-disable*/
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function ResponsiveCarousel() {
    const items = [
        <img src="https://via.placeholder.com/300x200" alt="Slide 1" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />,
        <img src="https://via.placeholder.com/300x200" alt="Slide 4" />,
    ];

    const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
    };

    return (
        <AliceCarousel
            items={items}
            responsive={responsive}
            autoPlay
            infinite
        />
    );
}

export default ResponsiveCarousel;
