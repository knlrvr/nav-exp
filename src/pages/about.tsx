import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <>
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex h-screen justify-center items-center">
                <div className="mb-24 md:ml-44">
                    <div className="grid grid-cols-1 place-items-center gap-4">
                      {/* <div className="w-full h-full flex items-center">
                        <Image 
                          src="https://images.unsplash.com/photo-1512749971649-3c44057ed6ab"
                          width="1000"
                          height="0"
                          alt=""
                          className=""
                        />
                      </div> */}
                      <div className="w-full h-full flex flex-col justify-center items-center p-4">
                        <h2 className="text-2xl uppercase">Lorem ipsum</h2>
                        <p className="text-lg mt-8 font-thin">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Non odio euismod lacinia at quis. Consequat interdum varius sit 
                          amet mattis. Vitae elementum curabitur vitae nunc sed velit. 
                          Nunc consequat interdum varius sit amet. Donec massa sapien 
                          faucibus et molestie ac feugiat sed. Tristique senectus et 
                          netus et.
                          <br/><br />
                          Non enim praesent elementum facilisis leo vel fringilla est. 
                          Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. 
                          Fusce ut placerat orci nulla pellentesque dignissim enim sit.
                        </p>
                        <p className="text-lg mt-8 font-thin flex flex-col items-center">
                          &quot;
                          Sometimes, quotes are unnecessary 
                          &quot;
                          <span><em>- me</em></span>
                        </p>
                      </div>
                    </div>
                    <p className="text-lg mt-8 font-thin px-4">
                      For more information, visit <Link href="https://github.com/knlrvr" target="_blank" className="text-blue-200"><em>my github</em></Link>.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About