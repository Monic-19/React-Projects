import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';


const Cart = () => {

  const {cartItems, total, subTotal,tax, shipping} = useSelector( (state)=> state.cart );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch( {
      type : "addToCart",
      payload : {id}
    } )
    dispatch({ type: "calculatePrice" });
    dispatch({ type: "carditem" });
    toast.success("Item added");
  }

  const decrement = (id) => {
    dispatch( {
      type : "decrement",
      payload : {id}
    })
    dispatch({ type: "calculatePrice" });
    dispatch({ type: "carditem" });
    toast.error("Item removed");
  }

  const deleteHandler = (id) => {
    dispatch( {
      type : "deleteFromCart",
      payload :{id}
    })
    dispatch({ type: "calculatePrice" });
    dispatch({ type: "carditem" });
    toast.error("Item deleted");
  }

  return (
    <div className='cart'>
      <main>
        {
          cartItems.length > 0 ? (
            cartItems.map( (item) => (
              <CartItem key={item.id} imgSrc={item.imgSrc} name={item.name} price={item.price} qty={item.quantity} id={item.id} increment={increment} decrement={decrement} deleteHandler={deleteHandler}></CartItem>
            ) )
          ) : 
          (
            <h1 className='empty'>  No Items Yet</h1>
          ) 
        }
      </main>

      <aside>
        <h2>SubTotal : $ {subTotal} </h2>
        <h2>Shipping : $ {shipping} </h2>
        <h2>Tax : $ {tax} </h2>
        <h2>Total : $ {total} </h2>
      </aside>
    </div>
  )
}

export default Cart
