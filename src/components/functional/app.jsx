import Products from './products';
import Navbar from './navbar';
import { useState } from 'react';

const App = () => {
    const [products, setProducts] = useState([
        {id: 1, count: 4, productName: 'Laptop'},
        {id: 2, count: 8, productName: 'Airpod'},
        {id: 3, count: 6, productName: 'Monitor'},
    ]);

    return ( 
        <>
            <Navbar products={products} />
            <Products
            products={products}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onReset={handleReset}
            />
        </>
    )

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
}

export default App;