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
                <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
                {this.state.products.map((p, index) => (
                    <Product onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} id={p.id} key={index} count={p.count} productName={p.productName}>
                        <p>
                            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </Product>
                ))}
            </>
        );
    }

    handleDelete = (productId) => {
        const newProducts = this.state.products.filter(p => p.id !== productId);
        this.setState({products : newProducts});
    }

    handleReset = () => {
        const newProducts = this.state.products.map(p=>{
            p.count = 0;
            return p;
        });
        this.setState({products: newProducts});
    }

    handleIncrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count += 1;
        this.setState({products: newProducts});
    }

    handleDecrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count -= 1;
        this.setState({products : newProducts});
    }
}
export default Products;