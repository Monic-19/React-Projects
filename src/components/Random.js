import React from 'react'
import Loader from "./Loader";
import useGif from '../hooks/useGif';

const Random = () => {

    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    // const [gif , setGif] =useState("");

    // const [loading , setLoading] = useState(false);
    
    
    // async function fetchdata(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

    //Custom Hook -> UseGif is used 


    const {gif,loading,fetchdata} = useGif();

    function gifHandler(){
        fetchdata();
    }

  return (
    <div className='w-1/2 pt-[15px] pb-[15px] bg-green-500 rounded-lg border border-green-900 flex flex-col items-center gap-5 mt-[15px]'>

        <h1 className='text-center text-3xl font-bold underline mt-[8px]'>Random Gif</h1>
        {
            loading ? <Loader></Loader> : <img src={gif} width={450} alt='/Users/monic/Desktop/WebD/React/random-gif-starter/public/apple-touch-icon.png'></img>
        }
       
        <button onClick={gifHandler} className='w-10/12 bg-white text-lg py-2 rounded-lg'>Generate Random Gif </button>
      
    </div>
  )
}

export default Random
