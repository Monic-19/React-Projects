import React, { useState } from 'react'

function Card({ id, name, info, image, price, removeTour }) {

    const [readmore, setReadMore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 200)}...`;

    function changereadmore() {
        setReadMore(!readmore);
    }

    

    return (
        <div className='card'>

            <img src={image} className='image'></img>

            <div className='tour-info'>

                <div className='tour-details'>
                    <h4 className='tour-price'>₹  {price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>

                <div className='description'>
                    {description}
                    <span className='read-more' onClick={changereadmore}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>

                <button onClick={ () => removeTour(id)  } className='btn-red'>Not Intrested</button>

            </div>

        </div>
    )
}

export default Card
