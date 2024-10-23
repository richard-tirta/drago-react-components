// src/components/carousels/Carousel.tsx
import React, { FC } from 'react';
import styles from './Carousel.module.scss';

interface CarouselProps {
  images: { url: string; alt: string }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel: FC<CarouselProps> = ({
  images,
  currentIndex,
  setCurrentIndex,

}) => {
  //const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.carousel}>
      <button className={`${styles.prev} ${ currentIndex === 0 ? styles.disabled : ''}`} onClick={handlePrevClick}>❮</button>
      <div className={styles.carousel__container} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className={styles.carousel__image}
          />
        ))}
      </div>
      <button className={`${styles.next} ${ currentIndex === images.length - 1 ? styles.disabled : ''}`} onClick={handleNextClick}>❯</button>
    </div>
  );
};

export default Carousel;