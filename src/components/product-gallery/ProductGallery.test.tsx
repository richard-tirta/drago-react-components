import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import ProductGallery, { imageList } from './ProductGallery';


const images: imageList[] = [
  { url: 'image1.jpg', alt: 'Image 1' },
  { url: 'image2.jpg', alt: 'Image 2' },
  { url: 'image3.jpg', alt: 'Image 3' },
];

describe('ProductGallery', () => {

  it('should render the carousel with the first image', () => {
    const { getAllByAltText } = render(<ProductGallery imageList={images} />);
    const imagesWithAltText = getAllByAltText('Image 1');
    expect(imagesWithAltText.length).toBeGreaterThan(0);
    expect(imagesWithAltText[0]).toBeInTheDocument();
  });

  it('should change the current image when a thumbnail is clicked', () => {
    const { getAllByAltText, getAllByRole } = render(<ProductGallery imageList={images} />);
    const thumbnails = getAllByRole('link');

    // Click on the second thumbnail
    fireEvent.click(thumbnails[1]);

    const imagesWithAltText = getAllByAltText('Image 2');
    expect(imagesWithAltText.length).toBeGreaterThan(0);
    expect(imagesWithAltText[0]).toBeInTheDocument();
  });

  it('should apply the current thumbnail class to the clicked thumbnail', () => {
    const { getAllByRole } = render(<ProductGallery imageList={images} />);
    const thumbnails = getAllByRole('link');

    // Click on the third thumbnail
    fireEvent.click(thumbnails[2]);

    console.log(thumbnails[2].className);

    // Check if the third thumbnail has the current class
    expect(thumbnails[2].className).toMatch(/thumbnail__current/);
  });
});