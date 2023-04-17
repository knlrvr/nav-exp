import React, { useState } from 'react'
import Image from 'next/image'

import {
    BsChevronLeft,
    BsChevronRight
  } from 'react-icons/bs'

const TabTwo = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-16 mb-12 md:ml-44">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-4">
            <div className="overflow-hidden col-span-2 row-span-2">
              <Image 
                src="https://images.unsplash.com/photo-1568781269551-3e3baf5ec909"
                width="1000"
                height="0"
                alt="art 1"
                className=""
              />
            </div>
            <div className="col-span-2 row-span-2">
              <Image 
                src="https://images.unsplash.com/photo-1564296787019-78c9b13c9b22"
                width="1000"
                height="0"
                alt="art 2"
                className=""
              />
            </div>
            <div className="col-span-2 row-span-2">
              <Image 
                src="https://images.unsplash.com/photo-1561613629-176bbc598143"
                width="1000"
                height="0"
                alt="art 3"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default TabTwo