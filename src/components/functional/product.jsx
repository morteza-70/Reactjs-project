import '../product.css';
const Product = ({productName, count, onIncrement, onDecrement , children, productId, onDelete}) => {
   
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
        onIncrement(productId);
    };

    function handleDecreament() {
        onDecrement(productId);
    };
    
    function handleDelete() {
        onDelete(productId);
    };
}
 
export default Product;
