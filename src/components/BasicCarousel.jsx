
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function BasicCarousel() {
    const items = [
        <img
            key="1"
            src="https://images.unsplash.com/photo-1731462385471-90cf5aa51848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="Wooden Path"
            className="carousel-image"
        />,
        <img
            key="2"
            src="https://images.unsplash.com/photo-1731569348001-e49c36947289?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
            alt="Flowers"
            className="carousel-image"
        />,
        <img
            key="3"
            src="https://images.unsplash.com/photo-1731640275202-28a40f7edd04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"
            alt="Food Plate"
            className="carousel-image"
        />,
    ];

    return (
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    );
}

export default BasicCarousel;
