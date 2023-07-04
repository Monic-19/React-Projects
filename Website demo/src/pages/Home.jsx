import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading ,setLoading] = useState(false);

  const [posts ,setPosts] = useState([]);


  async function fetchProductData(){
    setLoading(true);
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data)
      setPosts(data);
    }
    catch(error){
      {alert("error aagai hai")}
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  } ,[])

  return (
    <div>
      {
        loading ? <Spinner></Spinner> :
        posts.length>0 ? (
          <div className="grid grid-cols-2  "  >
            {
              posts.map( (post) =>  (
                <Product key={post.id} post={post}></Product>
              )  )
            }
          </div>
        ) : 
          <div className="flex flex-col text-[40px] mt-[50px] items-center justify-center gap-[20px]">
          <p>No data Found !</p>
          <img src="https://images.unsplash.com/photo-1659835347242-97835d671db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"  width="400px"></img>
          </div>
        
      }
    </div>
  )
};

export default Home;
