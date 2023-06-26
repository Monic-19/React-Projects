import React from 'react'

const Header = () => {
  return (
    <div>
      <header className=' flex justify-between p-6 text-2xl bg-[#BDC4A7] text-[#2F2F2F] overflow-y-hidden'>
        <h1 className='pl-8 hover:scale-150 duration-300'>My Blogs</h1>
        {/* <h3 className='pr-8 cursor-pointer'>Dark Theme</h3> */}
      </header>
    </div>
  )
}

export default Header
