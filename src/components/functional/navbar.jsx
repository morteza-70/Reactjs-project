import { useContext } from 'react';
import ProductsContext from '../../context/products';

const Navbar = () => {
    const productsContext = useContext(ProductsContext);

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                Navbar: calculate sum: {calculateSum()}
            </div>
        </nav>
    );

    // calculateSum via reduce array
    // function calculateSum () {
    //    const sum =  productsContext.products.reduce((previousValue, currentValue) =>
    //         previousValue +
    //         currentValue.count,
    //         0
    //     );
    //     return sum;
    // };

    // calculateSum via foreach
    function calculateSum () {
        let sum = 0;
        productsContext.products.forEach(p => {
            sum += p.count;
        });
        return sum;
     };
}

export default Navbar;