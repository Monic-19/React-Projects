import React, { useState,useEffect } from 'react'
import axios from 'axios';

const useGif = (text) => {
    
        const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${text}`;
       
 
    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);
    
    async function fetchdata(){
        setLoading(true);
        // console.log(url)
        const {data} = await axios.get(text ? tagMemeurl : randomMemeurl);
        console.log(data);
        const imgSource = data.data.images.downsized_large.url;
        console.log(imgSource);
        setGif(imgSource);
        setLoading(false);
    }

    useEffect ( () => {
        fetchdata();
     },[])
 
    return{ 
        gif,loading,fetchdata
    }
  


}

export default useGif
