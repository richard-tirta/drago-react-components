
import ProductGallery from "./ProductGallery"
import productImages from "./product-images.json"
import styles from './ProductGalleryIndex.module.scss'




const ProductGalleryIndex = () => {

  let images = [];

  for (let i = 0; i < productImages.length; i++) {
    if (productImages[i].product_id === "autumnal-knitwear" && productImages[i].color === "blue") {
      let currentImage = { url: productImages[i].image_url, alt: `${productImages[i].product_id} - ${productImages[i].color}` };
      images.push(currentImage);
    }
  }

  console.log('hello', images);
  

  return (
    <>
      <h2>Product Gallery</h2>
      <section className={styles.product_detail}>
      <div className={styles.product_gallery}>
        <ProductGallery imageList={images} />
      </div>
      <div className={styles.product_description}>
        <h3>Product Details</h3>
        </div>
        </section>
    </>
  )
}

export default ProductGalleryIndex
