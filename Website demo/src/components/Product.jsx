import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast"; 
import {add,remove} from "../redux/Slices/cartSlice";

const Product = (props) => {

  const [selected , setSelected] =useState(false);
  // console.log(props.post.title)

  const {cart} = useSelector( (state) => state );
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(props.post) );
    toast.success("Item Added To Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(props.post.id) );
    toast.error("Item removed");
  }


  return (
    <div className=" mx-auto w-[500px] bg-[#fff] text-center m-10 border-4 border-black relative">
      <div className="mt-4 text-[22px] pl-5 pr-5 pt-6 font-bold"><p>{props.post.title}</p></div>
      <div className=" pl-4 pr-4 pt-4 font-thin italic"><p>"{props.post.description.split(" ").slice(0,10).join("  ") + "..."}"</p></div>
      <div className="pt-4 pl-[100px] bg-transparent"><img className="p-auto" src={`${props.post.image}`} width="300px"></img></div>
      <div className="pt-4 text-[30px] font-bold text-green-400 pb-[80px]"><p>Price : $ {props.post.price} </p></div>
      
      <div className=" mt-8 p-4 text-white w-[300px] text-[25px] bg-[#52796f] flex items-center justify-center border-t-4 border-r-[4px] border-black hover:bg-[#2f3e46] hover:w-full ease-in-out duration-300 absolute bottom-0">
        {
          cart.some( (p) => p.id === props.post.id) ?
          (<button onClick={removeFromCart}> Remove item</button>):
          (<button onClick={addToCart}> Add To Cart</button>)
        }
      </div>
      
    </div> 
  )
};

export default Product;
