import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

function More() {
  return (
    <Popover className="relative"> 
      <PopoverButton className="py-1 block group">
        <div className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" ><path fill="#fff" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></svg>

          </div>
          <div className="pr-4 mb-2 text-xl">
            Daha fazla
          </div>


        </div>

      </PopoverButton>
      <PopoverPanel className={"w-[318px] absolute bottom-0 left-0 bg-black shadow-lg rounded-lg p-4 mt-2  "}>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-gray-500 font-bold">Hesap</div>
          <div className="text-sm text-gray-500 font-bold">Listeler</div>
          <div className="text-sm text-gray-500 font-bold">Kayıtlı Tweetler</div>
          <div className="text-sm text-gray-500 font-bold">İlgili hesaplar</div>
          <div className="text-sm text-gray-500 font-bold">Karanlık mod</div>
          </div>
        </PopoverPanel>
    </Popover>
  )
}

export default More
