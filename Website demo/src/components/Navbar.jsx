import { BsFillCartCheckFill } from "react-icons/bs"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div className=" bg-[#001d3d]">
      <div className="flex justify-between">

        <NavLink to="/" className="p-4">
          <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" height="60px" width="120px" ></img>
        </NavLink>

        <div className="flex items-center justify-center text-3xl gap-12 text-white ">

          <NavLink to="/" >
            <p>Home</p>
          </NavLink>

          {
            cart.length > 0 ?
              (
                <div className="flex flex-col items-center  relative pr-10">
                  <div className="text-sm absolute top-[-18px] right-[43px] bg-green-500 p-[5px] rounded-[100%] text-center z-4 animate-bounce">
                  {cart.length}
                   </div> 
                  <NavLink to="/cart" className="z-50">
                    <BsFillCartCheckFill></BsFillCartCheckFill>
                  </NavLink>
                </div>
              )
              :
              (
                <div>
                  <NavLink to="/cart" className="flex pr-10">
                    <BsFillCartCheckFill></BsFillCartCheckFill>
                  </NavLink>
                </div>
              )
          }

        </div>

      </div>
    </div>
  )
};

export default Navbar;
