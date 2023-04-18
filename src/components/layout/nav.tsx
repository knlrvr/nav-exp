import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Transition } from "@headlessui/react";

import {
  AiOutlineMenu,
  AiOutlineClose
 } from 'react-icons/ai'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  return (
  <>
  <div>
      <nav className="bg-black">
        <div className="max-w-5xl mx-auto md:absolute inset-x-0 top-1/3">
          <div className="flex justify-start flex-col p-1">

            <div className="flex px-4">
              <div className="hidden md:block">
                <div className="flex flex-col space-y-2 w-36">
                  <Link
                    href="/"
                    onClick={() => setActivePage('home')}
                    className={`${activePage === 'home' ? 'text-white px-3 py-2 rounded-md bg-[#333] transition duration-200' : 'text-gray-400 px-3 py-2'}`}
                  >
                    Home
                  </Link>
                  <span className="border border-gray-400"></span>
                  <Link
                    href="/about"
                    onClick={() => setActivePage('about')}
                    className={`${activePage === 'about' ? 'text-white px-3 py-2 rounded-md bg-[#333] transition duration-200]' : 'text-gray-400 px-3 py-2'}`}
                  >                  
                    About
                  </Link>
                  <span className="border border-gray-400"></span>
                  <Link
                    href="/gallery"
                    onClick={() => setActivePage('gallery')}
                    className={`${activePage === 'gallery' ? 'text-white px-3 py-2 rounded-md bg-[#333] transition duration-200' : 'text-gray-400 px-3 py-2'}`}
                  >                  
                    Gallery
                  </Link>
                  <span className="border border-gray-400"></span>
                  <Link
                    href="/contact"
                    onClick={() => setActivePage('contact')}
                    className={`${activePage === 'contact' ? 'text-white px-3 py-2 rounded-md bg-[#333] transition duration-200' : 'text-gray-400 px-3 py-2'}`}
                  >                  
                    Contact
                  </Link>
                </div>
              </div>

            </div>
            <div className="absolute right-4 top-2">
              <div className="flex md:hidden justify-end">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-1 rounded-md text-white hover:bg-[#333] focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <AiOutlineMenu
                        className="text-3xl" />
                    ) : (
                    <AiOutlineClose 
                        className="text-3xl" />
                    )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="pt-2 pb-3 space-y-1 px-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:bg-[#333] text-white block px-3 py-2 rounded-lg text-xl"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:bg-[#333] text-white block px-3 py-2 rounded-lg text-xl"
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:bg-[#333] text-white block px-3 py-2 rounded-lg text-xl"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:bg-[#333] text-white block px-3 py-2 rounded-lg text-xl"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  </>
  )
}

export default Nav;