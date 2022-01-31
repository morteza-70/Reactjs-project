import { Component } from "react";
import Product from "./product";

class Products extends Component {
    render() { 
        return (
            <>
                <Product productName="Laptop"/>
                <Product productName="Airpod"/>
                <Product productName="Monitor"/>
            </>
        );
    }
}
 
export default Products;