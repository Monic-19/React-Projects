//rafce

import React from 'react'
import Card from './Card';

const Cards = ({ text }) => {
    console.log(text);
    return (
        <div className='container'>
            <div className='row row-cols-3'>
                    {
                        text.map((value) => {
                            return (
                                <div className='col my-3'> <Card  {...value}></Card> </div>
                            )
                        })
                    }
            </div>

        </div>
    )
}

export default Cards
