import { useState } from "react";

const Product = ({productName, count: propCount, children, productId, onDelete}) => {
    
    const [count, setCount]= useState(propCount);

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
        setCount(count + 1);
    };
    function handleDecreament() {
        setCount(count - 1);
    };
    function handleDelete() {
        onDelete(productId);
    };
}
 
export default Product;
