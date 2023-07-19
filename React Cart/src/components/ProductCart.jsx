import React from 'react'

const ProductCart = ({name,id,price,handler,imgSrc}) => {
  return (
    <div className="productCart">
        <img src={imgSrc} alt={name}></img>
        <p>{name}</p>
        <h4>$ {price}</h4>
        <button onClick={() => handler({name, price, id, imgSrc, quantity :1}) }>Add to Cart</button>
    </div>
  )
}

export default ProductCart
