import React, { useState } from 'react'
import Toast from './Toast';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ id, name, info, image, price }) => {

    const [full,setd] =useState(false); 
    
    const desc = full ? info: `${info.slice(0,100)}...` ;

    function changed(){
        setd(!full);
    }

    

    return (
        <div>
            <div className="card p-3" style={{width: "24rem"}} >
                <img src={image} style={{height: "24rem" ,objectFit:"cover"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fs-3">{name}</h5>
                        <h5 className="card-title fs-2 text-success">Rs {price}</h5>
                        <p className="card-text"> {desc} </p>
                        <div>
                        <button href="#" className="btn btn-primary my-3 mx-24" onClick={changed}> { full ? 'Show Less' : 'Read More' } </button>
                        <Toast></Toast>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Card
