import React from 'react'

function Navbar() {
    return (
        <div>
          <nav className='d-flex flex-row mb-3 p-1  bg-info-subtle text-emphasis-info'>
            
            <a className='p-3   fs-4'>Tour data</a>
            <a className='p-3 text-info fs-4'>Home</a>
            <a className='p-3 text-info fs-4 opacity-50'>About us </a>
          </nav>
        </div>
    )
}

export default Navbar
