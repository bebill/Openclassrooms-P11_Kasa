import { useState } from "react";

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
  };

  const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  };

  if (images.length <= 1) {
    return (
      <div className="asset-cover">
        <img
          className="asset-cover_img"
          src={images[currentIndex]}
          alt={`Galerie ${currentIndex}`}
        />
      </div>
    );
  }

  return (
    <div className="asset-cover">
      <img
        className="asset-cover_img"
        src={images[currentIndex]}
        alt={`Galerie ${currentIndex + 1}`}
        
      />

      <div className="controls">
        <div className="controls-btn">
          <span onClick={handlePrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
        <span className="controls-count">{`${currentIndex + 1} / ${
          images.length
        }`}</span>
      </div>
    </div>
  );
};
