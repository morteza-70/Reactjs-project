import { Component } from 'react';
import Products from './components/products';
import Navbar from './components/navbar';
import ProductsContext from './context/products';

class App extends Component {
    state = {
        products : [
            {id: 1, count: 4, productName: 'Laptop'},
            {id: 2, count: 8, productName: 'Airpod'},
            {id: 3, count: 6, productName: 'Monitor'},
        ]
    }

    componentDidUpdate() {
        console.log(' App - update');
    }

    componentWillUnmount() {
        console.log('App - Unmount');
    }

    render () {
        console.log('App- rendering');
        return (
            <>
                <ProductsContext.Provider
                    value = {{
                        products : this.state.products,
                        onIncrement : this.handleIncrement,
                        onDecrement : this.handleDecrement,
                        onDelete : this.handleDelete,
                        onReset : this.handleReset,
                    }}
                >                 
                    <Navbar />
                    <Products />
                </ProductsContext.Provider>
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

export default App;