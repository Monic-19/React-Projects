import { toast } from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";

const CartItem = ({ item, index }) => {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch( remove (item.id) );
    toast.error("Item Removed");
  }

  return (
    <div className="border-4 border-black mt-4 m-2 w-[350px] bg-white" >
      <div className="flex flex-col gap-4">

        <div className="mt-[14px] m-auto h-[400px] overflow-hidden">
          <img width="300px" src={item.image}></img>
        </div>

        <div className=" p-4">
          <h1 className="font-bold ">{item.title}</h1>
          <div>
            <h1 className="font-thin mt-3">"{item.description.slice(0,80)+ "..."}"</h1>
            
            <div className="flex  justify-between items-end pt-[10px]" >

            <h1 className="text-green-500 text-[25px]">$ {item.price}</h1>
            <div onClick={removeFromCart} className="text-4xl">
              <MdOutlineDelete></MdOutlineDelete>
            </div>

            </div>
          </div>


        </div>

      </div>
    </div>
  )
};

export default CartItem;
