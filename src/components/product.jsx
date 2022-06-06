import { Component } from "react";
import './product.css';
class Product extends Component {    
    state = {  // when use that change value
        count : this.props.count
    }
    render() {
        const {productName} = this.props;
        return (
            <div>
                <span className="m-2 text-info">{productName}</span>
                <span className="m-2 badge bg-primary">{this.format()}</span>
                <button onClick={this.handleIncreament} className="m-2 btn btn-sm btn-success">+</button>
                <button onClick={this.handleDecreament} className="m-2 btn btn-sm btn-warning">-</button>
                <button onClick={this.handleDelete} className="m-2 btn btn-sm btn-danger">delete</button>
                {this.props.children}
            </div>
        )
    }
    format = () => {
        if (this.state.count === 0)
            return 'zero';
        else
            return this.state.count;
    };

    handleIncreament = () => {
        const {count} = this.state;
        this.setState({count: count + 1});
    }
    handleDecreament = () => {
        const {count} = this.state;
        this.setState({count: count - 1});
    }
    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }
}

export default Product;

