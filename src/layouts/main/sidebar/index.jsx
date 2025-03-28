import React from 'react'
import Logo from './logo'
import Menu from './menu'

function Sidebar() {
  return (
    <div className='xl:w-[275px] flex flex-col w-[165px] min-h-screen px-2'>
      
      <Logo />

      <Menu />
      
    </div>
  )
}

export default Sidebar
