
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function BasicCarousel() {
    const items = [
        <img 
            key="1" 
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx3b29kfGVufDB8fHx8MTYwOTkyOTMzMg&ixlib=rb-1.2.1&q=80&w=800" 
            alt="Wooden Path" 
        />,
        <img 
            key="2" 
            src="https://images.unsplash.com/photo-1517832606290-dbfedf3792b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZsb3dlcnxlbnwwfHx8fDE2MDk5MjkzMzI&ixlib=rb-1.2.1&q=80&w=800" 
            alt="Flowers" 
        />,
        <img 
            key="3" 
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjA5OTI5MzMy&ixlib=rb-1.2.1&q=80&w=800" 
            alt="Food Plate" 
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
