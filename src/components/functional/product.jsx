import '../product.css';
import { useContext, useEffect } from 'react';
import ProductsContext from './../../context/products';

const Product = ({productName, count, children, productId}) => {
   const productsContext = useContext(ProductsContext);

   useEffect( () => {
    console.log('App - mount');

    return () => {
        console.log('App - unmount');
    }

   }, [])
    return (
        <div>
            <span className="m-2 text-info">{productName}</span>
            <span className="m-2 badge bg-primary">{format()}</span>
            <button onClick={handleIncreament} className="m-2 btn btn-sm btn-success">+</button>
            <button onClick={handleDecreament} className="m-2 btn btn-sm btn-warning">-</button>
            <button onClick={handleDelete} className="m-2 btn btn-sm btn-danger">delete</button>
            {children}
        </div>
    );

    function format() {
        if (count === 0)
            return 'zero';
        else
            return count;
    };

    function handleIncreament () {
        productsContext.onIncrement(productId);
    };

    function handleDecreament() {
        productsContext.onDecrement(productId);
    };
    
    function handleDelete() {
        productsContext.onDelete(productId);
    };
}
 
export default Product;
