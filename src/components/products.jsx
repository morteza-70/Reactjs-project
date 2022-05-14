import { Component } from "react";
import Product from "./product";
class Products extends Component {
    state = {
        products : [
            {id: 1, count: 4, productName: 'Laptop'},
            {id: 2, count: 8, productName: 'Airpod'},
            {id: 3, count: 6, productName: 'Monitor'},
        ]
    }
    render() { 
        return (
            <>
                {this.state.products.map((p, index) => (
                    <Product key={index} count={p.count} productName={p.productName}>
                        <p>
                            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </Product>
                ))}
            </>
        );
    }
}
 
export default Products;