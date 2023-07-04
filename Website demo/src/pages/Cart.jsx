import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const { cart } = useSelector((state) => state)

  const [totalAmount ,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce ( (acc,curr) => acc+ curr.price , 0) );
  },[cart] );

  return (
    <div>
      {console.log(cart.length)}
      {
        cart.length === 0 ?
          (<div className="flex flex-col justify-center items-center text-[30px] gap-6">
            <h1 className="mt-4"> Cart Empty !</h1>

            <img src="https://images.unsplash.com/photo-1601598505513-7489a6272d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" width="320px"></img>

            <Link to={"/"}>
              <button className=" p-4 text-white w-[320px] text-[25px] bg-[#001d3d] flex items-center justify-center border-4  border-black hover:bg-[#ffd60a] hover:text-black ease-in-out duration-200 ">
                Shop Now
              </button>
            </Link>
          </div>)
          :
          (<div className="grid grid-cols-3 ">
            {
                cart.map( (item , index) =>  (
                  <CartItem key={item.id} item={item} index={index}></CartItem>
                )  )
            }

            <div className="flex flex-col  text-[25px] m-auto gap-4 mb-10">
              <div >
                <div className="text-[40px] font-bold"> Your Cart </div>
                <div> Summary </div>
                <p>
                  <span>Total Items : {cart.length}</span>
                </p>
                <p >Total Amount : <span className="text-green-500"> $ {totalAmount} </span> </p>
                <button className=" p-4 mt-3 w-[280px] text-[25px] bg-[#e0e1dd] flex items-center justify-center border-4  border-black hover:bg-[#415a77] hover:text-white ease-in-out duration-200 ">
                  Check Out Now
                </button>
              </div>


            </div>


          </div>) 
          

      }


    </div>
  )
};

export default Cart;
