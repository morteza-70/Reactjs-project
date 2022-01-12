import { Component } from "react";

const list = ['item one', 'item two', 'item three']
class Product extends Component {
    count = 0;
    render() {
        return (
            <>
                <span className="m-2 text-info">Product Name</span>
                <span className="m-2 badge bg-primary">{this.format(this.count)}</span>
                <button className="m-2 btn btn-sm btn-success">+</button>
                <button className="m-2 btn btn-sm btn-warning">-</button>
                <button className="m-2 btn btn-sm btn-danger">delete</button>
                <ul>
                    {list.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
            </>
        )
    }
    format() {
        if (this.count == 0)
            return 'zero';
        else
            return this.count;
    }
}

export default Product;

