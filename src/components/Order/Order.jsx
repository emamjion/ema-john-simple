import React, { useEffect, useState } from 'react';
import './Order.css';

const Order = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div className='order-container'>
            <div className='products-container'>
                <h2>Products Here</h2>
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Order;
// 11:37