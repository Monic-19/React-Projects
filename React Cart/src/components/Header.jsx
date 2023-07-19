import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

  const {len} = useSelector( (state) => state.cart)

  const dispatch = useDispatch();
  dispatch({ type: "carditem" });

  return (
    <nav>
        <h2>Logo</h2>

        <div>
            <Link to={"/"}>HOME</Link>
            <Link to={"/cart"}>
                <FiShoppingBag></FiShoppingBag>
                <p>{len}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header
