import Product from './product';
import { useState } from 'react';

const Products = () => {
    const [products, setProducts]= useState([
            {id: 1, count: 4, productName: 'Laptop'},
            {id: 2, count: 8, productName: 'Airpod'},
            {id: 3, count: 6, productName: 'Monitor'},
        ]
    );

    return ( 
        <>
            {products.map((p, index) => (
                <Product key={index} count={p.count} productName = {p.productName}>
                    <p>
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                </Product>
            ))}
        </>
    );
};
 
export default Products;