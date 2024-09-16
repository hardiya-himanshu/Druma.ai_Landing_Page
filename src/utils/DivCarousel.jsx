import React, { useState } from 'react';
import ThemeWrapper from './ThemeWrapper';

const DivCarousel = ({ divItems, darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? divItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === divItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto p-6">
      {/* Div Display */}
      <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
        {divItems[currentIndex]}
      </div>

      {/* Left Icon */}
      <div
        className={`absolute top-1/2 left-2 -translate-y-1/2 ${darkMode?"bg-customDark2 hover:bg-blue-800 text-white":"bg-white hover:bg-gray-200"}  p-2 rounded-full cursor-pointer  transition border-black border-2`}
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

      </div>

      {/* Right Icon */}
      <div
        className={`absolute top-1/2 right-2 -translate-y-1/2 ${darkMode?"bg-customDark2 hover:bg-blue-800 text-white":"bg-white hover:bg-gray-200"}  p-2 rounded-full cursor-pointer  transition border-black border-2`}
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

      </div>

      {/* Dots (optional, for indicating current slide) */}
      <div className="flex justify-center mt-4">
        {divItems.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeWrapper(DivCarousel);
