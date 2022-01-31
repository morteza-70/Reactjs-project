import { useState } from "react";

const Product = ( props ) => {
    const [count, setCount]= useState(0);

    return (
        <div>
            <span className="m-2 text-info">{props.productName}</span>
            <span className="m-2 badge bg-primary">{format()}</span>
            <button onClick={handleIncreament} className="m-2 btn btn-sm btn-success">+</button>
            <button onClick={handleDecreament} className="m-2 btn btn-sm btn-warning">-</button>
            <button onClick={handleDelete} className="m-2 btn btn-sm btn-danger">delete</button>
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
        console.log('delete');
    };
}
 
export default Product;
