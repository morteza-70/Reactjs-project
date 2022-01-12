import { Component } from "react";
import './product.css'

const list = ['item one', 'item two', 'item three'];
class Product extends Component {
    count = 0;
    imgSrc = "https:/picsum.photos/200";
    render() {
        return (
            <>
                <span className="m-2 text-info">Product Name</span>
                <span className="m-2 badge bg-primary">{this.format()}</span>
                <button onClick={this.increament} className="m-2 btn btn-sm btn-success">+</button>
                <button onClick={this.decreament} className="m-2 btn btn-sm btn-warning">-</button>
                <button onClick={this.delete} className="m-2 btn btn-sm btn-danger">delete</button>
                <ul>
                    {list.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
                <img src="https:/picsum.photos/200" style={{borderRadius :'20%'}}></img>
                <img src= {this.imgSrc}></img>
            </>
        )
    }
    format() {
        if (this.count === 0)
            return 'zero';
        else
            return this.count;
    };

    increament = ()=> {
        console.log('increament');
    }
    decreament = ()=> {
        console.log('decreament');
    }
    delete = () => {
        console.log('delete')
    }
}

export default Product;

