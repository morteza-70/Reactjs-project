import Product from './product';
import { useContext } from 'react';
import ProductsContext from '../../context/products';

const Products = () => {
    const productsContext = useContext(ProductsContext)
    return ( 
        <>
            <button onClick={productsContext.onReset} className='btn btn-primary'>Reset</button>
            {productsContext.products.map((p, index) => (
                <Product
                    onIncrement={productsContext.onIncrement}
                    onDecrement={productsContext.onDecrement}
                    onDelete={productsContext.onDelete}
                    productId={p.id}
                    key={index}
                    count={p.count}
                    productName = {p.productName} 
                >
                    <p>
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                </Product>
            ))}
        </>
    );
};
 
export default Products;