import { useState } from "react";

const Product = () => {

    console.log(this);
    const [count, setCount]= useState(0);
    return (
        <>
            <span className="m-2 text-info">Laptop</span>   {/* this is out of state beacuse static value */}
            <span className="m-2 badge bg-primary">{format()}</span>
            <button onClick={() => handleIncreament(count, setCount)} className="m-2 btn btn-sm btn-success">+</button>
            <button onClick={handleDecreament} className="m-2 btn btn-sm btn-warning">-</button>
            <button onClick={handleDelete} className="m-2 btn btn-sm btn-danger">delete</button>
        </>
     );
    function format() {
        if (count === 0)
            return 'zero';
        else
            return count;
    };
    // function handleIncreament () {
    //     setCount(count + 1);
    // };
    function handleDecreament() {
        setCount(count - 1);
    };
    function handleDelete() {
        console.log('delete');
    };
}

// if you want write external function you should pass input argumment 
function handleIncreament (count, setCount) {
    setCount(count + 1);
};
 
export default Product;
