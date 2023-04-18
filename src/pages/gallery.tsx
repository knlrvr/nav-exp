import React, { useState } from 'react'
import Image from 'next/image'

import {
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs'

import TabOne from '@/components/gallery/tabOne'
import TabTwo from '@/components/gallery/tabTwo'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('TabOne');

  const handleTabOne = () => {
    setActiveTab('TabOne');
  };
  const handleTabTwo = () => {
    setActiveTab('TabTwo');
  };

  return (
    <div className="h-full md:h-screen flex flex-col justify-center max-w-5xl mx-auto">
      
      {activeTab === 'TabOne' ? <TabOne /> : <TabTwo />}

      <div className="flex justify-end space-x-6 px-4 mb-32 mt-8">
        <div className={activeTab === "TabOne" ? 'bg-gray-500 p-2 rounded-full' : 'bg-blue-600 p-2 rounded-full hover:bg-blue-500 cursor-pointer'}
          onClick={handleTabOne}>
          <BsChevronLeft 
            className="text-3xl" />
        </div> 
        <div className={activeTab === "TabTwo" ? 'bg-gray-500 p-2 rounded-full' : 'bg-blue-600 p-2 rounded-full hover:bg-blue-500 cursor-pointer'}
          onClick={handleTabTwo}>
          <BsChevronRight 
            className="text-3xl" />
        </div>
      </div>
    </div>
  )
}

export default Gallery

// bg-blue-600 p-2 rounded-full hover:bg-blue-500

// bg-gray-500 p-2 rounded-full