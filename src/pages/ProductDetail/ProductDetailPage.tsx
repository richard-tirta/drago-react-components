import React, { useState, useEffect } from 'react'
import productImages from './data/product-images.json';
import products from './data/products.json';
import productInfo from './data/product-info.json';
import productInventory from './data/inventory.json';
import ProductGallery from '../../components/product-gallery/ProductGallery';
import Drawer from '../../components/drawer/Drawer';
import SubDrawer from '../../components/drawer/SubDrawer';
import Header from '../../components/component_support/Header';
import Paragraph from '../../components/component_support/Paragraph';
import Button from '../../components/button/Button';
import styles from './ProductDetailPage.module.scss';

interface Product {
    product_id: string;
    name: string;
    description: string;
    category: string;
    collection: string;
    created_at: string;
}

interface ProductImage {
    product_id: string;
    color: string;
    image_url: string;
}

interface Inventory {
    product_id: string;
    sku: string;
    color: string;
    size: string;
    list_price: number;
    discount: null;
    discount_percentage: number;
    sale_price: number;
    sold: number;
    stock: number;
}

interface ProductInfo {
    product_id: string;
    title: string;
    description: string[];
}

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ProductDetailPage = ({ productId = "autumnal-knitwear" }) => {
    const [currentProduct, setCurrentProduct] = useState<Product | undefined>(undefined);
    const [images, setImages] = useState<{ url: string, alt: string }[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [sizes, setSizes] = useState<string[]>([]);
    const [currentProductInfo, setCurrentProductInfo] = useState<ProductInfo[] | undefined>(undefined)

    useEffect(() => {
        // Find the current product
        const product = products.find(p => p.product_id === productId);
        setCurrentProduct(product);

        // Filter the images for the current product and color
        const filteredImages = productImages
            .filter(img => img.product_id === productId && img.color === "blue")
            .map(img => ({ url: img.image_url, alt: `${img.product_id} - ${img.color}` }));
        setImages(filteredImages);

        const uniqueColors = Array.from(new Set(productInventory
            .filter(inv => inv.product_id === productId)
            .map(inv => inv.color)
            .filter((color): color is string => color !== null)
        ));
        setColors(uniqueColors);

        const uniqueSizes = Array.from(new Set(productInventory
            .filter(inv => inv.product_id === productId)
            .map(inv => inv.size)
            .filter((size): size is string => size !== null)
        ));
        setSizes(uniqueSizes);

        const productInfoData = productInfo.filter(info => info.product_id === productId);
        setCurrentProductInfo(productInfoData);

    }, [productId]);

    return (
        <>
            <h2>Product Detail Page</h2>
            <section className={styles.product_detail}>
                <div className={styles.product_gallery}>
                    <ProductGallery imageList={images} />
                </div>
                <div className={styles.product_description}>
                    <h4>{currentProduct && capitalizeFirstLetter(currentProduct.category)} - {currentProduct && capitalizeFirstLetter(currentProduct.collection)}</h4>
                    <h3>{currentProduct?.name}</h3>
                    <p>{currentProduct?.description}</p>
                    <div>
                        <p>Available colors</p>
                        <ul>
                            {colors.map((color, index) => (
                                <li key={index}>
                                    {capitalizeFirstLetter(color)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>Available sizes</p>
                        <ul>
                            {sizes.map((size, index) => (
                                <li key={index}>
                                    {size.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button size="x2large">Add to Cart</Button>
                    <div>
                        <Drawer>
                            {
                                currentProductInfo && currentProductInfo.map((info, index) => (
                                    <SubDrawer key={index} id={`drawer${index}`}>
                                        <Header>
                                            <h3>{info.title}</h3>
                                        </Header>
                                        <Paragraph>
                                            <ul>
                                                {info.description.map((desc, index) => (
                                                    <li key={index}>{desc}</li>
                                                ))}
                                            </ul>
                                        </Paragraph>
                                    </SubDrawer>
                                ))
                            }
                        </Drawer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetailPage