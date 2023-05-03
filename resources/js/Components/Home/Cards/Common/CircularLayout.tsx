import React, { useEffect, useRef } from 'react';

const CircularLayout = ({ children }) => {
  const circleContainerRef = useRef(null);

  useEffect(() => {
    const circleContainer = circleContainerRef.current;
    const circleItems = circleContainer.children;
    const totalItems = circleItems.length;

    Array.from(circleItems).forEach((item, index) => {
      const angle = 180 / (totalItems - 1) * index; // Change the angle calculation for a semi-circle
      const radius = circleContainer.clientWidth / 1 - item.clientWidth / 1;

      const x = radius * Math.cos(angle * Math.PI / 280);
      const y = radius * Math.sin(angle * Math.PI /280);

      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, []);

  return (
    <div className="relative w-[100px] h-[100px]" ref={circleContainerRef}>
      {children}
    </div>
  );
};

export default CircularLayout;
