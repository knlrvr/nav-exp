import React, { useState } from 'react'
import {
  BsTelephone,
  BsEnvelope
} from 'react-icons/bs'

export default function Contact():JSX.Element {

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="flex h-screen justify-center items-center">
          <div className="mb-24 md:ml-48">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col text-center text-3xl">
                <span>Have any questions?</span>
                <span>Get in touch!</span>
              </div>
              <div className="flex flex-col items-center">
                <BsTelephone className="text-4xl"/>
                <p className="mt-4 text-xl">1 800 NOT REAL</p>
              </div>
              <div className="flex flex-col items-center">
                <BsEnvelope className="text-4xl"/>
                <p className="mt-4 text-xl">info@nav-exp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}