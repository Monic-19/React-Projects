import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import "../styles/cart.scss";

const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => {
    return (
        <div>
            <div className='cartItem'>
                <img src={imgSrc} alt="Item" />

                <article>
                    <h3>{name}</h3>
                    <p>$ {price}</p>
                </article>

                <div>
                    <button onClick={() => { decrement(id) }}>-</button>
                    <p>{qty}</p>
                    <button onClick={() => { increment(id) }}>+</button>
                </div>

                <AiFillDelete className='deleteIcon' onClick={() => { deleteHandler(id) }}></AiFillDelete>
            </div>

        </div>
    )
}

export default CartItem
