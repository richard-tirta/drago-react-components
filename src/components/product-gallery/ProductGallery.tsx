
import React, { FC, useState } from 'react'
import Carousel from '../carousels/Carousel'
import styles from './ProductGallery.module.scss'


export interface imageList {
  url: string;
  alt: string;
}

interface ProductGalleryProps {
  imageList: imageList[];
}

const ProductGallery: FC<ProductGalleryProps> = ({
  imageList,
}) => {

  const [currentImage, setCurrentImage] = useState(0);

  const handleThumbnailClick = (index: number, e: React.MouseEvent<HTMLAnchorElement> ) => { 
    e.preventDefault();
    setCurrentImage(index);
  }

  return (
    <>
      <div className={styles.product_gallery}>
        <Carousel images={imageList} currentIndex={currentImage} setCurrentIndex={setCurrentImage} />
        <div className={styles.product__thumbnail}>
          {
            imageList.map((image, index) => {
              return (
                <a key={index} href="#" className={index == currentImage ? styles.thumbnail__current : ''} onClick={(e) => handleThumbnailClick(index, e)}>
                  <img src={image.url} alt={image.alt} width={100} />
                </a>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default ProductGallery
