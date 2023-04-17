import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="fixed bottom-6 inset-x-0">
          <div className="flex justify-center text-xs group text-white">
            <Link href="https://github.com/knlrvr" target="_blank"
              className="">
              <span className="">&copy;</span> KNLRVR
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer 