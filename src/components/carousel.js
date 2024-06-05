import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: 'https://techsharks.in/wp-content/uploads/2023/05/tudd.jpg',
      caption: '',
    },
    {
      id: 2,
      image: 'https://techsharks.in/wp-content/uploads/2023/05/jagwings-logo.jpg',
      caption: '',
    },
    {
      id: 3,
      image: 'https://techsharks.in/wp-content/uploads/2023/05/mot.jpg',
      caption: '',
    },
    {
      id: 4,
      image: 'https://techsharks.in/wp-content/uploads/2023/05/Desi-roots-Logo-1.jpg',
      caption: '',
    },
    {
      id: 5,
      image: 'https://techsharks.in/wp-content/uploads/2023/05/Pretsnak-Logo-01-1-1536x1040-1.jpg',
      caption: '',
    },
    {
      id: 6,
      image: 'https://techsharks.in/wp-content/uploads/2023/05/otaku-logo.jpg',
      caption: '',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we're at the last possible set of 3 slides, go back to the start
        if (prevIndex >= slides.length - 3) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative flex items-center justify-center gap-4 w-[80vh] mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 p-4 w-1/3 h-40">
            <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;