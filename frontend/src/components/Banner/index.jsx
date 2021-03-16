import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://static.topcv.vn/img/Imap-tuyen-dung.jpg',
 
  },
  {
    src: 'https://static.topcv.vn/img/MSB%20Top.jpg',
    
  },
  {
    src: 'https://static.topcv.vn/img/EDUPIA%20-%20Tuy%E1%BB%83n%20D%E1%BB%A5ng%20-%20Chuy%C3%AAn%20Vi%C3%AAn%20Telesale%20T%C6%B0%20V%E1%BA%A5n%20Gi%C3%A1o%20D%E1%BB%A5c%201100x220.jpg',
 
  }
];

const Banner = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="banner__slide">
  
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    
    </div>
  );
}

export default Banner;