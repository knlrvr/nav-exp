import React, { useState } from 'react'
import Image from 'next/image'

import {
    BsChevronLeft,
    BsChevronRight
  } from 'react-icons/bs'

const TabOne = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-16 mb-12 md:ml-44">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-4">
            <div className="overflow-hidden col-span-2 row-span-2">
              <Image 
                src="https://images.unsplash.com/photo-1562563428-62075476481b"
                width="1000"
                height="0"
                alt="art 1"
                className=""
              />
            </div>
            <div className="col-span-2 row-span-2">
              <Image 
                src="https://images.unsplash.com/photo-1561266436-869747b1bff7"
                width="1000"
                height="0"
                alt="art 2"
                className=""
              />
            </div>
            <div className="col-span-2 row-span-2">
              <Image 
                src="https://images.unsplash.com/photo-1564934303963-6dc633d0e192"
                width="1000"
                height="0"
                alt="art 3"
                className=""
              />
            </div>
            <div className="overflow-hidden col-span-2 row-span-2">
              <Image 
                src="https://images.unsplash.com/photo-1565502233244-0b40001723d9"
                width="1000"
                height="0"
                alt="art 4"
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

export default TabOne