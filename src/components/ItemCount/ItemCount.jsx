/* eslint-disable react/prop-types */
import { useState } from 'react';

const ItemCount = ({ stock, handleOnAdd }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0 && count <= stock) {
            handleOnAdd(count);
        }
    };

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
    );
};

export default ItemCount;
