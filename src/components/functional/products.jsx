import Product from './product';

const Products = ({products, onReset, onIncrement, onDecrement, onDelete}) => {
    return ( 
        <>
            <button onClick={onReset} className='btn btn-primary'>Reset</button>
            {products.map((p, index) => (
                <Product
                onReset={onReset}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onDelete={onDelete}
                productId={p.id}
                key={index}
                count={p.count}
                productName = {p.productName} >
                    <p>
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                </Product>
            ))}
        </>
    );
};
 
export default Products;