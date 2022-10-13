import { Component } from 'react';
import Products from './components/products';
import Navbar from './components/navbar';

class App extends Component {
    render () {
        return (
            <>
                <Navbar />
                <Products />
            </>
        )
    }
}

export default App;