import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';

const Shop = () => {
    const productData = useLoaderData();
    // Card button handler
    const handleAddToCart = (id) => {
        addToDb(id);
    }
    return (
        <div className='product-container'>
            {
                productData.map((product, index) =>
                (
                    <ProductCard 
                    key={index} 
                    product={product} 
                    handleAddToCart={handleAddToCart}
                    />
                )
                )
            }
        </div>
    );
};

export default Shop;