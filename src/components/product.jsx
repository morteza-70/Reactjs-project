import { Component } from "react";
import './product.css';

const list = ['item one', 'item two', 'item three'];
class Product extends Component {    
    state = {  // when use that change value
        count : 0
    }
    render() {
        const {productName} = this.props;
        return (
            <div>
                <span className="m-2 text-info">{productName}</span>
                <span className="m-2 badge bg-primary">{this.format()}</span>
                <button onClick={this.increament} className="m-2 btn btn-sm btn-success">+</button>
                <button onClick={this.decreament} className="m-2 btn btn-sm btn-warning">-</button>
                <button onClick={this.delete} className="m-2 btn btn-sm btn-danger">delete</button>                
            </div>
        )
    }
    format = () => {
        if (this.state.count === 0)
            return 'zero';
        else
            return this.state.count;
    };

    increament = () => {
        const {count} = this.state;
        this.setState({count: count + 1});
    }
    decreament = () => {
        const {count} = this.state;
        this.setState({count: count - 1});
    }
    delete = () => {
        console.log('delete')
    }
}

export default Product;

