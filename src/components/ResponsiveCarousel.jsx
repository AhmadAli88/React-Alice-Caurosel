/*eslint-disable*/
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function ResponsiveCarousel() {
    const items = [
        <img src="https://images.unsplash.com/photo-1731462385471-90cf5aa51848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1"   className="carousel-image" />,
        <img src="https://images.unsplash.com/photo-1731569348001-e49c36947289?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 2"   className="carousel-image"/>,
        <img src="https://images.unsplash.com/photo-1731640275202-28a40f7edd04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3"   className="carousel-image"/>,
        <img src="https://images.unsplash.com/photo-1731828406294-d63aa25ab075?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D" alt="Slide 4"   className="carousel-image"/>,
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
