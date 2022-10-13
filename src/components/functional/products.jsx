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
            <button onClick={handleReset} className='btn btn-primary'>Reset</button>
            {products.map((p, index) => (
                <Product onReset={handleReset} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} productId={p.id} key={index} count={p.count} productName = {p.productName} >
                    <p>
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                </Product>
            ))}
        </>
    );
    
    function handleDelete (productId) {
        const newProducts = products.filter(p => p.id !== productId);
        setProducts(newProducts);
    }

    function handleReset () {
        const newProducts = products.map(p=>{
            p.count = 0;
            return p;
        });
        setProducts(newProducts);
    }

    function handleIncrement (productId) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count += 1;
        setProducts(newProducts);
    }

    function handleDecrement (productId) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count -= 1;
        setProducts(newProducts);
    }
};
 
export default Products;