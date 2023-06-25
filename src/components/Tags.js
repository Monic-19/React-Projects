
import React, { useState } from 'react'
import Loader from "./Loader";
import useGif from '../hooks/useGif';

const Tags = () => {

    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    // const [gif , setGif] =useState("");

    // const [loading , setLoading] = useState(false);
    
    
    // async function fetchdata(){
        //     setLoading(true);
        //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${text}`;
        //     // console.log(url)
        //     const {data} = await axios.get(url);
        //     console.log(data);
        //     const imgSource = data.data.images.downsized_large.url;
        //     console.log(imgSource);
        //     setGif(imgSource);
        //     setLoading(false);
        // }
        
        // useEffect ( () => {
            //    fetchdata();
            // },[])
            
    const [text , setText] = useState("");
    const {gif,loading,fetchdata} = useGif(text);

    function gifHandler(){
        fetchdata();
    }

    function changeHandler(event){
        setText(event.target.value);
        console.log(text)
    }

  return (
    <div className='w-1/2 pt-[15px] pb-[15px] bg-blue-500 rounded-lg border border-green-900 flex flex-col items-center gap-5 mt-[15px]'>

        <h1 className='text-center text-3xl font-bold underline mt-[8px]'>{text.toUpperCase()} Gif</h1>
        {
            loading ? <Loader></Loader> : <img src={gif} width={450} alt='/Users/monic/Desktop/WebD/React/random-gif-starter/public/apple-touch-icon.png'></img>
        }
       
       <input type='text' className='w-10/12 text-lg py-2 rounded-lg mb-[3px] mt-[3px] text-center' placeholder='Enter something specifc' onChange={changeHandler} value={text}></input>
        <button onClick={gifHandler} className='w-10/12 bg-white text-lg py-2 rounded-lg'>Generate Gif </button>
      
    </div>
  )
}

export default Tags
