import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href="#">
                        Navbar: calculate sum: {this.calculateSum()}
                    </a>
                </div>
            </nav>
        );
    }

    // calculateSum via reduce array
    calculateSum = () => {
       const sum =  this.props.products.reduce((previousValue, currentValue) =>
            previousValue +
            currentValue.count,
            0
        );
        return sum;
    };

    // calculateSum via foreach
    // calculateSum = () => {
    //     let sum = 0;
    //     this.props.products.forEach(p => {
    //         sum += p.count;
    //     });
    //     return sum;
    //  };
}

export default Navbar;