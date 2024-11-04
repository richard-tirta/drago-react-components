import React, { FC, useState, useEffect } from 'react'
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
    size: string | number | null;
    list_price: number;
    discount: number | null;
    discount_percentage: number | null;
    sale_price: number;
    sold: number;
    stock: number;
}

interface ProductInfo {
    product_id: string;
    title: string;
    description: string[];
}

interface ProductDetailPage {
    productId?: string,
    sku: string,
}

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ProductDetailPage: FC<ProductDetailPage> = ({ productId, sku = "ak-blue-xs" }) => {
    const [currentSku, setCurrentSku] = useState(sku)
    const [currentProductBySku, setCurrentProductBySku] = useState<Inventory | undefined>(undefined);
    const [currentProduct, setCurrentProduct] = useState<Product | undefined>(undefined);
    const [images, setImages] = useState<{ url: string, alt: string }[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [sizes, setSizes] = useState<string[]>([]);
    const [currentProductInfo, setCurrentProductInfo] = useState<ProductInfo[] | undefined>(undefined)

    useEffect(() => {
        // Find the current product
        const productBySku = productInventory.find(p => p.sku === currentSku);
        setCurrentProductBySku(productBySku);

        if (!productId && productBySku) {
            productId = productBySku.product_id;
        } else {
            return
        }

        const product = products.find(p => p.product_id === productId);
        setCurrentProduct(product);
        

        // Filter the images for the current product and color
        const filteredImages = productImages
            .filter(img => img.product_id === productId && img.color === productBySku.color)
            .map((img, key) => ({ url: img.image_url, alt: `${img.product_id} - ${img.color} - ${key}` }));
        setImages(filteredImages);

        const colorList = Array.from(new Set(productInventory
            .filter(inv => inv.product_id === productId)
            .map(inv => inv.color)
            .filter((color): color is string => color !== null)
        ));
        setColors(colorList);

        const sizeList = Array.from(new Set(productInventory
            .filter(inv => inv.product_id === productId)
            .map(inv => inv.size)
            .filter((size): size is string => size !== null)
        ));
        setSizes(sizeList);

        const productInfoData = productInfo.filter(info => info.product_id === productId);
        setCurrentProductInfo(productInfoData);

    }, [productId, currentSku]);

    const onColorClickHandler = (color: string) => { 
        const newSku = productInventory.find(p => p.color === color && p.product_id === currentProductBySku?.product_id)?.sku;
        newSku && setCurrentSku(newSku);
    }

    const onSizeClickHandler = (size: string) => { 
        const newSku = productInventory.find(p => p.size === size && p.product_id === currentProductBySku?.product_id)?.sku;
        newSku && setCurrentSku(newSku);
    }

    return (
        <>
            <h2>Product Detail Page</h2>
            <section className={styles.product_detail}>
                <div className={styles.product_gallery}>
                    { 
                        images.length === 0 ? <p>No images available</p> : <ProductGallery imageList={images} />
                    }
                </div>
                <div className={styles.product_description}>
                    <h4>{currentProduct && capitalizeFirstLetter(currentProduct.category)} - {currentProduct && capitalizeFirstLetter(currentProduct.collection)}</h4>
                    <h3>{currentProduct?.name}</h3>
                    <p>{currentProduct?.description}</p>
                    <div>
                        <ul className={styles.item_list}>
                            {colors.map((color, index) => (
                                <li key={index}>
                                    <Button
                                        type="secondary"
                                        customBackgroundColor={color}
                                        customClassName={
                                            currentProductBySku?.color === color ? `${styles.current_item}` : undefined
                                        }
                                        onClick={(e) => onColorClickHandler(color)}
                                    >
                                        &nbsp;
                                    </Button>
                                    <span>{capitalizeFirstLetter(color)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.item_list}>
                            {sizes.map((size, index) => (
                                <li key={index}>
                                    <Button
                                        type="secondary"
                                        customClassName={
                                            currentProductBySku?.size === size ? `${styles.current_item}` : undefined
                                        }
                                        onClick={(e) => onSizeClickHandler(size)}
                                    >
                                        {size.toUpperCase()}
                                    </Button>
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