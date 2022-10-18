import React from "react";
import ProductContext from "../context/products";
class Navbar extends React.Component {
    static contextType = ProductContext;
    
    constructor(props) {
        super(props);
        console.log('Navbar - constructor');
    }

    componentDidMount() {
        console.log('Navbar - Didmonting');
    }

    render() {
        console.log('Navbar- rendering');
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                        Navbar: calculate sum: {this.calculateSum()}
                </div>
            </nav>
        );
    }

    // calculateSum via reduce array
    calculateSum = () => {
       const sum =  this.context.products.reduce((previousValue, currentValue) =>
            previousValue +
            currentValue.count,
            0
        );
        return sum;
    };

    // calculateSum via foreach
    // calculateSum = () => {
    //     let sum = 0;
    //     this.context.products.forEach(p => {
    //         sum += p.count;
    //     });
    //     return sum;
    //  };
}

export default Navbar;