import React, { useContext } from 'react'
import { AppContex } from '../Context/AppComponent'

const Page = () => {

    const { page, handlePageChange ,totalpage} = useContext(AppContex);
    console.log("Page "+page)
    console.log("Total Page "+totalpage)

    return (
        <div>
            <div className='flex justify-evenly p-6 text-3xl bg-[#BDC4A7] text-[#2F2F2F]'>
                {
                page > 1 &&
                    <button onClick={() => handlePageChange(page - 1)}>
                        Previous
                    </button>
                }

                {
                page < totalpage &&
                    <button className='text-white' onClick={() => handlePageChange(page + 1)}>
                        Next
                    </button>
                }

                <p className='underline'>Page <span className='text-white'> {page}  </span>of {totalpage}</p>
            </div>
        </div>
    )
}

export default Page
