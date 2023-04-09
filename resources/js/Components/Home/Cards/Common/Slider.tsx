import React, { useState, useRef } from 'react';
import '../../../../../assets/style.css'

const Slider = ({ slideItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startTouchX, setStartTouchX] = useState(null);
  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    const index = currentSlide === 0 ? slideItems.length - 1 : currentSlide - 1;
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    const index = currentSlide === slideItems.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(index);
  };

  const handleTouchStart = (event) => {
    console.log('Touch start');
    // alert('d')
    setStartTouchX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    console.log('Touch move');
    const currentTouchX = event.touches[0].clientX;
    const diffX = currentTouchX - startTouchX;

    if (diffX > 5) {
      handlePrevSlide();
      setStartTouchX(null);
    } else if (diffX < -5) {
      handleNextSlide();
      setStartTouchX(null);
    }
  };

  const handleTouchEnd = () => {
    console.log('Touch end');
    setStartTouchX(null);
  };

  return (
    <div className="slider" ref={sliderRef}>
      {slideItems.map((slideItem, index) => (
        <div key={index} className={`slide-item ${currentSlide === index ? 'active' : ''}`}>
          <img src={slideItem.image} alt={slideItem.alt} />
        </div>
      ))}
      <button className="prev-button" onClick={handlePrevSlide}>Prev</button>
      <button className="next-button" onClick={handleNextSlide}>Next</button>
      <div
        className="swipe-area"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      ></div>
    </div>
  );
};

export default Slider;
