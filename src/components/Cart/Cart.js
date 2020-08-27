import React from 'react';

const Cart = (props) => {
    const {title, price} = props.courseInfo;
    console.log(props)
    return (
        <div>
            <li className="p-3 mb-2 bg-dark text-white">
               <h6><span>{title}</span> <span>${price}</span></h6>
            </li>
        </div>
    );
};

export default Cart;