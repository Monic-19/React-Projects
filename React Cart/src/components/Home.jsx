import React from 'react';
import ProductCart from './ProductCart';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

    const productList = [
                         {name : "Mac Book" , price : 12000 , imgSrc : "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", id : "123abc" },
                         {name : "Apple Watch" , price : 2000 , imgSrc : "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1002&q=80", id : "123def" },
                         {name : "Iphone 14" , price : 10000 , imgSrc : "https://images.unsplash.com/photo-1677563277026-17a254ea02f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" , id : "123ghi"},
                         {name : "Airpods Pro" , price : 6000 , imgSrc : "https://images.unsplash.com/photo-1600375104627-c94c416deefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" , id : "123jkl"},
                         {name : "Ipad " , price : 7000 , imgSrc : "https://images.unsplash.com/photo-1543069190-f687504216a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" , id : "123mno"},
                         {name : "Apple Imac" , price : 15000 , imgSrc : "https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80" , id : "123pqr"},
                         {name : "Airpods Max" , price : 13000 , imgSrc : "https://images.unsplash.com/photo-1673056922463-8c4639755cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1028&q=80" , id : "123stu"},
                         
                        ]

    const dispatch = useDispatch();
 
    const addToCartHandlert =(options) =>{
        console.log(options)
        dispatch( {type : "addToCart" , payload : options} );
        dispatch({ type: "calculatePrice" });
        dispatch({ type: "carditem" });
        toast.success("Added to cart")
    }

  return (
    <div className='home'>
      {
        productList.map( (product) => (

            <ProductCart key={product.id} name={product.name} price={product.price} imgSrc={product.imgSrc} id={product.id} handler={addToCartHandlert}></ProductCart>
        )) 
      }
    </div>
  )
}


export default Home
