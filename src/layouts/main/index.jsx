import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import RightBar from './rightbar'

function MainLayout( ) {
  return (
    <div className="w-[1265px] mx-auto flex"> 

      <Sidebar />
      <main className='flex flex-1 gap-[30px]'>
        <main className='border-x flex-1 max-w-[600px] border-[#2f3336]'>
        <Outlet />

        </main>

    <RightBar />
    </main>


    </div>
  )
}

export default MainLayout
