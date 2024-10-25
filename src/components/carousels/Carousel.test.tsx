// src/components/carousels/Carousel.test.tsx

import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Carousel from './Carousel';

describe('Carousel', () => {
  const images = [
    { url: 'image1.jpg', alt: 'Image 1' },
    { url: 'image2.jpg', alt: 'Image 2' },
    { url: 'image3.jpg', alt: 'Image 3' },
  ];

  it('renders correctly', () => {
    const { getByAltText } = render(
      <Carousel images={images} currentIndex={0} setCurrentIndex={() => {}} />
    );

    images.forEach((image) => {
      expect(getByAltText(image.alt)).toBeInTheDocument();
    });
  });

  it('navigates to the next image', () => {
    let currentIndex = 0;
    const setCurrentIndex = (value: React.SetStateAction<number>) => {
      currentIndex = typeof value === 'function' ? (value as (prevState: number) => number)(currentIndex) : value;
    };

    const { getByText } = render(
      <Carousel images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    );

    fireEvent.click(getByText('❯'));
    expect(currentIndex).toBe(1);
  });

  it('navigates to the previous image', () => {
    let currentIndex = 1;
    const setCurrentIndex = (value: React.SetStateAction<number>) => {
      currentIndex = typeof value === 'function' ? (value as (prevState: number) => number)(currentIndex) : value;
    };

    const { getByText } = render(
      <Carousel images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    );

    fireEvent.click(getByText('❮'));
    expect(currentIndex).toBe(0);
  });

  it('loops to the last image when clicking previous on the first image', () => {
    let currentIndex = 0;
    const setCurrentIndex = (value: React.SetStateAction<number>) => {
      currentIndex = typeof value === 'function' ? (value as (prevState: number) => number)(currentIndex) : value;
    };

    const { getByText } = render(
      <Carousel images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    );

    fireEvent.click(getByText('❮'));
    expect(currentIndex).toBe(images.length - 1);
  });

  it('loops to the first image when clicking next on the last image', () => {
    let currentIndex = images.length - 1;
    const setCurrentIndex = (value: React.SetStateAction<number>) => {
      currentIndex = typeof value === 'function' ? (value as (prevState: number) => number)(currentIndex) : value;
    };

    const { getByText } = render(
      <Carousel images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    );

    fireEvent.click(getByText('❯'));
    expect(currentIndex).toBe(0);
  });
});