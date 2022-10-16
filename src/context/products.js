import {createContext} from "react";

const productContext = createContext({
    products: [],
    onIncrement: ()=>{},
    onDecrement: ()=>{},
    onDelete: ()=>{},
    onReset: () => {},
});

export default productContext;