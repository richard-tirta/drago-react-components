import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductDetailPage from './ProductDetailPage';




describe('ProductDetailPage', () => {
  it('should set images correctly based on productId and color', () => {
    render(<ProductDetailPage productId="autumnal-knitwear" />);
    
    // Assuming the filtered images for the productId "autumnal-knitwear" and color "blue" are known
    const expectedImages = [
      { url: 'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg', alt: 'autumnal-knitwear - blue' },
      { url: 'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-2.jpg', alt: 'autumnal-knitwear - blue' }
    ];


    expectedImages.forEach(image => {
      const imgElements = screen.getAllByAltText(image.alt);
      expect(imgElements.length).toBeGreaterThan(0);
      
      imgElements.forEach(imgElement => {
        expect(imgElement).toBeInTheDocument();
        const hasExpectedSrc = imgElements.some(imgElement => imgElement.getAttribute('src') === image.url);
        expect(hasExpectedSrc).toBe(true); // Ensure at least one element has the expected src attribute
      });
    });
  });
});