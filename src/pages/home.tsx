import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="flex h-screen justify-center items-center">
          <div className="mb-24 md:ml-32">
            <div className="flex flex-col">
              <span className="font-dancing text-5xl">
                Welcome to
              </span>
              <span className='font-sedgwick text-7xl'>
                Absolutely nothing
              </span>
              <span className="mt-8 font-dancing text-2xl">
                Enjoy!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home